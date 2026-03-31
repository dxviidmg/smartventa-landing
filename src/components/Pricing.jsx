import { Box, Container, Typography, Stack, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, ArrowForward } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const includes = [
  'POS completo', 'Inventario multi-tienda', 'Transferencias y distribuciones',
  'Dashboard y reportes', 'Usuarios ilimitados', 'Soporte por WhatsApp',
  'Actualizaciones incluidas', 'Sin contratos',
];

const Pricing = () => (
  <Box id="pricing" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="md">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Precios
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Simple y transparente
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 450 }}>
            Un solo precio. Todo incluido. Sin sorpresas.
          </Typography>
        </motion.div>
      </Stack>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <Box sx={{
          p: { xs: 4, md: 6 }, borderRadius: 4,
          border: '2px solid', borderColor: 'primary.main',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* Accent bar */}
          <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'secondary.main' }} />

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={5} alignItems={{ md: 'center' }}>
            <Stack spacing={1.5} alignItems={{ xs: 'center', md: 'flex-start' }} sx={{ minWidth: 220 }}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
                Precio único
              </Typography>
              <Stack direction="row" alignItems="baseline" spacing={0.5}>
                <Typography sx={{ fontWeight: 800, fontSize: '3.5rem', lineHeight: 1, color: 'text.primary' }}>$500</Typography>
                <Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>MXN</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>/mes</Typography>
                </Stack>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                por tienda o almacén
              </Typography>
              <Box sx={{
                px: 2, py: 1, borderRadius: 2,
                bgcolor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)',
              }}>
                <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                  💡 3 tiendas + 1 almacén = $2,000/mes
                </Typography>
              </Box>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => openWhatsApp()}
                sx={{
                  mt: 1, bgcolor: '#10b981', color: '#fff', width: '100%',
                  '&:hover': { bgcolor: '#059669' },
                  boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                }}
              >
                Comenzar ahora
              </Button>
            </Stack>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 600, mb: 2 }}>
                Todo incluido, sin costos ocultos:
              </Typography>
              <Grid container spacing={1.5}>
                {includes.map((f, i) => (
                  <Grid size={{ xs: 12, sm: 6 }} key={i}>
                    <Stack direction="row" spacing={1.5} alignItems="center">
                      <Check sx={{ color: 'secondary.main', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default Pricing;
