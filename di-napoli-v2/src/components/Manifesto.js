export function initManifesto() {
  const manifestoSection = document.getElementById('manifesto');
  if (!manifestoSection) return;

  // Text animation for the manifesto quote
  const headline = manifestoSection.querySelector('h2');
  if (headline) {
    // Split text into words for staggered animation
    const text = headline.innerHTML;
    const words = text.split(' ');
    headline.innerHTML = words.map((word, i) =>
      `<span class="inline-block opacity-0 transform translate-y-4" style="transition-delay: ${i * 80}ms">${word}</span>`
    ).join(' ');

    // Trigger animation when visible
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            entry.target.querySelectorAll('span').forEach(span => {
              span.style.opacity = '1';
              span.style.transform = 'translateY(0)';
              span.style.transition = 'opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
            });
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(headline);
  }
}