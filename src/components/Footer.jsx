import { Box, Container, Typography, Grid } from '@mui/material';
import { PhoneOutlined } from '@mui/icons-material';

const Footer = () => (
  <Box sx={{ py: 6, bgcolor: 'primary.main', color: 'white' }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={5}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Smartventa</Typography>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            El punto de venta inteligente para negocios multi-tienda
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>Contacto</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneOutlined sx={{ fontSize: 20 }} />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              +52 55 6165 2599 (Celular / WhatsApp)
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
          © {new Date().getFullYear()} Smartventa. Todos los derechos reservados.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
