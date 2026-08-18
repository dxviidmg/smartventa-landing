import { Container, Typography, Button, Stack, Chip } from '@mui/material';
import { CONFIG } from '../config/constants';
import { ctaButtonSx } from '../constants';
import { useWhatsApp } from '../contexts/WhatsAppContext';

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
);

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section style={{
      paddingTop: 128, paddingBottom: 64,
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(135deg, #04346b 0%, #065a9e 100%)',
    }}>
      <div style={{
        position: 'absolute', top: '-20%', left: '-10%', width: 500, height: 500,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
        filter: 'blur(60px)', animation: 'float1 8s ease-in-out infinite', willChange: 'transform',
      }} />
      <div style={{
        position: 'absolute', top: '-10%', left: '60%', width: 600, height: 600,
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)', animation: 'float2 10s ease-in-out infinite', willChange: 'transform',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <div style={{ animation: 'floatY 3s ease-in-out infinite', willChange: 'transform' }}>
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
                  content: '""', position: 'absolute', top: 0, left: 0,
                  width: '100%', height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                  animation: 'shimmer 4s infinite',
                },
              }}
            />
          </div>

          <div>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.4rem', sm: '3rem', md: '3.8rem' },
                color: 'white', lineHeight: 1.1, maxWidth: '900px', letterSpacing: '-0.02em',
              }}
            >
              Controla todas tus tiendas y almacenes{' '}
              <span style={{
                background: 'linear-gradient(90deg, #34d399, #10b981, #6ee7b7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'gradient-shift 4s ease-in-out infinite',
                willChange: 'filter',
              }}>
                desde un solo lugar
              </span>
            </Typography>
          </div>

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

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} style={{ animation: 'fadeInUp 0.6s 0.35s ease both' }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp()}
              sx={{
                ...ctaButtonSx,
                px: 4, py: 1.5, fontSize: '1rem',
                '&:hover': { ...ctaButtonSx['&:hover'], transform: 'scale(1.05)' },
                '&:active': { transform: 'scale(0.95)' },
                transition: 'all 0.2s ease',
              }}
            >
              Solicitar demo
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
              sx={{
                px: 4, py: 1.5, fontSize: '1rem',
                color: '#fff',
                borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)', transform: 'scale(1.05)' },
                '&:active': { transform: 'scale(0.95)' },
                transition: 'all 0.2s ease',
              }}
            >
              Registrarme
            </Button>
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default Hero;
