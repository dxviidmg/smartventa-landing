// Animation presets for framer-motion

const EASE = [0.25, 0.1, 0.25, 1];

// Shared viewport config
const once = { once: true, margin: '-40px' };

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
