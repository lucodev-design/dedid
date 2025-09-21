// Generar estrellas fugaces aleatoriamente
const container = document.querySelector(".shooting-stars");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");

  // Posición inicial aleatoria
  star.style.top = Math.random() * window.innerHeight + "px";
  star.style.left = Math.random() * window.innerWidth + "px";

  // Duración aleatoria
  star.style.animationDuration = (Math.random() * 2 + 2) + "s";

  container.appendChild(star);

  // Eliminar después de animación
  setTimeout(() => {
    star.remove();
  }, 3000);
}

// Crear una estrella cada cierto tiempo
setInterval(createStar, 1000);
