const WHATSAPP_NUMBER = '584220603133';
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
const GENERAL_MESSAGE = 'Hola, Criollo Studio. Quiero conversar sobre un proyecto.';

const form = document.getElementById('quote-form');
const service = document.getElementById('service');
const description = document.getElementById('message');
const nameInput = document.getElementById('name');
const selectionStatus = document.getElementById('selection-status');
const formStatus = document.getElementById('form-status');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');
let selectingService = false;
document.getElementById('whatsapp-button').disabled = false;

// Direct contact remains available without completing the quote form.
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = `${WHATSAPP_BASE}?text=${encodeURIComponent(GENERAL_MESSAGE)}`;
});
document.getElementById('year').textContent = new Date().getFullYear();

// The navigation stays visible if JavaScript is unavailable.
document.documentElement.classList.add('menu-enabled');
menuToggle.hidden = false;
function closeMenu(returnFocus = false) {
  menuToggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  if (returnFocus) menuToggle.focus();
}
menuToggle.addEventListener('click', () => {
  const open = menuToggle.getAttribute('aria-expanded') !== 'true';
  menuToggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
});
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    closeMenu();
    // Move focus to the destination so keyboard users continue in that section.
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(max-width: 760px)').addEventListener('change', () => closeMenu());

function updateSelection() {
  selectionStatus.textContent = service.value
    ? `Servicio seleccionado: ${service.options[service.selectedIndex].text}.`
    : 'Puedes elegir un servicio o pedir ayuda para decidir.';
  selectionStatus.classList.toggle('is-selected', Boolean(service.value));
  formStatus.textContent = '';
}
service.addEventListener('change', updateSelection);
document.querySelectorAll('[data-service]').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    service.value = link.dataset.service;
    updateSelection();
    if (window.location.hash !== '#quote-form') window.history.pushState(null, '', '#quote-form');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    closeMenu();
    const topInset = document.querySelector('.site-header').getBoundingClientRect().height + 18;
    const mobileBar = document.querySelector('.quick-contact').getBoundingClientRect();
    const bottomLimit = window.matchMedia('(max-width: 760px)').matches ? mobileBar.top : window.innerHeight;
    const formTop = form.getBoundingClientRect().top + window.scrollY;
    const projectBottom = description.getBoundingClientRect().bottom + window.scrollY;
    const scrollTop = Math.max(0, formTop - topInset, projectBottom - bottomLimit + 20);
    window.scrollTo({ top: scrollTop, behavior: reduceMotion ? 'instant' : 'smooth' });
    selectingService = true;
    description.focus({ preventScroll: true });
    selectingService = false;
  });
});

// Keep focused form controls above the fixed mobile contact bar.
form.addEventListener('focusin', event => {
  if (selectingService || !event.target.matches('input, select, textarea, button')) return;
  window.requestAnimationFrame(() => {
    const rect = event.target.getBoundingClientRect();
    const topLimit = document.querySelector('.site-header').getBoundingClientRect().height + 12;
    const bottomLimit = window.matchMedia('(max-width: 760px)').matches
      ? document.querySelector('.quick-contact').getBoundingClientRect().top - 12
      : window.innerHeight - 12;
    const adjustment = rect.top < topLimit || rect.height > bottomLimit - topLimit
      ? rect.top - topLimit
      : Math.max(0, rect.bottom - bottomLimit);
    if (adjustment) window.scrollBy({ top: adjustment, behavior: 'instant' });
  });
});

description.addEventListener('input', () => {
  description.setCustomValidity('');
  description.removeAttribute('aria-invalid');
  formStatus.textContent = '';
});
form.addEventListener('submit', event => {
  event.preventDefault();
  const project = description.value.trim();
  description.setCustomValidity(project ? '' : 'Cuéntanos brevemente qué necesitas para tu proyecto.');
  if (!project) {
    description.setAttribute('aria-invalid', 'true');
    formStatus.textContent = 'Escribe una breve descripción de tu proyecto para continuar.';
  }
  if (!form.reportValidity()) return;

  const name = nameInput.value.trim();
  const greeting = name ? `Hola, Criollo Studio. Soy ${name}.` : 'Hola, Criollo Studio.';
  const message = `${greeting} Quiero solicitar una cotización.\n\nServicio: ${service.value}\nProyecto: ${project}`;
  formStatus.textContent = '';
  window.location.assign(`${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`);
});
