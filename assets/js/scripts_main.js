const chatButton = document.getElementById("chat-button");
const chatWindow = document.getElementById("chat-window");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
const chatMessages = document.getElementById("chat-messages");

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
      cargarRecetaMain(idMensaje);
    }
  });
}

document.addEventListener("DOMContentLoaded", (e) => {
  chatSystem();
  cargaRecetas();
});

// async function consultarAPI(itemId, query) {
//   const url = `http://127.0.0.1:8000/items/${itemId}${
//     query ? `?q=${query}` : ""
//   }`;

//   try {
//     const respuesta = await fetch(url);
//     const datos = await respuesta.json();
//     console.log(datos); // Imprime el resultado en la consola
//   } catch (error) {
//     console.error("Error al consultar la API:", error);
//   }
// }

// // Ejemplo de uso:
// consultarAPI(123, "test"); // Consulta /items/123?q=test
// consultarAPI(456); // Consulta /items/456

//---------------------------------------------------------------

async function cargarRecetaMain(cadenaTexto) {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/obtener_ejemplo?cadena_texto=${cadenaTexto}`
    );
    const datos = await response.json();

    // Imprimir el objeto JSON completo
    crearTab("tabs-head", datos.nombre);
    cargarJsonMain("main-content", datos);

    // Imprimir cada clave con su valor
    for (const clave in datos) {
      console.log(`${clave}: ${datos[clave]}`);
    }

    return datos; // Opcional: retornar los datos para usarlos en otro lugar
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return null; // Opcional: retornar null en caso de error
  }
}

// Ejemplo de uso:
const texto = "Texto de ejemplo";

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
            <h2>TÍTULO DE LA RECETA</h2>
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

function crearTab(idContenedor, titulo) {
  const $contenedor = document.getElementById(idContenedor);

  if ($contenedor) {
    const nuevoTab = document.createElement("div");
    nuevoTab.className = "tab";

    const tituloTab = document.createElement("h2");
    tituloTab.textContent = titulo;

    nuevoTab.appendChild(tituloTab);
    $contenedor.appendChild(nuevoTab);
  } else {
    console.error(`No se encontró el contenedor con ID: ${idContenedor}`);
  }
}
