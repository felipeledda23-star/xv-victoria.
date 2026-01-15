const eventDate = new Date("2026-04-11T22:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff < 0) {
    document.getElementById("countdown").innerHTML = "¡Es hoy!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `${days} días · ${hours} hs · ${minutes} min`;
}, 1000);

function playMusic() {
  document.getElementById("music").play();
}
