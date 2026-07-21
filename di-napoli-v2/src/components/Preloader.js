export function initPreloader() {
  const preloader = document.getElementById('preloader');
  const preloaderText = document.getElementById('preloader-text');
  const preloaderLine = document.getElementById('preloader-line');

  if (!preloader) return;

  // Start entrance animation
  requestAnimationFrame(() => {
    if (preloaderText) preloaderText.style.transform = 'translateY(0)';
    if (preloaderLine) preloaderLine.style.transform = 'scaleX(1)';
  });

  // Hide preloader after content is ready
  const hidePreloader = () => {
    preloader.classList.add('loaded');
    setTimeout(() => {
      preloader.style.display = 'none';
    }, 1000);
  };

  // Use load event + minimum display time
  const minDisplayTime = 1500;
  const startTime = performance.now();

  window.addEventListener('load', () => {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(0, minDisplayTime - elapsed);
    setTimeout(hidePreloader, remaining);
  });

  // Fallback: force hide after 4 seconds max
  setTimeout(hidePreloader, 4000);
}