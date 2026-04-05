export const CONFIG = {
  contact: {
    phone: import.meta.env.VITE_WHATSAPP_PHONE_FORMATTED,
    phoneFormatted: import.meta.env.VITE_WHATSAPP_PHONE,
  },
  company: {
    name: 'SmartVenta',
    tagline: 'El punto de venta inteligente para negocios multi-tienda',
  },
  urls: {
    app: import.meta.env.VITE_APP_URL,
  },
  pricing: {
    perStore: 500,
    currency: 'MXN',
  },
};
