import { Box, Container, Typography, Stack, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../contexts/WhatsAppContext';
import { ctaButtonSx } from '../constants';
import SEO from '../components/SEO';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <>
      <SEO
        title="Solicitar Demo"
        description="Pide una demo gratuita de SmartVenta y descubre cómo podemos ayudarte a optimizar tu negocio."
      />
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(145deg, #022347 0%, #04346b 40%, #065a9e 100%)',
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, maxWidth: 600, animation: 'fadeInUp 0.5s 0.2s ease both' }}>
              ¿Listo para retomar el{' '}
              <Box component="span" sx={{
                background: 'linear-gradient(135deg, #34d399, #6ee7b7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                control?
              </Box>
            </Typography>

            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', maxWidth: 480, animation: 'fadeInUp 0.5s 0.3s ease both' }}>
              Únete a negocios que ya optimizan sus operaciones diarias con SmartVenta. Solicita tu cuenta demo HOY.
            </Typography>

            <Box sx={{ animation: 'fadeInUp 0.5s 0.4s ease both' }}>
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
                Probar el sistema
              </Button>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
