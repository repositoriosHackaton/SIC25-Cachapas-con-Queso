from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests

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

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.get("/obtener_datos")
async def obtener_datos(cadena_texto: str):
    """
    Recibe una cadena de texto, hace una solicitud a una API externa,
    y retorna un JSON con los datos especificados.
    """
    url_api_externa = f"URL_DE_LA_API_EXTERNA?q={cadena_texto}"  # Reemplaza con la URL real

    try:
        respuesta = requests.get(url_api_externa)
        respuesta.raise_for_status()  # Lanza una excepción para errores HTTP
        datos_api_externa = RespuestaAPIExterna(**respuesta.json())

        # Crea el JSON de respuesta con los datos formateados
        respuesta_formateada = {
            "Categoria": datos_api_externa.categoria,
            "Enlace": datos_api_externa.enlace,
            "Nombre": datos_api_externa.nombre,
            "ImagenURL": datos_api_externa.imagenURL,
            "Ingredientes": datos_api_externa.ingredientes,
            "Calorias": datos_api_externa.calorias,
            "Grasa": datos_api_externa.grasa_total,
            "Colesterol": datos_api_externa.colesterol,
            "Sodio": datos_api_externa.sodio,
            "Carbohidrato": datos_api_externa.carbohidrato_total,
            "Proteina": datos_api_externa.proteina,
            "Vitamina A": datos_api_externa.vitamina_a,
            "Vitamina C": datos_api_externa.vitamina_c,
            "Vitamina D": datos_api_externa.vitamina_d,
            "Calcio": datos_api_externa.calcio,
            "Hierro": datos_api_externa.hierro,
            "Potasio": datos_api_externa.potasio,
        }

        return respuesta_formateada

    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail=f"Error al conectar con la API externa: {e}")
    except ValueError as e:
        raise HTTPException(status_code=500, detail=f"Error al procesar la respuesta de la API externa: {e}")
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error inesperado: {e}")
    

    
@app.get("/obtener_ejemplo")
async def obtener_datos_vacio(cadena_texto: str):
    """
    Recibe una cadena de texto y retorna un JSON con las claves especificadas,
    pero con los valores vacíos (None) para que puedas reemplazarlos.
    """
    # Aquí puedes agregar la lógica para obtener los datos de la API externa
    # o de cualquier otra fuente de datos.
    # Por ahora, simularemos que no hay datos.

    respuesta_formateada = {
        "cadena": cadena_texto,
        "categoria": "Desayuno",
        "enlace": "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
        "nombre": "Avena de la noche a la mañana",
        "imagenURL": "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
        "ingredientes": "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
        "calorias": 160,
        "grasa": 3,
        "colesterol": 5,
        "sodio": 55,
        "carbohidratos": 27,
        "proteina": 8,
        "vitaminaA": 27,
        "vitaminaC": 8,
        "vitaminaD": 0,
        "calcio": 162,
        "hierro": 1,
        "potasio": 306,
    }

    return respuesta_formateada