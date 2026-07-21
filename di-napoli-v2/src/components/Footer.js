export function initFooter() {
  const footer = document.querySelector('footer');
  if (!footer) return;

  const newsletterForm = footer.querySelector('.newsletter-form');
  const emailInput = footer.querySelector('.newsletter-input');
  const submitBtn = footer.querySelector('.newsletter-btn');

  if (newsletterForm && emailInput && submitBtn) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const email = emailInput.value.trim();
      if (!email || !validateEmail(email)) {
        showMessage(emailInput, 'Por favor, insira um e-mail válido.', 'error');
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="material-symbols-outlined animate-spin">sync</span>';

      try {
        // Replace with your Formspree/Netlify endpoint
        const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, _subject: 'Nova inscrição newsletter Di Napoli' })
        });

        if (response.ok) {
          showMessage(emailInput, 'Obrigado! Você receberá nossas novidades.', 'success');
          emailInput.value = '';
        } else {
          throw new Error('Erro ao enviar');
        }
      } catch (error) {
        showMessage(emailInput, 'Ops! Tente novamente mais tarde.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span class="material-symbols-outlined">send</span>';
      }
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function showMessage(input, message, type) {
    // Remove existing message
    const existing = input.parentElement.querySelector('.form-message');
    if (existing) existing.remove();

    const msg = document.createElement('p');
    msg.className = `form-message text-sm mt-2 ${type === 'success' ? 'text-green-600' : 'text-red-600'}`;
    msg.textContent = message;
    msg.setAttribute('role', 'alert');
    msg.setAttribute('aria-live', 'polite');
    input.parentElement.appendChild(msg);

    setTimeout(() => msg.remove(), 5000);
  }

  // Smooth scroll for footer links
  const footerLinks = footer.querySelectorAll('a[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target && window.lenis) {
        window.lenis.scrollTo(target, { offset: -80 });
      }
    });
  });
}