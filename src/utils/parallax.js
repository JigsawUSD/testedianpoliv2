export function initParallax() {
  // Parallax for elements with data-parallax attribute
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length === 0) return;

  let ticking = false;

  const updateParallax = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;

    parallaxElements.forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollY;
      const elementHeight = rect.height;

      // Check if element is in viewport (with some buffer)
      if (scrollY + windowHeight > elementTop - 100 && scrollY < elementTop + elementHeight + 100) {
        const offset = (scrollY - elementTop + windowHeight) * speed;
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    });

    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Initial calculation
  updateParallax();
}

// Mouse parallax for hero elements
export function initMouseParallax(selector, intensity = 20) {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) return;

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    elements.forEach(el => {
      const elementIntensity = parseFloat(el.dataset.mouseParallax) || intensity;
      const x = deltaX * elementIntensity;
      const y = deltaY * elementIntensity;
      el.style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  // Only add mouse parallax on non-touch devices
  if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
  }
}

// Scroll-based progress indicator
export function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}