import { Box, Container, Typography, Button, Stack } from '@mui/material';

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0d47a1 0%, #01579b 100%)', pt: { xs: 12, md: 16 }, pb: { xs: 8, md: 12 }, color: 'white' }}>
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700 }}>
            El punto de venta inteligente para negocios multi-tienda
          </Typography>
          <Typography variant="h5" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, color: 'rgba(255,255,255,0.9)', maxWidth: '800px' }}>
            Controla inventario, ventas y operaciones de todas tus sucursales desde una sola plataforma
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button variant="contained" size="large" onClick={() => scrollTo('contact')} sx={{ px: 4, py: 1.5, fontSize: '1.1rem', bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' } }}>
              Solicitar demo
            </Button>
            <Button variant="outlined" size="large" onClick={() => scrollTo('features')} sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
              Ver características
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
