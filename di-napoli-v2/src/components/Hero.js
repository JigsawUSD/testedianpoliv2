export function initHero() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;

  const heroImg = heroSection.querySelector('.parallax-img');
  const scrollIndicator = heroSection.querySelector('.scroll-indicator');
  const ctaButton = heroSection.querySelector('.hero-cta');

  // Parallax effect on scroll
  let ticking = false;
  const updateParallax = () => {
    if (!heroImg) return;
    const scrolled = window.scrollY;
    const speed = 0.3;
    const offset = scrolled * speed;
    heroImg.style.transform = `translateY(${offset}px) scale(1.1)`;
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });

  // Scroll indicator click
  if (scrollIndicator && window.lenis) {
    scrollIndicator.addEventListener('click', () => {
      const nextSection = document.querySelector('#manifesto') || document.querySelector('#historia');
      if (nextSection) {
        window.lenis.scrollTo(nextSection, { offset: -80 });
      }
    });
  }

  // CTA button scroll
  if (ctaButton && window.lenis) {
    ctaButton.addEventListener('click', () => {
      const historySection = document.querySelector('#historia');
      if (historySection) {
        window.lenis.scrollTo(historySection, { offset: -80 });
      }
    });
  }

  // Keyboard accessibility for scroll indicator
  if (scrollIndicator) {
    scrollIndicator.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        scrollIndicator.click();
      }
    });
  }
}