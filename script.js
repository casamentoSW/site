/* Horário travado exatamente às 15h30 no fuso de Cuiabá (UTC-4) */
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

/* ==========================================
   INTEGRAÇÃO INTELIGENTE COM O CALENDÁRIO
============================================= */
document.addEventListener("DOMContentLoaded", function() {
  const btnCalendario = document.getElementById("btn-calendario");
  
  if (btnCalendario) {
    btnCalendario.addEventListener("click", function(e) {
      e.preventDefault();
      
      const titulo = "Casamento Sara & Wilson 💍";
      const local = "Kyalami — Wake Park (A 1h de Cuiabá)";
      const descricao = "Atenção: Sair de casa com 1 hora de antecedência devido à distância de Cuiabá! Cerimônia pontualmente às 15h30.";
      const inicio = "20261219T153000";
      const fim = "20261219T210000"; // Término estimado da festa

      // Verifica se é utilizador Apple (iOS/Mac) ou Android/PC para criar o link adequado
      const isApple = /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);

      if (isApple) {
        // Formato ICS via Blob para dispositivos Apple
        const icuData = [
          "BEGIN:VCALENDAR",
          "VERSION:2.0",
          "BEGIN:VEVENT",
          "SUMMARY:" + titulo,
          "DESCRIPTION:" + descricao,
          "LOCATION:" + local,
          "DTSTART:" + inicio,
          "DTEND:" + fim,
          "END:VEVENT",
          "END:VCALENDAR"
        ].join("\n");

        const blob = new Blob([icuData], { type: "text/calendar;charset=utf-8" });
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(blob);
        link.setAttribute("download", "casamento-sara-wilson.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else {
        // Link direto para o Google Calendar para Android/PC
        const urlGoogle = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=${inicio}/${fim}&details=${encodeURIComponent(descricao)}&location=${encodeURIComponent(local)}`;
        window.open(urlGoogle, "_blank");
      }
    });
  }

  // Animações de Scroll
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