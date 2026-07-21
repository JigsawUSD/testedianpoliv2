export function initHistory() {
  const historySection = document.getElementById('historia');
  if (!historySection) return;

  const timelineItems = historySection.querySelectorAll('.timeline-item');
  const timelineDots = historySection.querySelectorAll('.timeline-dot');
  const timelineImages = historySection.querySelectorAll('.timeline-image');

  // Intersection Observer for timeline items
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const item = entry.target;
        item.classList.add('active');

        // Animate the dot
        const dot = item.querySelector('.timeline-dot');
        if (dot) {
          dot.style.animation = 'pulse 2s ease-in-out infinite';
        }

        // Animate image
        const img = item.querySelector('.timeline-image');
        if (img) {
          img.style.animation = 'scaleIn 1s cubic-bezier(0.23, 1, 0.32, 1) forwards';
        }

        observer.unobserve(item);
      }
    });
  }, observerOptions);

  timelineItems.forEach(item => observer.observe(item));

  // Hover effects for timeline items
  timelineItems.forEach(item => {
    const year = item.querySelector('.timeline-year');
    const image = item.querySelector('.timeline-image');

    item.addEventListener('mouseenter', () => {
      if (year) year.style.color = 'var(--color-primary)';
      if (image) image.style.transform = 'scale(1.02)';
    });

    item.addEventListener('mouseleave', () => {
      if (year) year.style.color = '';
      if (image) image.style.transform = '';
    });
  });

  // Add pulse animation for dots
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0%, 100% { box-shadow: 0 0 0 0 var(--color-primary); }
      50% { box-shadow: 0 0 0 12px var(--color-primary-container); }
    }
    @keyframes scaleIn {
      0% { opacity: 0; transform: scale(0.95); }
      100% { opacity: 1; transform: scale(1); }
    }
  `;
  document.head.appendChild(style);
}