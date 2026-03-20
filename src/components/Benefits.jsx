import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  StorefrontOutlined, VisibilityOutlined, SpeedOutlined,
  BugReportOutlined, TrendingUpOutlined,
} from '@mui/icons-material';

const benefits = [
  { icon: <StorefrontOutlined />, title: 'Controla todas tus tiendas en un solo lugar', desc: 'Gestiona ventas, inventario y empleados de todas tus sucursales desde una sola plataforma centralizada.' },
  { icon: <VisibilityOutlined />, title: 'Visibilidad de inventario en tiempo real', desc: 'Conoce el stock exacto de cada tienda y almacén al instante. Sin sorpresas ni faltantes.' },
  { icon: <SpeedOutlined />, title: 'Ventas más rápidas con un POS optimizado', desc: 'Interfaz diseñada para velocidad: escaneo de códigos, atajos de teclado y múltiples carritos.' },
  { icon: <BugReportOutlined />, title: 'Reduce errores y problemas de stock', desc: 'Sistema de auditoría integrado que detecta inconsistencias y previene stock negativo automáticamente.' },
  { icon: <TrendingUpOutlined />, title: 'Escala conforme crece tu negocio', desc: 'Agrega tiendas, almacenes y usuarios sin límite. La plataforma crece contigo.' },
];

const Benefits = () => (
  <Box id="benefits" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Beneficios
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Resultados reales para tu negocio
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          {benefits.map((b, i) => (
            <Grid item xs={12} sm={6} md={i < 3 ? 4 : 6} key={i}>
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
                    '&:hover': { borderColor: 'secondary.main', transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' },
                  }}
                >
                  <Box sx={{
                    width: 48, height: 48, borderRadius: 3,
                    bgcolor: 'rgba(16,185,129,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, color: 'secondary.main',
                    '& svg': { fontSize: 24 },
                  }}>
                    {b.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1.05rem' }}>
                    {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {b.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default Benefits;
