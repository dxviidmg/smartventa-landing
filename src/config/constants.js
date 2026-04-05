import { colors, gradients } from '../constants/colors';
import {
  cardStyles,
  cardHoverStyles,
  sectionHeader,
  cardGridItem,
  stepItem,
  faqItem,
  dashboardCarousel,
  hero,
  modal,
} from '../constants/animations';

export const CONFIG = {
  contact: {
    phone: import.meta.env.VITE_WHATSAPP_PHONE_FORMATTED,
    phoneFormatted: import.meta.env.VITE_WHATSAPP_PHONE,
  },
  company: {
    name: 'SmartVenta',
  },
  urls: {
    app: import.meta.env.VITE_APP_URL,
  },
};

export { colors, gradients, cardStyles, cardHoverStyles, sectionHeader, cardGridItem, stepItem, faqItem, dashboardCarousel, hero, modal };
