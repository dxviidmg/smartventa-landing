import { Box, Container, Typography, Stack, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, ArrowForward } from '@mui/icons-material';
import { scrollToSection } from '../utils/helpers';

const includes = [
  'POS completo', 'Inventario multi-tienda', 'Transferencias', 'Dashboard y reportes',
  'Usuarios ilimitados', 'Soporte WhatsApp', 'Actualizaciones',
];

const Pricing = () => (
  <Box id="pricing" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="md">
      <Stack spacing={3}>
        <Stack spacing={0.5} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Precios
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Simple y transparente
            </Typography>
          </motion.div>
        </Stack>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          alignItems="center"
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            border: '2px solid',
            borderColor: 'primary.main',
          }}
        >
          {/* Left: price */}
          <Stack spacing={1} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ minWidth: 200 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Precio único
            </Typography>
            <Stack direction="row" alignItems="baseline" spacing={0.5}>
              <Typography sx={{ fontWeight: 800, fontSize: '2.8rem', lineHeight: 1 }}>$500</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>MXN/mes</Typography>
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
              por tienda o almacén
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
              💡 3 tiendas + 1 almacén = $2,000/mes
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                endIcon={<ArrowForward />}
                onClick={() => scrollToSection('cta')}
                sx={{ mt: 1, bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' } }}
              >
                Comenzar ahora
              </Button>
            </motion.div>
          </Stack>

          {/* Right: what's included */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, mb: 1, display: 'block' }}>
              Todo incluido, sin costos ocultos:
            </Typography>
            <Grid container spacing={0.5}>
              {includes.map((f, i) => (
                <Grid size={{ xs: 6 }} key={i}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Check sx={{ color: 'secondary.main', fontSize: 16 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.82rem' }}>{f}</Typography>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Pricing;
