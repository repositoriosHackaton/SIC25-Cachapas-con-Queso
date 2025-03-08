from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json
import google.generativeai as genai
import numpy as np
import pandas as pd
from dotenv import load_dotenv

#Config Google
genai.configure(api_key="AIzaSyAjE1QNbVUs-5tDOOcWQa_vFdZxxqd1Ass")

model = genai.GenerativeModel('gemini-1.5-flash')

chat = model.start_chat(history=[])

response = chat.send_message("Olvida cualquier conversación anterior")

prompt_inicial = """
A partir de ahora te voy a dar frases, que son cadenas con solicitudes, vas a seguir el siguiente criterio para entregarme respuestas, necesito lo siguiente:

Entiende la intención y los elementos de la frase

Ahora con esa frase, detecta características que se solicitan como:

-Un booleano de nombre "receta" que sea true si el contenido de la cadena tiene que ver con recetas de comida

-El número de calorías

-El número de proteínas

-El número de carbohidratos

-El número de grasas

-Los ingredientes deseados

-Los Ingredientes no deseados

-Las vitaminas y minerales



y dámela en el siguiente formato json

{
calorías: {número entero de calorías}
proteínas: {número entero de proteínas}
carbohidratos: {número entero de carbohidratos}
grasas: {número entero de grasas}
ingredientes_deseados: {lista de cadenas}
ingredientes_no_deseados: {lista de cadenas}
vitaminas_minerales: {lista de cadenas}
}

De no ser mencionado alguno de los elementos del json simplemente colocar el value de la key en none.

Toma en cuenta que en el caso de no hayan ingredientes_deseados, ingredientes_no_deseados ni vitaminas_minerales nunca debes colocar none en sus valores, en cambio coloca una lista vacía "[]" de tipo lista

Corrige cualquier error gramatical o de sintaxis en los elementos que se planean introducir en el json.

Además, cambia nombre locales a nombres internacionales cuando te encuentres con un ingrediente siendo mencionado en su nombre local.

Cuando te den un ingrediente junto con la cantidad de gramos deseados de tal ingrediente ignora la cantidad de gramos y agrega únicamente el nombre del ingrediente.

Responde únicamente en formato json, no quiero explicación ni texto innecesario en mis respuestas

Por último, si la cadena no tiene nada que ver con el tema de nutrición coloca todos los values de las keys en null y el booleano receta en false
"""

response = chat.send_message(prompt_inicial)

#Config Dataset

load_dotenv()

df_embeddings = pd.read_csv('assets/data/datos_embeddings_actualizado.csv')

for columna in [
    "Categoria_Embeddings", "Nombre_Embeddings", "Ingredientes_Embeddings", "Calorias_Embeddings",
    "Grasa Total(gr)_Embeddings", "Colesterol(mg)_Embeddings", "Sodio(mg)_Embeddings", "Carbohidrato Total(gr)_Embeddings",
    "Proteina(gr)_Embeddings", "Vitamina A(mcg)_Embeddings", "Vitamina C(mg)_Embeddings", "Vitamina D(mcg)_Embeddings",
    "Calcio(mg)_Embeddings", "Hierro(mg)_Embeddings", "Potasio(mg)_Embeddings"
]:
    df_embeddings[columna] = df_embeddings[columna].apply(
        lambda x: np.array([float(i) for i in x.strip("[]").replace(",", "").split()])
    )

#Config FastAPI

class RespuestaAPIExterna(BaseModel):
    # Define la estructura de la respuesta de la API externa
    # Ajusta esto según la estructura real de la respuesta
    categoria: str
    enlace: str
    nombre: str
    imagenURL: str
    ingredientes: str
    calorias: int
    grasa: float
    colesterol: int
    sodio: int
    carbohidrato: float
    proteina: float
    vitamina_a: int
    vitamina_c: float
    vitamina_d: int
    calcio: int
    hierro: float
    potasio: int

app = FastAPI()

origins = [
    "http://127.0.0.1:5500",  # Permite tu dominio local
    "http://localhost:5500",  # Permite localhost
    # Agrega aquí otros dominios que necesites permitir
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Endpoints

@app.get("/")
def read_root():
    return {"Fast": "API!!"}

@app.get("/obtener_receta_json")
async def obtener_receta_json(cadena_texto: str):

    cadena_json = getRecetaJson(cadena_texto)

    receta_json = obtener_receta(cadena_json)

    return receta_json
#Functions

def obtener_receta(query_client):

    # Filtrar recetas con los criterios dados
    df_filtrado = filtrar_recetas(query_client, df_embeddings)
    # Construir el texto para la búsqueda de similitudes
    query_text = f"Ingredientes deseados: {', '.join(query_client.get('ingredientes_deseados', []))}, " \
                  f"Ingredientes no deseados: {', '.join(query_client.get('ingredientes_no_deseados', []))}, " \
                  f"Vitaminas y minerales: {', '.join(query_client.get('vitaminas_minerales', []))}"

    query_embeddings = np.array(getEmbed(query_text))

    if query_embeddings.shape[0] < 1536:
        query_embeddings = np.pad(query_embeddings, (0, 1536 - query_embeddings.shape[0]), 'constant')
    elif query_embeddings.shape[0] > 1536:
        query_embeddings = query_embeddings[:1536]

    # Si hay recetas filtradas
    if not df_filtrado.empty:
        df_filtrado_reset = df_filtrado.reset_index(drop=True)
        response_option = [
            similitud_cosenos(query_embeddings, np.mean(np.vstack([
                row["Categoria_Embeddings"], row["Nombre_Embeddings"], row["Ingredientes_Embeddings"],
                row["Calorias_Embeddings"], row["Grasa Total(gr)_Embeddings"], row["Colesterol(mg)_Embeddings"],
                row["Sodio(mg)_Embeddings"], row["Carbohidrato Total(gr)_Embeddings"], row["Proteina(gr)_Embeddings"],
                row["Vitamina A(mcg)_Embeddings"], row["Vitamina C(mg)_Embeddings"], row["Vitamina D(mcg)_Embeddings"],
                row["Calcio(mg)_Embeddings"], row["Hierro(mg)_Embeddings"], row["Potasio(mg)_Embeddings"]
            ]), axis=0))
            for _, row in df_filtrado_reset.iterrows()
        ]
        
        if response_option:
            pos = np.argmax(response_option)
            request_data = df_filtrado_reset.loc[pos]

            respuesta_formateada = {
                "categoria": str(request_data["Categoria"]),
                "enlace": str(request_data["Enlace"]),
                "nombre": str(request_data["Nombre"]),
                "imagenURL": str(request_data["ImagenURL"]),
                "ingredientes": str(request_data["Ingredientes"]),
                "calorias": int(request_data["Calorias"]),
                "grasa": float(request_data["Grasa Total(gr)"]),
                "colesterol": int(request_data["Colesterol(mg)"]),
                "sodio": int(request_data["Sodio(mg)"]),
                "carbohidratos": float(request_data["Carbohidrato Total(gr)"]),
                "proteina": float(request_data["Proteina(gr)"]),
                "vitaminaA": float(request_data["Vitamina A(mcg)"]),
                "vitaminaC": float(request_data["Vitamina C(mg)"]),
                "vitaminaD": float(request_data["Vitamina D(mcg)"]),
                "calcio": float(request_data["Calcio(mg)"]),
                "hierro": float(request_data["Hierro(mg)"]),
                "potasio": float(request_data["Potasio(mg)"]),
            }

            return respuesta_formateada

    # Si no se encuentran recetas que coincidan con los criterios
    return json.dumps({"mensaje": "No se encontraron recetas que coincidan con los criterios."}, ensure_ascii=False)

def filtrar_recetas(json_query, df):

    for key, value in json_query.items():
        if value is not None:
            if key == "calorías":
                df = df[df["Calorias"] <= value]
            elif key == "proteínas":
                df = df[df["Proteina(gr)"] >= value]
            elif key == "carbohidratos":
                df = df[df["Carbohidrato Total(gr)"] <= value]
            elif key == "grasas":
                df = df[df["Grasa Total(gr)"] <= value]
            elif key == "ingredientes_deseados":
                df = df[df["Ingredientes"].apply(lambda x: all(ing.lower() in x.lower() for ing in value))]
            elif key == "ingredientes_no_deseados":
                df = df[df["Ingredientes"].apply(lambda x: all(ing.lower() not in x.lower() for ing in value))]
            elif key == "vitaminas_minerales":
                for vit in value:
                    if vit in df.columns:
                        df = df[df[vit] > 0]  # Filtra solo si el valor de la vitamina/mineral es mayor a 0
    print("Filtrar Done")
    return df

def similitud_cosenos(vect1: np.ndarray, vect2: np.ndarray) -> float:
    dot_product = np.dot(vect1, vect2)
    norm_A = np.linalg.norm(vect1)
    norm_B = np.linalg.norm(vect2)
    return dot_product / (norm_A * norm_B)

def getRecetaJson(cadena):
    responseLocal = chat.send_message(cadena)

    cadena_json = responseLocal.text.replace("json", "").replace("```", "").replace("```", "").strip()
    datos = json.loads(cadena_json)

    return datos

def getEmbed(cadena):
    result = genai.embed_content(
        model="models/embedding-001",
        content=cadena,
        task_type="semantic_similarity")
    return result['embedding']