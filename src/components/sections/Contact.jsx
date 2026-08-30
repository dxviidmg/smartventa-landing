import { Box, Container, Typography, Stack, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { ctaButtonSx, sectionPadding } from '../../constants';
import { CONFIG } from '../../constants';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      sx={{
        py: sectionPadding.py,
        bgcolor: '#04346b',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Typography variant="h2" sx={{
            color: 'white',
            fontSize: { xs: '1.8rem', md: '2.6rem' },
            maxWidth: 550, lineHeight: 1.15,
          }}>
            ¿Quieres ver cómo funciona con tu negocio?
          </Typography>

          <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem', maxWidth: 460 }}>
            Te damos acceso a una cuenta demo para que explores el sistema sin compromiso. Solo toma unos minutos.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
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
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
