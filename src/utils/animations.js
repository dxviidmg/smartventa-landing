// Animation variants grouped by component type

// Section headers (overline + title + subtitle)
export const sectionHeader = {
  overline: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true }
  },
  title: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: 0.1 }
  },
  subtitle: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay: 0.15 }
  }
};

// Hero section animations
export const hero = {
  title: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.1 }
  },
  subtitle: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  },
  cta: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.35 }
  },
  badges: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8, delay: 0.6 }
  }
};

// Card grid items (Features, Industries, Integrations, Testimonials, Pricing)
export const cardGridItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: 0 }
};

// Card hover effects
export const cardHover = {
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.01)',
    boxShadow: (color) => `0 12px 40px ${color}20`,
    borderColor: (color) => color
  }
};

// Step-by-step items (HowItWorks)
export const stepItem = {
  initial: { opacity: 0, x: 0 },
  whileInView: { opacity: 1, x: 0 },
  whileHover: { x: 8 },
  viewport: { once: true },
  transition: { delay: 0 }
};

// FAQ items
export const faqItem = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: 0 }
};

// Modal animations
export const modal = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.9 },
  transition: { duration: 0.2 }
};

// Dashboard preview carousel
export const dashboardCarousel = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
  transition: { duration: 0.4 }
};
