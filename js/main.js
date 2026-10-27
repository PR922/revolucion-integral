// Inicializa AOS (animaciones al hacer scroll).
// Se desactiva si el usuario pidió "reducir movimiento" en su sistema.
AOS.init({
  duration: 800,
  once: true,
  offset: 80,
  disable: function () {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
});
