import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { PlayArrow, ArrowForward } from '@mui/icons-material';
import { scrollToSection } from '../utils/helpers';

const Hero = () => {
  return (
    <Box
      sx={{
        pt: { xs: 16, md: 20 },
        pb: { xs: 10, md: 16 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #04346b 0%, #0d47a1 50%, #1565c0 100%)',
      }}
    >
      {/* Gradient orbs */}
      <Box sx={{
        position: 'absolute', top: '-20%', right: '-10%', width: '600px', height: '600px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <Box sx={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Chip
              label="☁️ Sistema POS en la nube para múltiples sucursales"
              sx={{
                bgcolor: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                fontSize: '0.85rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.15)',
                py: 2.5,
                px: 1,
              }}
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
                color: 'white',
                lineHeight: 1.1,
                maxWidth: '900px',
                letterSpacing: '-0.02em',
              }}
            >
              Controla todas tus tiendas{' '}
              <Box
                component="span"
                sx={{
                  background: 'linear-gradient(135deg, #34d399, #10b981)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                desde un solo lugar
              </Box>
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Typography
              variant="h5"
              sx={{
                color: 'rgba(255,255,255,0.75)',
                maxWidth: '650px',
                fontSize: { xs: '1.05rem', md: '1.25rem' },
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              SmartVenta es el punto de venta en la nube que centraliza ventas, inventario y operaciones de todas tus sucursales y almacenes en tiempo real.
            </Typography>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => scrollToSection('cta')}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  bgcolor: '#10b981', color: '#fff',
                  '&:hover': { bgcolor: '#059669' },
                  boxShadow: '0 4px 24px rgba(16,185,129,0.4)',
                }}
              >
                Prueba gratis
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<PlayArrow />}
                onClick={() => scrollToSection('cta')}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  borderColor: 'rgba(255,255,255,0.3)', color: 'white',
                  '&:hover': { borderColor: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.05)' },
                }}
              >
                Solicitar demo
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
