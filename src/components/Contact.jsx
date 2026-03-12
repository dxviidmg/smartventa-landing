import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const Contact = () => {
  const handleWhatsApp = () => {
    const phone = '525561652599';
    const message = encodeURIComponent('Hola, me interesa solicitar una demo de Smartventa');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Solicita tu demo
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'text.secondary', maxWidth: '600px', fontSize: '1.1rem' }}
          >
            Contáctanos por WhatsApp y te daremos acceso inmediato a una cuenta demo
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsApp />}
            onClick={handleWhatsApp}
            sx={{
              py: 2,
              px: 4,
              fontSize: '1.1rem',
              textTransform: 'none',
              bgcolor: '#25D366',
              '&:hover': {
                bgcolor: '#20BA5A',
              },
            }}
          >
            Solicitar demo por WhatsApp
          </Button>
        </Stack>
      </Container>

      {/* Botón flotante de WhatsApp */}
      <Box
        onClick={handleWhatsApp}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          width: 60,
          height: 60,
          borderRadius: '50%',
          bgcolor: '#25D366',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
          zIndex: 1000,
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 6px 16px rgba(0,0,0,0.2)',
          },
        }}
      >
        <WhatsApp sx={{ fontSize: 32, color: 'white' }} />
      </Box>
    </Box>
  );
};

export default Contact;
