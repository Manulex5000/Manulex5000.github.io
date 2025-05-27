// Selecciona todos los elementos con clase fade-in
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Opcional: dejar de observar el elemento para optimizar performance
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

// Observa cada elemento
fadeElements.forEach(el => observer.observe(el));
