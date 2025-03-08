import google.generativeai as genai

genai.configure(api_key="AIzaSyAjE1QNbVUs-5tDOOcWQa_vFdZxxqd1Ass")

model_embeddings = genai.GenerativeModel('embedding-gecko-001')

# for m in genai.list_models():
#   if 'generateContent' in m.supported_generation_methods:
#     print(m.name)

modelos = genai.list_models()

embeddings = model_embeddings.generate_embeddings(content="Tu texto aquí")
print(embeddings)