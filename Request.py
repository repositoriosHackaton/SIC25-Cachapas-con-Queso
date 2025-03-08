import numpy as np
import pandas as pd
import os
from langchain_openai import AzureOpenAIEmbeddings
from dotenv import load_dotenv
import json

load_dotenv()

def similitud_cosenos(vect1: np.ndarray, vect2: np.ndarray) -> float:
    dot_product = np.dot(vect1, vect2)
    norm_A = np.linalg.norm(vect1)
    norm_B = np.linalg.norm(vect2)
    return dot_product / (norm_A * norm_B)

# Cargar dataset con embeddings
df_embeddings = pd.read_csv('assets/data/datos_embeddings_actualizado.csv')

# Convertir los embeddings a arrays
for columna in [
    "Categoria_Embeddings", "Nombre_Embeddings", "Ingredientes_Embeddings", "Calorias_Embeddings",
    "Grasa Total(gr)_Embeddings", "Colesterol(mg)_Embeddings", "Sodio(mg)_Embeddings", "Carbohidrato Total(gr)_Embeddings",
    "Proteina(gr)_Embeddings", "Vitamina A(mcg)_Embeddings", "Vitamina C(mg)_Embeddings", "Vitamina D(mcg)_Embeddings",
    "Calcio(mg)_Embeddings", "Hierro(mg)_Embeddings", "Potasio(mg)_Embeddings"
]:
    df_embeddings[columna] = df_embeddings[columna].apply(
        lambda x: np.array([float(i) for i in x.strip("[]").replace(",", "").split()])
    )

# Configurar embeddings
embeddings = AzureOpenAIEmbeddings(
    api_key=os.getenv("openai_embeddings_api_key"),
    base_url=os.getenv("openai_api_base_emb"),
    openai_api_type=os.getenv("openai_api_type"),
)

# Función para filtrar recetas según criterios
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
    return df

# Función que retorna la receta filtrada y recomendada
def obtener_receta(query_client):
    # Filtrar recetas con los criterios dados
    df_filtrado = filtrar_recetas(query_client, df_embeddings)

    # Construir el texto para la búsqueda de similitudes
    query_text = f"Ingredientes deseados: {', '.join(query_client.get('ingredientes_deseados', []))}, " \
                  f"Ingredientes no deseados: {', '.join(query_client.get('ingredientes_no_deseados', []))}, " \
                  f"Vitaminas y minerales: {', '.join(query_client.get('vitaminas_minerales', []))}"

    query_embeddings = np.array(embeddings.embed_query(query_text))

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

            return json.dumps(respuesta_formateada, indent=4, ensure_ascii=False)

    # Si no se encuentran recetas que coincidan con los criterios
    return json.dumps({"mensaje": "No se encontraron recetas que coincidan con los criterios."}, ensure_ascii=False)
