export function initLocation() {
  const locationSection = document.getElementById('localizacao');
  if (!locationSection) return;

  const directionsBtn = locationSection.querySelector('.directions-btn');
  const mapContainer = locationSection.querySelector('.map-container');

  // Directions button - opens Google Maps
  if (directionsBtn) {
    directionsBtn.addEventListener('click', () => {
      const address = encodeURIComponent('Rua das Flores, 1987, Centro, São Paulo, SP');
      const url = `https://www.google.com/maps/dir/?api=1&destination=${address}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  // Load Google Maps embed on interaction (lazy load)
  let mapLoaded = false;

  const loadMap = () => {
    if (mapLoaded) return;
    mapLoaded = true;

    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.5!2d-46.6333!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5a2b2b2b2b2b%3A0x1234567890abcdef!2sRua%20das%20Flores%201987%2C%20Centro%2C%20S%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1234567890';
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.allowFullscreen = '';
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    iframe.title = 'Localização Di Napoli - Rua das Flores 1987, Centro, São Paulo';

    // Replace placeholder image with iframe
    const placeholder = mapContainer.querySelector('.map-placeholder');
    if (placeholder) {
      placeholder.replaceWith(iframe);
    } else {
      mapContainer.innerHTML = '';
      mapContainer.appendChild(iframe);
    }
  };

  // Load map when section is near viewport
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadMap();
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });

  observer.observe(locationSection);

  // Also load on button click
  if (directionsBtn) {
    directionsBtn.addEventListener('click', loadMap, { once: true });
  }
}