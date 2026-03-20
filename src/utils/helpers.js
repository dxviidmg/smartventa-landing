import { CONFIG } from '../config/constants';

export const openWhatsApp = (customMessage) => {
  const message = customMessage || CONFIG.contact.whatsappMessage;
  window.open(`https://wa.me/${CONFIG.contact.phoneFormatted}?text=${encodeURIComponent(message)}`, '_blank');
};

export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
