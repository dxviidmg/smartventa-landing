// Animation variants grouped by component type

// Section headers (overline + title + subtitle)
export const sectionHeader = {
  overline: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  title: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// Card grid items (Features, Benefits, Pricing)
export const cardGridItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
};

// Step-by-step items (HowItWorks)
export const stepItem = {
  initial: { opacity: 0, x: -24 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-40px' },
};

// FAQ items
export const faqItem = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-30px' },
};

// Hero stagger — for children entering in sequence
export const heroContainer = {
  initial: {},
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const heroItem = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

// Hero image — slides in from right with scale
export const heroImage = {
  initial: { opacity: 0, x: 40, scale: 0.96 },
  animate: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
};

// Fade up for generic elements
export const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
};

// Pill/tag items (Industries)
export const pillItem = {
  initial: { opacity: 0, scale: 0.9 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true, margin: '-30px' },
};

// Contact CTA
export const contactItem = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
};

// Dashboard preview carousel
export const dashboardCarousel = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3 },
};

// CTA button styles (green primary action)
export const ctaButtonSx = {
  bgcolor: '#047857',
  color: '#fff',
  '&:hover': { bgcolor: '#065f46' },
  boxShadow: '0 4px 24px rgba(4,120,87,0.3)',
};

// Consistent section padding
export const sectionPadding = { py: { xs: 8, md: 12 } };
