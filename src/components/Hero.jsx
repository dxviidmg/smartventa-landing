import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import SEO from '../components/SEO';

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();

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
        <Box sx={{
          position: 'absolute', top: '-20%', left: '-10%', width: '500px', height: '500px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(96,165,250,0.15) 0%, transparent 70%)',
          filter: 'blur(60px)', animation: 'float1 8s ease-in-out infinite', willChange: 'transform',
        }} />
        <Box sx={{
          position: 'absolute', top: '-10%', left: '60%', width: '600px', height: '600px',
          borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)', animation: 'float2 10s ease-in-out infinite', willChange: 'transform',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Box sx={{ animation: 'floatY 3s ease-in-out infinite' }}>
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
            </Box>

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

            <Box sx={{ animation: 'fadeInUp 0.6s 0.35s ease both' }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => openWhatsApp()}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  bgcolor: '#047857', color: '#fff',
                  '&:hover': { bgcolor: '#065f46', transform: 'scale(1.05)' },
                  '&:active': { transform: 'scale(0.95)' },
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 24px rgba(4,120,87,0.4)',
                }}
              >
                Solicitar demo
              </Button>
            </Box>

          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Hero;
