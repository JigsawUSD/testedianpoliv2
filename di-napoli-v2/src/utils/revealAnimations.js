export function initRevealAnimations() {
  // Reveal animations for elements with .reveal class
  const revealElements = document.querySelectorAll('.reveal:not(.active)');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = el.dataset.delay ? parseInt(el.dataset.delay) : 0;

        setTimeout(() => {
          el.classList.add('active');
        }, delay);

        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // Mask reveal animations
  const maskElements = document.querySelectorAll('.mask-reveal:not(.active)');
  const maskObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        maskObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  maskElements.forEach(el => maskObserver.observe(el));

  // Blur reveal animations
  const blurElements = document.querySelectorAll('.blur-reveal:not(.active)');
  const blurObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        blurObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  blurElements.forEach(el => blurObserver.observe(el));
}

// Staggered children animation
export function initStaggeredAnimation(parentSelector, childSelector, staggerDelay = 100) {
  const parents = document.querySelectorAll(parentSelector);

  parents.forEach(parent => {
    const children = parent.querySelectorAll(childSelector);
    children.forEach((child, index) => {
      child.style.opacity = '0';
      child.style.transform = 'translateY(20px)';
      child.style.transition = `opacity 0.6s cubic-bezier(0.23, 1, 0.32, 1), transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)`;
      child.style.transitionDelay = `${index * staggerDelay}ms`;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(childSelector).forEach(child => {
            child.style.opacity = '1';
            child.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(parent);
  });
}

// Text reveal by word/character
export function initTextReveal(selector, splitBy = 'word') {
  const elements = document.querySelectorAll(selector);

  elements.forEach(el => {
    const text = el.textContent;
    const parts = splitBy === 'word' ? text.split(' ') : text.split('');
    el.innerHTML = parts.map((part, i) =>
      `<span class="inline-block opacity-0 transform translate-y-4" style="transition-delay: ${i * 60}ms">${splitBy === 'word' ? part + ' ' : part}</span>`
    ).join('');

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

    observer.observe(el);
  });
}