const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thanks! Your message was captured locally in this starter template.';
  contactForm.reset();
});
