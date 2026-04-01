import { Box, Container, Typography, Grid, Stack, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { FormatQuote } from '@mui/icons-material';

const testimonials = [
  {
    name: 'Roberto M.',
    role: 'Dueño de 4 tiendas de ropa',
    text: 'Antes tardaba horas revisando inventario tienda por tienda. Ahora lo veo todo en un solo dashboard. SmartVenta me devolvió tiempo para enfocarme en hacer crecer mi negocio.',
    avatar: 'R',
  },
  {
    name: 'Laura G.',
    role: 'Administradora de minisuper',
    text: 'Los traspasos entre sucursales eran un dolor de cabeza. Con SmartVenta todo queda registrado y confirmado. Ya no hay mercancía "perdida" entre tiendas.',
    avatar: 'L',
  },
  {
    name: 'Carlos P.',
    role: 'Dueño de 3 ferreterías',
    text: 'Lo que más me gustó es que no necesité instalar nada. Mis empleados aprendieron a usarlo en un día. El soporte por WhatsApp es rapidísimo.',
    avatar: 'C',
  },
];

const Testimonials = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Testimonios
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 600 }}>
            Lo que dicen nuestros clientes
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3}>
        {testimonials.map((t, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <Box sx={{
                p: 4, height: '100%', borderRadius: 4,
                bgcolor: 'background.paper',
                border: '1px solid', borderColor: 'divider',
                display: 'flex', flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': { boxShadow: '0 12px 40px rgba(0,0,0,0.06)', transform: 'translateY(-4px)' },
              }}>
                <FormatQuote sx={{ color: 'secondary.main', fontSize: 32, mb: 2, transform: 'scaleX(-1)' }} />
                <Typography sx={{ color: 'text.secondary', lineHeight: 1.8, flex: 1, fontSize: '0.95rem' }}>
                  "{t.text}"
                </Typography>
                <Stack direction="row" spacing={2} alignItems="center" sx={{ mt: 3, pt: 3, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Avatar sx={{ bgcolor: 'primary.main', width: 40, height: 40, fontSize: '0.9rem', fontWeight: 700 }}>
                    {t.avatar}
                  </Avatar>
                  <Box>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.9rem' }}>{t.name}</Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>{t.role}</Typography>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Testimonials;
