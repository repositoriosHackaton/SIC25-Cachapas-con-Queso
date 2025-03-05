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

document.addEventListener("DOMContentLoaded", (e) => {
  chatSystem();
});

async function consultarAPI(itemId, query) {
  const url = `http://127.0.0.1:8000/items/${itemId}${
    query ? `?q=${query}` : ""
  }`;

  try {
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    console.log(datos); // Imprime el resultado en la consola
  } catch (error) {
    console.error("Error al consultar la API:", error);
  }
}

// Ejemplo de uso:
consultarAPI(123, "test"); // Consulta /items/123?q=test
consultarAPI(456); // Consulta /items/456

//---------------------------------------------------------------
