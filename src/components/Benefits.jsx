import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { BusinessOutlined, TrendingUpOutlined, VerifiedOutlined, SpeedOutlined, CloudDoneOutlined } from '@mui/icons-material';

const Benefits = () => {
  const benefits = [
    { icon: <BusinessOutlined sx={{ fontSize: 56 }} />, title: 'Control total de todas tus sucursales', description: 'Administra múltiples tiendas desde una sola plataforma centralizada' },
    { icon: <TrendingUpOutlined sx={{ fontSize: 56 }} />, title: 'Reportes en tiempo real', description: 'Accede a métricas actualizadas de ventas, inventario y rendimiento' },
    { icon: <VerifiedOutlined sx={{ fontSize: 56 }} />, title: 'Reduce errores de inventario', description: 'Sincronización automática y trazabilidad completa de movimientos' },
    { icon: <SpeedOutlined sx={{ fontSize: 56 }} />, title: 'Mejora la toma de decisiones', description: 'Datos precisos y actualizados para decisiones estratégicas informadas' },
    { icon: <CloudDoneOutlined sx={{ fontSize: 56 }} />, title: 'Plataforma escalable', description: 'Crece sin límites, agrega tiendas y usuarios según lo necesites' },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'primary.main', color: 'white' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>
              Beneficios de usar Smartventa
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
              Optimiza tu negocio y toma el control total de tus operaciones
            </Typography>
          </motion.div>
        </Box>

        <Grid container spacing={3} justifyContent="center">
          {benefits.map((b, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <Box sx={{ mb: 2 }}>{b.icon}</Box>
                    </motion.div>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{b.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{b.description}</Typography>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
