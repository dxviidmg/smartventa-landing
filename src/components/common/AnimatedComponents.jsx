import { motion } from 'framer-motion';

// Componente wrapper para animaciones de entrada
export const FadeInView = ({ children, delay = 0, direction = 'up' }) => {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 50 },
    right: { x: -50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

// Componente para animaciones de escala
export const ScaleInView = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      {children}
    </motion.div>
  );
};

// Componente para hover interactivo
export const HoverScale = ({ children, scale = 1.05 }) => {
  return (
    <motion.div whileHover={{ scale }} whileTap={{ scale: 0.95 }}>
      {children}
    </motion.div>
  );
};
