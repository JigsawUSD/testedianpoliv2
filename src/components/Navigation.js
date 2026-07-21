export function initNavigation() {
  const header = document.getElementById('main-header');
  const navLinks = header?.querySelectorAll('a[href^="#"]');

  if (!header) return;

  // Smooth scroll for nav links
  navLinks?.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -80 });
      }
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  const handleScroll = () => {
    const scrolled = window.scrollY;

    if (scrolled > 50) {
      header.classList.add('nav-scrolled');
    } else {
      header.classList.remove('nav-scrolled');
    }

    // Hide/show header on scroll direction
    if (scrolled > lastScroll && scrolled > 200) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScroll = scrolled;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Mobile menu toggle (if hamburger added later)
  const mobileMenuBtn = header.querySelector('.mobile-menu-btn');
  const mobileMenu = header.querySelector('.mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      mobileMenuBtn.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
    });
  }
}