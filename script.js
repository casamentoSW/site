/* ==========================================
   CONTROLO DA TELA DE CARREGAMENTO (BLINDADO)
============================================= */
window.addEventListener('load', () => {
  document.fonts.ready.then(() => {
    // 1. A fonte luxuosa chegou! Inicia a animação de respirar.
    document.body.classList.add('fonte-pronta');
    
    // 2. Aguarda 2 segundos para o convidado apreciar o monograma, e depois revela o site.
    setTimeout(() => {
      document.body.classList.add('carregado');
    }, 2000);
  });
});

/* ==========================================
   CONTAGEM REGRESSIVA
============================================= */
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
   INTEGRAÇÃO UNIVERSAL DE CALENDÁRIO (LINK DIRETO)
============================================= */
document.addEventListener("DOMContentLoaded", function() {
  const btnCalendario = document.getElementById("btn-calendario");
  
  if (btnCalendario) {
    btnCalendario.addEventListener("click", function(e) {
      e.preventDefault();
      
      const titulo = "Casamento Sara & Wilson 💍";
      const local = "Kyalami — Wake Park (A 1h de Cuiabá)";
      const descricao = "Atenção: Sair de casa com 1 hora de antecedência devido à distância de Cuiabá! Cerimônia pontualmente às 15h30.";
      
      // Fusos transformados para formato UTC absoluto
      const inicio = "20261219T193000Z";
      const fim = "20261220T010000Z"; 

      // Link direto: Abre a aplicação nativa sem descarregar ficheiros!
      const urlGoogle = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(titulo)}&dates=${inicio}/${fim}&details=${encodeURIComponent(descricao)}&location=${encodeURIComponent(local)}`;
      
      window.open(urlGoogle, "_blank");
    });
  }

  /* ==========================================
     ANIMAÇÕES DE SCROLL (EFEITO APPLE)
  ============================================= */
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