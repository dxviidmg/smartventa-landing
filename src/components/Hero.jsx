import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import { useMemoized } from '../hooks/useMemoized';
import SEO from '../components/SEO';

const floatingOrb = (top, left, size, color) => ({
  position: 'absolute', top, left, width: size, height: size,
  borderRadius: '50%', background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
  filter: 'blur(60px)', willChange: 'transform',
});

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();

  const orbStyles = useMemoized(() => ({
    orb1: floatingOrb('-20%', '-10%', '500px', 'rgba(96,165,250,0.15)', 8),
    orb2: floatingOrb('-10%', '60%', '600px', 'rgba(16,185,129,0.12)', 10),
  }), []);

  return (
    <>
      <SEO
        title="Punto de Venta en la Nube"
        description="Controla todas tus tiendas desde un solo lugar. Gestiona inventario, ventas y operaciones en tiempo real."
        image={`${window.location.origin}/og-image.jpg`}
      />
      <Box
        sx={{
          pt: { xs: 14, md: 16 },
          pb: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, #04346b 0%, #065a9e 100%)',
        }}
      >
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          style={orbStyles.orb1}
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          style={orbStyles.orb2}
        />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
              transition={{ duration: 0.5, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
            >
              <Chip
                label="☁️ Punto de venta en la nube para múltiples sucursales"
                sx={{
                  bgcolor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)',
                  fontWeight: 500, fontSize: '0.85rem',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  py: 2.5, px: 1,
                  position: 'relative', overflow: 'hidden',
                  '&::before': {
                    content: '"\"', position: 'absolute', top: 0, left: '-100%',
                    width: '100%', height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    animation: 'shimmer 4s infinite',
                    '@keyframes shimmer': { '0%': { left: '-100%' }, '100%': { left: '100%' } },
                  },
                }}
              />
            </motion.div>

            <div>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
                  color: 'white', lineHeight: 1.1, maxWidth: '900px', letterSpacing: '-0.02em',
                }}
              >
                Controla todas tus tiendas y almacenes{' '}
                <span
                  style={{
                    background: 'linear-gradient(90deg, #34d399, #10b981, #6ee7b7, #34d399)',
                    backgroundSize: '200% 200%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: 'gradient-shift 4s ease-in-out infinite',
                  }}
                >
                  desde un solo lugar
                </span>
              </Typography>
            </div>

            <div>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'rgba(255,255,255,0.85)', maxWidth: '650px',
                  fontSize: { xs: '1.05rem', md: '1.25rem' }, fontWeight: 400, lineHeight: 1.6,
                }}
              >
                Gestiona ventas e inventario en tiempo real. Sin instalación, desde cualquier dispositivo.
              </Typography>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => openWhatsApp()}
                  sx={{
                    px: 4, py: 1.5, fontSize: '1rem',
                    bgcolor: '#047857', color: '#fff',
                    '&:hover': { bgcolor: '#065f46' },
                    boxShadow: '0 4px 24px rgba(4,120,87,0.4)',
                  }}
                >
                  Solicitar demo
                </Button>
              </motion.div>
            </motion.div>

          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
