export const openWhatsApp = (message = '') => {
  const phoneNumber = '525561652599';
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};
