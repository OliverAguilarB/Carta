// Mostrar el botón con animación
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("boton-carta");

  setTimeout(() => {
    boton.style.transition = "all 1s ease";
    boton.style.opacity = 1;
    boton.style.transform = "translateY(0)";
  }, 300);

  // Animar corazones flotantes
  const container = document.querySelector(".corazones-container");

  function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.textContent = "❤️";

    // Posición aleatoria en X
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 20 + "px";
    container.appendChild(corazon);

    // Eliminar después de flotar
    setTimeout(() => {
      corazon.remove();
    }, 8000);
  }

  // Crear corazones cada medio segundo
  setInterval(crearCorazon, 500);
});
