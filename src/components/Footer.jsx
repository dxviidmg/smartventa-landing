import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { PhoneOutlined } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      sx={{
        py: 6,
        bgcolor: 'primary.main',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Box
                component="img"
                src="/src/assets/logo.jpg"
                alt="Smartventa"
                sx={{
                  width: 120,
                  height: 'auto',
                  borderRadius: 2,
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Smartventa
              </Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                El punto de venta inteligente para negocios multi-tienda
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack spacing={2}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Contacto
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <PhoneOutlined sx={{ fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  +52 55 6165 2599 (Celular / WhatsApp)
                </Typography>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Box
          sx={{
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(255,255,255,0.2)',
            textAlign: 'center',
          }}
        >
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} Smartventa. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
