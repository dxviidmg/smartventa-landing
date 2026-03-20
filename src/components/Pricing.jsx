import { Box, Container, Typography, Stack, Card, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, ArrowForward } from '@mui/icons-material';
import { scrollToSection } from '../utils/helpers';

const features = [
  'Punto de venta completo',
  'Gestión de inventario multi-tienda',
  'Transferencias entre sucursales',
  'Dashboard y reportes',
  'Usuarios ilimitados',
  'Auditoría integrada',
  'Soporte por WhatsApp',
  'Actualizaciones incluidas',
];

const Pricing = () => (
  <Box id="pricing" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="sm">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
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
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.05rem' }}>
              Un solo plan. Sin costos ocultos. Sin contratos.
            </Typography>
          </motion.div>
        </Stack>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Card
            elevation={0}
            sx={{
              p: { xs: 4, md: 5 },
              borderRadius: 4,
              border: '2px solid',
              borderColor: 'primary.main',
              position: 'relative',
              overflow: 'visible',
            }}
          >
            <Chip
              label="Más popular"
              color="primary"
              size="small"
              sx={{
                position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                fontWeight: 600, px: 1,
              }}
            />

            <Stack spacing={4} alignItems="center" textAlign="center">
              <Box>
                <Typography variant="overline" sx={{ color: 'text.secondary' }}>Por tienda o almacén</Typography>
                <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                  <Typography variant="h2" sx={{ fontWeight: 800, fontSize: '3.5rem' }}>$500</Typography>
                  <Typography variant="body1" sx={{ color: 'text.secondary' }}>MXN/mes</Typography>
                </Stack>
              </Box>

              <Stack spacing={1.5} sx={{ width: '100%', textAlign: 'left' }}>
                {features.map((f, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                    <Check sx={{ color: 'secondary.main', fontSize: 20 }} />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
                  </Stack>
                ))}
              </Stack>

              <Box sx={{ pt: 1, width: '100%' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, fontStyle: 'italic' }}>
                  💡 Ejemplo: 3 tiendas + 1 almacén = $2,000 MXN/mes
                </Typography>
                <Button
                  fullWidth
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForward />}
                  onClick={() => scrollToSection('cta')}
                  sx={{
                    py: 1.5, fontSize: '1rem',
                    bgcolor: 'primary.main', '&:hover': { bgcolor: 'primary.dark' },
                  }}
                >
                  Comenzar ahora
                </Button>
              </Box>
            </Stack>
          </Card>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Pricing;
