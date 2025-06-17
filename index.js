<script>
  const slides = document.querySelectorAll('.carrossel-slide');
  const btnAnterior = document.querySelector('.carrossel-btn.anterior');
  const btnProximo = document.querySelector('.carrossel-btn.proximo');
  let slideAtual = 0;

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  btnAnterior.addEventListener('click', () => {
    slideAtual = (slideAtual - 1 + slides.length) % slides.length;
    mostrarSlide(slideAtual);
  });

  btnProximo.addEventListener('click', () => {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);
  });

  // Slide automático a cada 5 segundos
  setInterval(() => {
    slideAtual = (slideAtual + 1) % slides.length;
    mostrarSlide(slideAtual);

  }, 5000);
  
</script>
