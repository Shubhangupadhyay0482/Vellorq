// VELLORQ site settings
// Replace this with your WhatsApp number in international format, without + or spaces.
const WHATSAPP_NUMBER = "91XXXXXXXXXX";

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('enquiryForm').addEventListener('submit', event => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const vehicle = document.getElementById('vehicle').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();
  const text = `Hello Vellorq! I'd like to enquire about detailing.\n\nName: ${name}\nVehicle: ${vehicle}\nService: ${service}\nAdditional details: ${message || 'Not provided'}`;
  if (WHATSAPP_NUMBER.includes('X')) {
    alert('Before using the enquiry form, open script.js and replace 91XXXXXXXXXX with your WhatsApp number (country code + number).');
    return;
  }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
});
