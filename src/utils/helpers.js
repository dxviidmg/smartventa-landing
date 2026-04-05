// Utility functions
// Best practices: pure functions, single responsibility, clear naming

/**
 * Opens WhatsApp with pre-filled message
 * @param {string} message - Optional message to pre-fill
 */
export const openWhatsApp = (message = '') => {
  const phoneNumber = import.meta.env.VITE_WHATSAPP_PHONE;
  const text = message || 'Hola, me interesa solicitar una demo de SmartVenta';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
};

/**
 * Smooth scroll to section by ID
 * @param {string} id - Element ID to scroll to
 */
export const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
