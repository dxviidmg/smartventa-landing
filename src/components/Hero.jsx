import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import { openWhatsApp, scrollToSection } from '../utils/helpers';

const Hero = () => (
  <Box
    sx={{
      pt: { xs: 16, md: 15 },
      pb: { xs: 10, md: 15 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, #022347 0%, #04346b 40%, #065a9e 100%)',
    }}
  >
    <Box sx={{
      position: 'absolute', inset: 0,
      background: 'radial-gradient(ellipse at 20% 50%, rgba(16,185,129,0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(96,165,250,0.1) 0%, transparent 50%)',
    }} />
    <Box sx={{
      position: 'absolute', inset: 0, opacity: 0.03,
      backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }} />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={4} alignItems="center" textAlign="center">

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' }, color: 'white', maxWidth: '850px' }}
          >
            El punto de venta{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #34d399, #6ee7b7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              inteligente.
            </Box>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.65)', maxWidth: '600px',
              fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7,
            }}
          >
            Diseñado para negocios reales. Gestiona inventario, ventas y equipo en múltiples tiendas desde un solo lugar.
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp()}
              sx={{
                px: 4, py: 1.5, fontSize: '1rem',
                bgcolor: '#10b981', color: '#fff',
                '&:hover': { bgcolor: '#059669' },
                boxShadow: '0 4px 24px rgba(16,185,129,0.35)',
              }}
            >
              Empieza hoy gratis
            </Button>
            <Button
              size="large"
              startIcon={<PlayArrow />}
              onClick={() => {
                scrollToSection('dashboard-preview');
                setTimeout(() => {
                  const iframe = document.querySelector('#dashboard-video iframe');
                  if (iframe) iframe.focus();
                }, 500);
              }}
              sx={{
                color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.06)' },
              }}
            >
              Ver demo
            </Button>
          </Stack>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Stack direction="row" spacing={4} sx={{ mt: 4, opacity: 0.5 }} alignItems="center" justifyContent="center" flexWrap="wrap">
            {['Sin instalación', 'Sin contratos', 'Soporte incluido'].map((t) => (
              <Typography key={t} variant="caption" sx={{ color: 'white', fontSize: '0.8rem', letterSpacing: 1 }}>
                ✓ {t}
              </Typography>
            ))}
          </Stack>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Hero;
