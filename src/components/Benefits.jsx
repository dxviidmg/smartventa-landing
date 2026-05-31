import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import Speed from '@mui/icons-material/Speed';
import CheckCircle from '@mui/icons-material/CheckCircle';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Store from '@mui/icons-material/Store';
import SEO from '../components/SEO';

const benefits = [
  {
    icon: <Store />, title: 'Visibilidad total',
    desc: 'Consulta ventas, inventario y operaciones de todas tus sucursales en tiempo real desde un solo panel.',
    metric: '100%', metricLabel: 'visibilidad',
  },
  {
    icon: <CheckCircle />, title: 'Caja siempre cuadrada',
    desc: 'Corte de caja con resumen por método de pago y movimientos detallados.',
    metric: '0', metricLabel: 'descuadres',
  },
  {
    icon: <Speed />, title: 'Operación ágil',
    desc: 'Traspasos, distribuciones e inventario actualizados al instante. Sin llamadas ni hojas de cálculo.',
    metric: '0', metricLabel: 'retrasos',
  },
  {
    icon: <TrendingUp />, title: 'Fácil de usar',
    desc: 'Interfaz intuitiva con ayuda contextual. Tu equipo vende desde el primer día sin capacitación larga.',
    metric: '1', metricLabel: 'día para dominar',
  },
];

const Benefits = () => (
  <>
    <SEO
      title="Beneficios de SmartVenta"
      description="Resultados desde el primer día. Reducción de errores, ahorro de tiempo y visibilidad total."
    />
    <Box id="benefits" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: '#6ee7b7', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem', animation: 'fadeInUp 0.5s ease both' }}>
            Lo que Ganarás
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, color: 'white', maxWidth: 600, fontWeight: 800, animation: 'fadeInUp 0.5s 0.1s ease both' }}>
            Resultados desde el primer día
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, fontSize: '1.1rem', fontWeight: 500, animation: 'fadeInUp 0.5s 0.2s ease both' }}>
            Comienza a ver resultados inmediatos. Sin complicaciones, sin espera. Reducción de errores, ahorro de tiempo y visibilidad total.
          </Typography>
        </Stack>

        <Grid container spacing={3}>
          {benefits.map((b, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <Box sx={{
                p: 4, height: '100%', borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                animation: `fadeInUp 0.4s ${i * 0.1}s ease both`,
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                  borderColor: 'rgba(52,211,153,0.3)',
                },
              }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2.5 }}>
                  <Box sx={{
                    width: 56, height: 56, borderRadius: 3,
                    bgcolor: 'rgba(52,211,153,0.12)', color: '#34d399',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(52,211,153,0.2)',
                    transition: 'all 0.3s ease',
                    '& svg': { fontSize: 28, transition: 'transform 0.3s ease' },
                    '&:hover svg': { transform: 'scale(1.2) rotate(5deg)' },
                  }}>
                    {b.icon}
                  </Box>
                  <Stack alignItems="flex-end">
                    <Typography sx={{ color: '#34d399', fontWeight: 900, fontSize: '1.75rem', lineHeight: 1 }}>
                      {b.metric}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      {b.metricLabel}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, color: 'white', fontSize: '1.1rem' }}>
                  {b.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontWeight: 500 }}>
                  {b.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Benefits;
