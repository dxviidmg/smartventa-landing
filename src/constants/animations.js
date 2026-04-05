// Animation variants grouped by component type
// Best practices: use consistent naming, document variants, keep transitions predictable

// Section headers (overline + title + subtitle)
export const sectionHeader = {
  overline: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: 0.1 },
  },
  title: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: 0.2 },
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: 0.3 },
  },
};

// Hero section animations
export const hero = {
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  subtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  },
  cta: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  },
};

// Card grid items (Features, Industries, Pricing)
export const cardGridItem = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Step-by-step items (HowItWorks)
export const stepItem = {
  initial: { opacity: 0, x: -20 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
};

// FAQ items
export const faqItem = {
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

// Modal animations
export const modal = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.2 },
};

// Dashboard preview carousel
export const dashboardCarousel = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3 },
};

// Card styles for MUI components
export const cardStyles = {
  p: 4,
  height: '100%',
  borderRadius: 4,
  bgcolor: 'background.paper',
  border: '1px solid',
  borderColor: 'divider',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

export const cardHoverStyles = {
  '&:hover': {
    borderColor: 'primary.main',
    boxShadow: '0 8px 30px rgba(4,52,107,0.1)',
    transform: 'translateY(-4px)',
  },
};
