// Estilos reutilizables para componentes
export const commonStyles = {
  // Botón CTA principal
  ctaButton: {
    px: 4,
    py: 1.5,
    fontSize: '1.1rem',
    textTransform: 'none',
    bgcolor: '#10b981',
    color: 'white',
    '&:hover': { bgcolor: '#059669' },
    boxShadow: '0 4px 20px rgba(16,185,129,0.4)',
  },

  // Card con hover effect
  hoverCard: {
    p: 4,
    borderRadius: 3,
    boxShadow: 2,
    transition: 'all 0.3s ease',
    '&:hover': {
      boxShadow: 6,
      transform: 'translateY(-4px)',
    },
  },

  // Sección con padding responsive
  section: {
    py: { xs: 8, md: 12 },
  },

  // Título de sección
  sectionTitle: {
    fontSize: { xs: '2rem', md: '2.5rem' },
    fontWeight: 700,
  },

  // Subtítulo de sección
  sectionSubtitle: {
    fontSize: '1.1rem',
    maxWidth: '700px',
    lineHeight: 1.7,
  },
};
