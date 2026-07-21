export function initReviews() {
  const reviewsSection = document.querySelector('.reviews-section');
  if (!reviewsSection) return;

  const reviewCards = reviewsSection.querySelectorAll('.review-card');

  // Staggered entrance
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 150);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  reviewCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.8s cubic-bezier(0.23, 1, 0.32, 1), transform 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
    observer.observe(card);
  });

  // Hover effect enhancement
  reviewCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.borderColor = 'var(--color-primary)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '';
    });
  });
}