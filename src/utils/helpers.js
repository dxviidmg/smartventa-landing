import { CONFIG } from '../config/constants';

export const openWhatsApp = (message = '') => {
  const phoneNumber = CONFIG.contact.phoneFormatted;
  const text = message || 'Hola, me interesa solicitar una demo de SmartVenta';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
