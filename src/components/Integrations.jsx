import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Print, QrCode2, Cloud, Smartphone } from '@mui/icons-material';

const integrations = [
  {
    icon: <Print />, name: 'Impresoras Térmicas',
    desc: 'Compatible con impresoras de tickets estándar. Imprime recibos al instante.',
  },
  {
    icon: <QrCode2 />, name: 'Lectores de Código de Barras',
    desc: 'Funciona con cualquier lector USB estándar. Búsqueda instantánea de productos.',
  },
  {
    icon: <Cloud />, name: 'Sincronización en la Nube',
    desc: 'Todos tus datos sincronizados en tiempo real. Acceso desde cualquier dispositivo.',
  },
  {
    icon: <Smartphone />, name: 'Multiplataforma',
    desc: 'Funciona en computadoras, tablets y celulares. Responsive y optimizado.',
  },
];

const Integrations = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Integraciones
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
            Compatible con tu equipo actual
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
            No necesitas cambiar tu hardware. SmartVenta funciona con lo que ya tienes.
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3}>
        {integrations.map((int, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  p: 4, height: '100%', borderRadius: 4,
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    boxShadow: '0 8px 30px rgba(16,185,129,0.1)',
                    transform: 'translateY(-4px)',
                  },
                  textAlign: 'center',
                }}
              >
                <Box sx={{
                  width: 56, height: 56, borderRadius: 3,
                  bgcolor: 'rgba(16,185,129,0.1)', color: 'secondary.main',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, mx: 'auto', '& svg': { fontSize: 28 },
                }}>
                  {int.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1rem' }}>
                  {int.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {int.desc}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Integrations;
