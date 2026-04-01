import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { AccessTime, Shield, TrendingUp, Devices } from '@mui/icons-material';

const benefits = [
  {
    icon: <AccessTime />, title: 'Ahorra hasta 10 horas semanales',
    desc: 'Automatiza cuadres de caja y conteo de inventario. Menos tiempo operando, más tiempo creciendo.',
    metric: '10h', metricLabel: 'ahorradas por semana',
  },
  {
    icon: <Shield />, title: 'Elimina robos y mermas',
    desc: 'Auditoría completa de cada movimiento, usuario y transacción. Nada pasa sin quedar registrado.',
    metric: '0', metricLabel: 'pérdidas invisibles',
  },
  {
    icon: <TrendingUp />, title: 'Datos para decidir mejor',
    desc: 'Reportes de productos más vendidos, horas pico y rentabilidad por sucursal. Deja de adivinar.',
    metric: '100%', metricLabel: 'visibilidad del negocio',
  },
  {
    icon: <Devices />, title: 'Escala sin complicaciones',
    desc: 'Agrega sucursales en minutos. Sin servidores, sin instalaciones. Solo abre el navegador y listo.',
    metric: '∞', metricLabel: 'sucursales sin límite',
  },
];

const Benefits = () => (
  <Box id="benefits" sx={{ py: { xs: 6, md: 10 }, background: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: '#34d399', fontWeight: 700, letterSpacing: 2 }}>
            Beneficios
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: 'white', maxWidth: 600 }}>
            Deja de adivinar, empieza a crecer
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3}>
        {benefits.map((b, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <Box sx={{
                p: 4, height: '100%', borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'all 0.3s ease',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.07)', transform: 'translateY(-4px)' },
              }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2.5 }}>
                  <Box sx={{
                    width: 48, height: 48, borderRadius: 3,
                    bgcolor: 'rgba(52,211,153,0.12)', color: '#34d399',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    '& svg': { fontSize: 24 },
                  }}>
                    {b.icon}
                  </Box>
                  <Stack alignItems="flex-end">
                    <Typography sx={{ color: '#34d399', fontWeight: 800, fontSize: '1.5rem', lineHeight: 1 }}>
                      {b.metric}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
                      {b.metricLabel}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', fontSize: '1.05rem' }}>
                  {b.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.8 }}>
                  {b.desc}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>


    </Container>
  </Box>
);

export default Benefits;
