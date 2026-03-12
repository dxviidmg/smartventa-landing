import { CONFIG } from '../config/constants';

// Función para abrir WhatsApp
export const openWhatsApp = (customMessage) => {
  const message = customMessage || CONFIG.contact.whatsappMessage;
  const url = `https://wa.me/${CONFIG.contact.phoneFormatted}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

// Función para scroll suave a sección
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
