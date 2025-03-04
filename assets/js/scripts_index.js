const container = document.querySelector(".container");

function createFallingElement() {
  const element = document.createElement("div");
  element.classList.add("falling-element");

  // Posición inicial aleatoria en el eje X
  element.style.left = Math.random() * window.innerWidth + "px";

  // Velocidad de caída aleatoria
  const speed = Math.random() * 3 + 1;

  // Tamaño aleatorio
  const size = Math.random() * 20 + 10;
  element.style.width = size + "px";
  element.style.height = size + "px";

  // Opacidad aleatoria inicial
  element.style.opacity = Math.random();

  container.appendChild(element);

  // Animación de caída
  let positionY = -size; // Comienza fuera de la pantalla
  function animate() {
    positionY += speed;
    element.style.top = positionY + "px";

    // Elimina el elemento cuando sale de la pantalla
    if (positionY > window.innerHeight) {
      element.remove();
    } else {
      requestAnimationFrame(animate);
    }
  }

  animate();
}

// Crea nuevos elementos cada cierto tiempo
setInterval(createFallingElement, 200);
