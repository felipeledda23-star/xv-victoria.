// FECHA Y HORA DEL EVENTO
const eventDate = new Date("April 11, 2026 22:00:00").getTime();

// ACTUALIZA LA CUENTA REGRESIVA
setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  // SI YA PASÓ EL EVENTO
  if (diff < 0) {
    document.getElementById("countdown").innerHTML =
      "🎉 ¡Hoy es el gran día!";
    return;
  }

  // CÁLCULOS
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // MOSTRAR EN PANTALLA
  document.getElementById("countdown").innerHTML =
    `⏳ ${days} días ${hours} hs ${minutes} min ${seconds} seg`;
}, 1000);

// BOTÓN PARA ACTIVAR LA MÚSICA (CELULARES)
function playMusic() {
  const music = document.getElementById("music");
  if (music) {
    music.play();
  }
}
