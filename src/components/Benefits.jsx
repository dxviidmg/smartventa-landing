import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { BusinessOutlined, TrendingUpOutlined, VerifiedOutlined, SpeedOutlined, CloudDoneOutlined, AdminPanelSettings, Person, Engineering, AttachMoney } from '@mui/icons-material';

const Benefits = () => {
  const mainBenefits = [
    { icon: <BusinessOutlined sx={{ fontSize: 56 }} />, title: 'Control total de todas tus sucursales', description: 'Administra múltiples tiendas desde un solo lugar' },
    { icon: <TrendingUpOutlined sx={{ fontSize: 56 }} />, title: 'Reportes actualizados', description: 'Accede a métricas de ventas, inventario y rendimiento al instante' },
    { icon: <VerifiedOutlined sx={{ fontSize: 56 }} />, title: 'Reduce errores de inventario', description: 'Sincronización automática y trazabilidad completa de movimientos' },
    { icon: <SpeedOutlined sx={{ fontSize: 56 }} />, title: 'Mejora la toma de decisiones', description: 'Datos precisos y actualizados para decisiones estratégicas informadas' },
    { icon: <CloudDoneOutlined sx={{ fontSize: 56 }} />, title: 'Plataforma escalable', description: 'Crece sin límites, agrega tiendas y usuarios según lo necesites' },
  ];

  const detailedBenefits = [
    {
      icon: <AdminPanelSettings sx={{ fontSize: 40 }} />,
      title: 'Para Administradores',
      items: [
        'Visibilidad completa del negocio desde un solo lugar',
        'Detecta sucursales con mejor/peor rendimiento',
        'Optimiza inventario basado en datos reales',
      ],
    },
    {
      icon: <Person sx={{ fontSize: 40 }} />,
      title: 'Para Empleados',
      items: [
        'Interfaz fácil de aprender y usar',
        'Proceso de venta rápido y eficiente',
        'Acceso desde cualquier dispositivo',
      ],
    },
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: 'Técnicos',
      items: [
        'Sin instalación compleja (aplicación web)',
        'Compatible con impresoras de tickets estándar',
        'Actualizaciones automáticas'
      ],
    },
    {
      icon: <AttachMoney sx={{ fontSize: 40 }} />,
      title: 'Financieros',
      items: [
        'Reduce costos de infraestructura',
        'No requiere hardware especializado',
        'Evita pérdidas por mal manejo de inventario',
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#1976d2', color: 'white' }} id="benefits">
      <Container maxWidth="xl">
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

        <Grid container spacing={3} justifyContent="center" sx={{ mb: 6 }}>
          {mainBenefits.map((b, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ duration: 0.3 }}>
                      <motion.div
                        animate={{ color: ['rgba(255,255,255,1)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)'] }}
                        transition={{ duration: 4, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Box sx={{ mb: 2 }}>{b.icon}</Box>
                      </motion.div>
                    </motion.div>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{b.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }}>{b.description}</Typography>
                  </Box>
                </motion.div>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {detailedBenefits.map((benefit, index) => (
            <Grid item size={{ xs: 4, sm: 4, md: 3 }} key={index}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }} style={{ height: '100%' }}>
                <Paper sx={{ p: 3, height: '100%', minHeight: '280px', borderRadius: 3, bgcolor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Stack spacing={2}>
                    <motion.div
                      animate={{ color: ['rgba(255,255,255,1)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)'] }}
                      transition={{ duration: 4, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {benefit.icon}
                    </motion.div>
                    <Typography variant="h6" sx={{ fontWeight: 600, color: 'white', fontSize: '1rem' }}>
                      {benefit.title}
                    </Typography>
                    <Stack spacing={1}>
                      {benefit.items.map((item, i) => (
                        <Stack key={i} direction="row" spacing={1} alignItems="center">
                          <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'white', flexShrink: 0 }} />
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, fontSize: '0.85rem' }}>
                            {item}
                          </Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefits;
