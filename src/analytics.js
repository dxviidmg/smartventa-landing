// Google Analytics Configuration
// Reemplaza 'G-XXXXXXXXXX' con tu ID de medición de Google Analytics

export const GA_TRACKING_ID = 'G-XXXXXXXXXX'; // TODO: Reemplazar con tu ID real

// Función para registrar page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Función para registrar eventos
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
