// Animation variants grouped by component type

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
