import { Box, Container, Typography, Button, Stack } from '@mui/material';

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0d47a1 0%, #01579b 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white' }}>
            Descubre por qué Smartventa es el punto de venta inteligente
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
            Únete a los negocios que ya están optimizando sus operaciones multi-tienda
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={scrollToContact}
            sx={{
              px: 5,
              py: 2,
              fontSize: '1.1rem',
              textTransform: 'none',
              bgcolor: 'white',
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.9)',
              },
              boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            }}
          >
            Solicitar acceso a demo
          </Button>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2 }}>
            Te daremos acceso a una cuenta demo para explorar el sistema
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTA;
