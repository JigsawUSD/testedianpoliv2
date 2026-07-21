export function initMenu() {
  const menuSection = document.getElementById('menu');
  if (!menuSection) return;

  const productCards = menuSection.querySelectorAll('.product-card');
  const navPrev = menuSection.querySelector('.nav-prev');
  const navNext = menuSection.querySelector('.nav-next');

  // Enhanced hover effects for product cards
  productCards.forEach(card => {
    const img = card.querySelector('img');
    const overlay = card.querySelector('.card-overlay');
    const content = card.querySelector('.card-content');

    card.addEventListener('mouseenter', () => {
      if (img) img.style.transform = 'scale(1.1)';
      if (overlay) overlay.style.opacity = '1';
      if (content) {
        content.style.transform = 'translateY(0)';
        content.style.opacity = '1';
      }
    });

    card.addEventListener('mouseleave', () => {
      if (img) img.style.transform = 'scale(1)';
      if (overlay) overlay.style.opacity = '0';
      if (content) {
        content.style.transform = 'translateY(32px)';
        content.style.opacity = '0';
      }
    });

    // Keyboard accessibility
    card.addEventListener('focusin', () => {
      card.classList.add('focused');
    });

    card.addEventListener('focusout', () => {
      card.classList.remove('focused');
    });
  });

  // Carousel navigation (if implemented as carousel on mobile)
  let currentIndex = 0;
  const cardsPerView = window.innerWidth < 768 ? 1 : 3;

  const updateCarousel = () => {
    const container = menuSection.querySelector('.product-grid');
    if (container && window.innerWidth < 768) {
      const cardWidth = productCards[0]?.offsetWidth + 32; // card + gap
      container.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  if (navNext) {
    navNext.addEventListener('click', () => {
      if (currentIndex < productCards.length - cardsPerView) {
        currentIndex++;
        updateCarousel();
      }
    });
  }

  if (navPrev) {
    navPrev.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }

  // Touch swipe for mobile carousel
  let touchStartX = 0;
  const grid = menuSection.querySelector('.product-grid');

  if (grid) {
    grid.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
    }, { passive: true });

    grid.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < productCards.length - cardsPerView) {
          currentIndex++;
        } else if (diff < 0 && currentIndex > 0) {
          currentIndex--;
        }
        updateCarousel();
      }
    }, { passive: true });
  }

  // Update on resize
  window.addEventListener('resize', () => {
    const newCardsPerView = window.innerWidth < 768 ? 1 : 3;
    if (newCardsPerView !== cardsPerView) {
      currentIndex = Math.min(currentIndex, productCards.length - newCardsPerView);
      updateCarousel();
    }
  });
}