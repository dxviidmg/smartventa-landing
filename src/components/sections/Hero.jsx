import { Container, Typography, Button, Stack, Box, Grid } from '@mui/material';
import { CONFIG, ctaButtonSx } from '../../constants';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import tableroImg from '../../assets/Tablero.png';

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
);

/**
 * Browser-style window frame around the dashboard screenshot.
 */
const BrowserFrame = () => (
  <Box
    sx={{
      borderRadius: { xs: 2, md: 3 },
      overflow: 'hidden',
      boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
      bgcolor: '#1e293b',
      transform: { md: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)' },
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: { md: 'perspective(1200px) rotateY(-1deg) rotateX(0.5deg)' },
      },
    }}
  >
    {/* Browser top bar */}
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.75}
      sx={{ px: 1.5, py: 1, bgcolor: '#1e293b' }}
    >
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#eab308' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
      <Box sx={{
        flex: 1, mx: 1.5, py: 0.4, px: 1.5,
        borderRadius: 1, bgcolor: 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center',
      }}>
        <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          app.smartventa.com
        </Typography>
      </Box>
    </Stack>
    {/* Screenshot */}
    <img
      src={tableroImg}
      alt="Dashboard de SmartVenta — tablero de ventas y métricas"
      width={900}
      height={506}
      loading="eager"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  </Box>
);

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: '#04346b',
    }}>
      {/* Subtle background gradients */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(6,90,158,0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(4,120,87,0.15) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 12, md: 0 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left: Copy */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={3}>
              <Typography
                variant="overline"
                sx={{
                  color: '#34d399', fontWeight: 600, letterSpacing: 3,
                  fontSize: '0.8rem',
                }}
              >
                Punto de venta en la nube
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.2rem' },
                  color: 'white', lineHeight: 1.08, letterSpacing: '-0.03em',
                }}
              >
                Deja de adivinar qué pasa en tus tiendas
              </Typography>

              <Typography
                sx={{
                  color: 'rgba(255,255,255,0.7)', maxWidth: 480,
                  fontSize: { xs: '1.05rem', md: '1.15rem' }, fontWeight: 400, lineHeight: 1.7,
                }}
              >
                Ventas, inventario y traspasos de todas tus sucursales en una sola pantalla.
                Sin instalar nada, desde cualquier computadora.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => openWhatsApp()}
                  sx={{
                    ...ctaButtonSx,
                    px: 4, py: 1.5, fontSize: '1rem',
                  }}
                >
                  Solicitar demo gratis
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
                  sx={{
                    px: 4, py: 1.5, fontSize: '1rem',
                    color: 'rgba(255,255,255,0.85)',
                    borderColor: 'rgba(255,255,255,0.25)',
                    '&:hover': { borderColor: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.05)' },
                  }}
                >
                  Crear cuenta
                </Button>
              </Stack>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} sx={{ pt: 2 }}>
                {['Sin instalación', 'Sin contrato', 'Soporte por WhatsApp'].map((text) => (
                  <Stack key={text} direction="row" spacing={0.75} alignItems="center">
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#34d399', flexShrink: 0 }} />
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {/* Right: Dashboard mockup */}
          <Grid size={{ xs: 12, md: 7 }}>
            <BrowserFrame />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
