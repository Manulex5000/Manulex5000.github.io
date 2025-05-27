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

document.addEventListener("DOMContentLoaded", function() {
  // Función para obtener los datos
  async function obtenerDatos() {
    try {
      // Obtener datos del petróleo WTI
      const wtiResponse = await fetch('https://www.preciopetroleo.net/api/v1/wti');
      const wtiData = await wtiResponse.json();
      const wtiPrecio = wtiData.precio;

      // Obtener datos del petróleo Brent
      const brentResponse = await fetch('https://www.preciopetroleo.net/api/v1/brent');
      const brentData = await brentResponse.json();
      const brentPrecio = brentData.precio;

      // Obtener datos del dólar en COP
      const dolarResponse = await fetch('https://www.dolar-colombia.com/api/v1/dolar');
      const dolarData = await dolarResponse.json();
      const dolarPrecio = dolarData.valor;

      // Actualizar el contenido en la página
      document.getElementById("wti-price").textContent = `$${wtiPrecio.toFixed(2)} USD`;
      document.getElementById("brent-price").textContent = `$${brentPrecio.toFixed(2)} USD`;
      document.getElementById("usd-cop").textContent = `$${dolarPrecio.toFixed(2)} COP`;
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  }

  // Llamar a la función para obtener y mostrar los datos
  obtenerDatos();
});

