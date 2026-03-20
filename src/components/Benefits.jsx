import { Box, Container, Typography, Grid, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
  StorefrontOutlined, VisibilityOutlined,
  AccessTimeOutlined, SavingsOutlined,
  AdminPanelSettings, Person, Engineering, AttachMoney,
} from '@mui/icons-material';

const mainBenefits = [
  { icon: <StorefrontOutlined />, title: 'Controla todas tus tiendas en un solo lugar', desc: 'Gestiona ventas, inventario y empleados de todas tus sucursales desde una sola plataforma centralizada.' },
  { icon: <VisibilityOutlined />, title: 'Visibilidad total de tu negocio', desc: 'Conoce el stock exacto, las ventas del día y el rendimiento de cada sucursal al instante.' },
  { icon: <AccessTimeOutlined />, title: 'Ahorra tiempo en tareas operativas', desc: 'Importaciones masivas, transferencias automatizadas y reportes listos para descargar.' },
  { icon: <SavingsOutlined />, title: 'Reduce pérdidas por errores de inventario', desc: 'Auditorías integradas que detectan inconsistencias antes de que se conviertan en pérdidas.' },
];

const roleBenefits = [
  { icon: <AdminPanelSettings />, title: 'Para Administradores', items: ['Visibilidad completa del negocio desde un solo lugar', 'Detecta sucursales con mejor/peor rendimiento', 'Optimiza inventario basado en datos reales'] },
  { icon: <Person />, title: 'Para Empleados', items: ['Interfaz fácil de aprender y usar', 'Proceso de venta rápido y eficiente', 'Acceso desde cualquier dispositivo'] },
  { icon: <Engineering />, title: 'Técnicos', items: ['Sin instalación (aplicación web)', 'Compatible con impresoras de tickets', 'Actualizaciones automáticas'] },
  { icon: <AttachMoney />, title: 'Financieros', items: ['Reduce costos de infraestructura', 'No requiere hardware especializado', 'Evita pérdidas por mal manejo de inventario'] },
];

const Benefits = () => (
  <Box id="benefits" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#04346b', color: '#fff' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: '#34d399', fontWeight: 700, letterSpacing: 2 }}>
              Beneficios
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700, color: '#fff' }}>
              Resultados reales para tu negocio
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Typography variant="h5" sx={{ fontWeight: 600, textAlign: 'center', color: '#fff', mb: 1 }}>
                ¿Qué gana tu negocio?
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                Resultados concretos desde el primer día
              </Typography>
            </motion.div>
          </Grid>
          {mainBenefits.map((b, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} style={{ height: '100%' }}>
                <Box sx={{
                  p: 4, height: '100%', borderRadius: 4,
                  bgcolor: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)', transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.12)', transform: 'translateY(-4px)' },
                }}>
                  <Box sx={{
                    width: 48, height: 48, borderRadius: 3, bgcolor: 'rgba(52,211,153,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, color: '#34d399', '& svg': { fontSize: 24 },
                  }}>
                    {b.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1.05rem', color: '#fff' }}>{b.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>{b.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12 }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <Typography variant="h5" sx={{ fontWeight: 600, textAlign: 'center', color: '#fff', mb: 1 }}>
                Beneficios para cada rol
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.5)' }}>
                SmartVenta aporta valor a todo tu equipo
              </Typography>
            </motion.div>
          </Grid>
          {roleBenefits.map((rb, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.08 }} style={{ height: '100%' }}>
                <Paper elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, bgcolor: 'rgba(255,255,255,0.1)', color: '#fff' }}>
                  <Box sx={{ mb: 1.5, '& svg': { fontSize: 28 }, color: '#34d399' }}>{rb.icon}</Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>{rb.title}</Typography>
                  <Stack spacing={1}>
                    {rb.items.map((item, j) => (
                      <Stack key={j} direction="row" spacing={1} alignItems="flex-start">
                        <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.5)', mt: 0.8, flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, fontSize: '0.8rem' }}>{item}</Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default Benefits;
