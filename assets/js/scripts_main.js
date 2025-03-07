const chatButton = document.getElementById("chat-button");
const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

const arregloRecetasPreCargadas = [
  {
    cadena: "Receta0",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta0",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta1",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta1",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta2",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta2",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta3",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta3",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta4",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta4",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta5",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta5",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
  {
    cadena: "Receta7",
    categoria: "Desayuno",
    enlace:
      "https://medlineplus.gov/spanish/recetas/avena-de-la-noche-a-la-manana/",
    nombre: "Receta6",
    imagenURL: "https://medlineplus.gov/images/recipe_overnightoatmeal.jpg",
    ingredientes:
      "1 taza de avena tradicional (old fashioned) sin cocer | 1 taza de yogur descremado | 1/2 taza de leche descremada o de 1 porciento de grasa | 1/2 taza de arándanos frescos o congelados | 1/2 taza de trocitos de manzana (aproximadamente | 1/3 manzana mediana cortada en 3 de diámetro)",
    calorias: 5,
    grasa: 5,
    colesterol: 5,
    sodio: 5,
    carbohidratos: 5,
    proteina: 5,
    vitaminaA: 5,
    vitaminaC: 5,
    vitaminaD: 5,
    calcio: 555,
    hierro: 5,
    potasio: 555,
  },
];

function sendMessage() {
  const message = messageInput.value;
  if (message) {
    chatMessages.innerHTML += `<div class="user-message"><p >${message}</p></div>`;
    messageInput.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function chatSystem() {
  chatButton.addEventListener("click", () => {
    // Chat window display flex y focus input
    chatWindow.style.display = "flex";
    messageInput.focus();
  });
  // Cerrar Chad dando click afuera
  chatWindow.addEventListener("click", () => {
    // Chat window display none click afuera
    chatWindow.style.display = "none";
    chatWindow.stopPropagation();
  });
  // Stop Propagation
  chatMessages.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  messageInput.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  sendButton.addEventListener("click", (event) => {
    // Enviar mensaje click
    event.stopPropagation();
    sendMessage();
  });

  messageInput.addEventListener("keydown", (e) => {
    // Enviar mensaje enter
    if (event.key === "Enter") {
      sendMessage();
      e.preventDefault();
    }
  });
}

function cargaRecetas() {
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("history-msg")) {
      const idMensaje = event.target.id;
      const numeroID = parseInt(idMensaje.replace("receta-aside-", ""));
      cargarRecetaMain(idMensaje, numeroID);
    }
  });
  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("tab")) {
      const idMensaje = event.target.id;
      const numeroID = parseInt(idMensaje.replace("tab-", ""));
      cargarRecetaMain(idMensaje, numeroID);
    }
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  chatSystem();
  cargaRecetas();
});

async function cargarRecetaMain(cadenaTexto, numeroID) {
  const $tabs = document.querySelectorAll(".tab");

  let band = true;
  for (let i = 0; i < $tabs.length; i++) {
    const $tab = $tabs[i];
    const id = parseInt($tab.id.replace("tab-", ""));
    if (numeroID === id) {
      band = false;
      break;
    }
  }

  if (band) {
    console.log("No existe");
    // Si no existe una Tab
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/obtener_ejemplo?cadena_texto=${cadenaTexto}`
      );
      const datos = await response.json();

      crearTab("tabs-head", datos.nombre, numeroID, datos);
      cargarJsonMain("main-content", datos);
      focusTab(numeroID);

      return datos;
    } catch (error) {
      console.error("Error al obtener datos:", error);
      return null;
    }
  } else {
    console.log("Existe");
    // Si existe una tab
    console.log(numeroID);
    console.log(arregloRecetasPreCargadas[numeroID]);
    cargarJsonMain("main-content", arregloRecetasPreCargadas[numeroID]);
    focusTab(numeroID);
  }
}

function cargarJsonMain(idContenedor, recetaJson) {
  $contenedor = document.getElementById(idContenedor);
  if ($contenedor)
    $contenedor.innerHTML = `<div class="main-zone">
          <div class="main-left">
            <div class="img-container">
              <img src="${recetaJson.imagenURL}" alt="" />
            </div>
            <div class="history-msg main-nutri-card">
              <div class="nutri-values">
                <div class="values">
                  <span class="total-cal">${recetaJson.calorias}Kcal</span>
                  <span class="fw-big"
                    ><span>Prot</span> <span>${recetaJson.proteina}gr</span></span
                  >
                  <span class="fw-big"
                    ><span>Carbs</span> <span>${recetaJson.carbohidratos}gr</span></span
                  >
                  <span class="fw-big"
                    ><span>Grasa</span> <span>${recetaJson.grasa}gr</span></span
                  >
                  <span><span>Colesterol</span> <span>${recetaJson.colesterol}mg</span></span>
                  <span><span>Sodio</span> <span>${recetaJson.sodio}mg</span></span>
                  <span><span>Vitamina A</span> <span>${recetaJson.vitaminaA}mcg</span></span>
                  <span><span>Vitamina C</span> <span>${recetaJson.vitaminaC}mg</span></span>
                  <span><span>Vitamina D</span> <span>${recetaJson.vitaminaD}mcg</span></span>
                  <span><span>Calcio</span> <span>${recetaJson.calcio}mg</span></span>
                  <span><span>Hierro</span> <span>${recetaJson.hierro}mg</span></span>
                  <span><span>Potasio</span> <span>${recetaJson.potasio}mg</span></span>
                </div>
              </div>
            </div>
          </div>
          <div class="main-right">
            <h2>${recetaJson.nombre}</h2>
            <ul id="ingredientes">
              <li>Ingrediente1</li>
              <li>Ingrediente2</li>
              <li>Ingrediente3</li>
              <li>Ingrediente4</li>
              <li>Ingrediente5</li>
              <li>Ingrediente6</li>
              <li>Ingrediente7</li>
              <li>Ingrediente8</li>
              <li>Ingrediente9</li>
              <li>Ingrediente10</li>
            </ul>
          </div>
        </div>
      </div>`;
}

function crearTab(idContenedor, titulo, numeroID, recetaJson) {
  const $contenedor = document.getElementById(idContenedor);

  if ($contenedor) {
    const nuevoTab = document.createElement("div");
    nuevoTab.className = "tab";

    const tituloTab = document.createElement("h2");
    tituloTab.textContent = titulo;

    nuevoTab.id = `tab-${numeroID}`;

    nuevoTab.appendChild(tituloTab);
    $contenedor.appendChild(nuevoTab);

    arregloRecetasPreCargadas[numeroID] = recetaJson;
  } else {
    console.error(`No se encontró el contenedor con ID: ${idContenedor}`);
  }
}

function focusTab(numeroID) {
  $viejaTab = document.querySelector(".focusTab");
  $nuevaTab = document.getElementById(`tab-${numeroID}`);

  $viejaTab.classList.remove("focusTab");
  $nuevaTab.classList.add("focusTab");
}
