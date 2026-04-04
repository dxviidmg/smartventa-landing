import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Speed, CheckCircle, TrendingUp, Store } from '@mui/icons-material';

const benefits = [
  {
    icon: <Speed />, title: 'Resultados desde el día 1',
    desc: 'Configuración en minutos. Tu equipo vende desde el primer día sin curva de aprendizaje.',
    metric: '30', metricLabel: 'minutos para empezar',
  },
  {
    icon: <CheckCircle />, title: 'Cero errores de caja',
    desc: 'Detecta inconsistencias automáticamente. Tu cuadre siempre cierra perfecto.',
    metric: '100%', metricLabel: 'precisión garantizada',
  },
  {
    icon: <TrendingUp />, title: 'Ventas en tiempo real',
    desc: 'Mira tus ingresos mientras ocurren. Sin esperar reportes de cierre.',
    metric: '0', metricLabel: 'retraso en datos',
  },
  {
    icon: <Store />, title: 'Multi-sucursal instantáneo',
    desc: 'Administra todas tus tiendas desde un solo panel. Sin costo extra por sucursal.',
    metric: '∞', metricLabel: 'control total',
  },
];

const Benefits = () => (
  <Box id="benefits" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: '#34d399', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem' }}>
            Beneficios
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: 'white', maxWidth: 600, fontWeight: 800 }}>
            Resultados desde el primer día
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 500, fontSize: '1.1rem', fontWeight: 500 }}>
            Comienza a ver resultados inmediatos. Sin complicaciones, sin espera.
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
                    width: 56, height: 56, borderRadius: 3,
                    bgcolor: 'rgba(52,211,153,0.12)', color: '#34d399',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(52,211,153,0.2)',
                    '& svg': { fontSize: 28 },
                  }}>
                    {b.icon}
                  </Box>
                  <Stack alignItems="flex-end">
                    <Typography sx={{ color: '#34d399', fontWeight: 900, fontSize: '1.75rem', lineHeight: 1 }}>
                      {b.metric}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      {b.metricLabel}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', fontSize: '1.1rem' }}>
                  {b.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, fontWeight: 500 }}>
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
