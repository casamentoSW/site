const DATA_CASAMENTO = new Date("2026-12-19T15:30:00-04:00");

(function contagem() {
  const alvo = document.getElementById("contagem");
  if (!alvo || isNaN(DATA_CASAMENTO)) return;

  const campo = (nome) => alvo.querySelector('[data-contagem="' + nome + '"]');
  const dias = campo("dias"), horas = campo("horas"), minutos = campo("minutos"), segundos = campo("segundos");
  const doisDigitos = (n) => String(n).padStart(2, "0");

  function tick() {
    const resta = DATA_CASAMENTO - new Date();
    if (resta <= 0) {
      alvo.innerHTML = '<span class="bloco" style="min-width:auto"><b>Chegou o dia!</b></span>';
      clearInterval(id);
      return;
    }
    const s = Math.floor(resta / 1000);
    dias.textContent = Math.floor(s / 86400);
    horas.textContent = doisDigitos(Math.floor(s / 3600) % 24);
    minutos.textContent = doisDigitos(Math.floor(s / 60) % 60);
    segundos.textContent = doisDigitos(s % 60);
  }

  tick();
  const id = setInterval(tick, 1000);
})();

document.addEventListener("DOMContentLoaded", function() {
  const elementosAnimar = document.querySelectorAll(".animar-scroll");
  
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    elementosAnimar.forEach((el) => observer.observe(el));
  } else {
    elementosAnimar.forEach((el) => el.classList.add("visivel"));
  }
});