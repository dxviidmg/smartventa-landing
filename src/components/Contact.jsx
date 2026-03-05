import { Box, Container, Typography, Grid, TextField, Button, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Typography variant="h2" sx={{ mb: 3, fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
                ¿Listo para comenzar?
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Solicita una demostración gratuita y descubre cómo SmartVenta puede transformar tu negocio
              </Typography>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <EmailIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Email</Typography>
                    <Typography variant="body1">contacto@smartventa.com</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <PhoneIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Teléfono</Typography>
                    <Typography variant="body1">+52 (55) 1234-5678</Typography>
                  </Box>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <LocationOnIcon sx={{ color: 'primary.main', fontSize: 32 }} />
                  <Box>
                    <Typography variant="subtitle2" color="text.secondary">Ubicación</Typography>
                    <Typography variant="body1">Ciudad de México, México</Typography>
                  </Box>
                </Stack>
              </Stack>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Paper elevation={4} sx={{ p: 4 }}>
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                  Solicita tu Demo Gratuita
                </Typography>
                <Stack spacing={3}>
                  <TextField fullWidth label="Nombre completo" variant="outlined" />
                  <TextField fullWidth label="Email" type="email" variant="outlined" />
                  <TextField fullWidth label="Teléfono" variant="outlined" />
                  <TextField fullWidth label="Nombre de tu negocio" variant="outlined" />
                  <TextField 
                    fullWidth 
                    label="Mensaje" 
                    multiline 
                    rows={4} 
                    variant="outlined"
                    placeholder="Cuéntanos sobre tu negocio..."
                  />
                  <Button variant="contained" size="large" fullWidth>
                    Enviar Solicitud
                  </Button>
                </Stack>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{ bgcolor: '#04346b', color: 'white', py: 4, mt: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="body2" align="center">
            © 2026 SmartVenta. Todos los derechos reservados.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
