// Animation presets for framer-motion

const EASE = [0.25, 0.1, 0.25, 1];

// Shared viewport config
const once = { once: true, margin: '-40px' };

// Section headers (overline + title + subtitle)
export const sectionHeader = {
  overline: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, ease: EASE },
  },
  title: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { delay: 0.1, duration: 0.5, ease: EASE },
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { delay: 0.2, duration: 0.5, ease: EASE },
  },
};

// Card grid items (Features, Benefits, Pricing, ProductShowcase)
export const cardGridItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: once,
};

// FAQ items
export const faqItem = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
};

// Hero stagger
export const heroContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const heroItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Hero image
export const heroImage = {
  initial: { opacity: 0, x: 40, scale: 0.96 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, delay: 0.3, ease: EASE } },
};

// Generic fade up
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: once,
  transition: { duration: 0.5, ease: EASE },
};

// Contact CTA
export const contactItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: once,
};

// CTA button styles (green primary action)
export const ctaButtonSx = {
  bgcolor: '#047857',
  color: '#fff',
  '&:hover': { bgcolor: '#065f46' },
  boxShadow: '0 4px 24px rgba(4,120,87,0.3)',
};

// Consistent section padding
export const sectionPadding = { pt: { xs: 4, md: 6 }, pb: { xs: 6, md: 8 }, scrollMarginTop: '50px' };
