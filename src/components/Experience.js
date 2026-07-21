export function initExperience() {
  const experienceSection = document.getElementById('experiencia');
  if (!experienceSection) return;

  const parallaxImg = experienceSection.querySelector('.parallax-img');
  const featureItems = experienceSection.querySelectorAll('.feature-item');

  // Parallax effect
  if (parallaxImg) {
    let ticking = false;
    const updateParallax = () => {
      const scrolled = window.scrollY;
      const sectionTop = experienceSection.offsetTop;
      const sectionHeight = experienceSection.offsetHeight;
      const speed = 0.4;

      if (scrolled + window.innerHeight > sectionTop && scrolled < sectionTop + sectionHeight) {
        const offset = (scrolled - sectionTop) * speed;
        parallaxImg.style.transform = `translateY(${offset}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Staggered entrance for feature items
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateX(0)';
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  featureItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = 'opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(item);
  });

  // Rotating border animation on image container
  const imageWrapper = experienceSection.querySelector('.image-wrapper');
  if (imageWrapper) {
    imageWrapper.addEventListener('mouseenter', () => {
      imageWrapper.style.animationPlayState = 'running';
    });
    imageWrapper.addEventListener('mouseleave', () => {
      imageWrapper.style.animationPlayState = 'paused';
    });
  }
}