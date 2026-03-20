import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  StorefrontOutlined, PointOfSaleOutlined, Inventory2Outlined,
  SwapHorizOutlined, PeopleOutlined, AssessmentOutlined,
  AdminPanelSettingsOutlined, TableChartOutlined, ReceiptLongOutlined,
} from '@mui/icons-material';

const features = [
  { icon: <StorefrontOutlined />, title: 'Gestión multi-tienda', desc: 'Administra todas tus sucursales y almacenes desde una sola cuenta.' },
  { icon: <PointOfSaleOutlined />, title: 'POS con código de barras', desc: 'Punto de venta rápido, optimizado para teclado y lectores de barras.' },
  { icon: <Inventory2Outlined />, title: 'Inventario en tiempo real', desc: 'Stock actualizado al instante en todas tus ubicaciones.' },
  { icon: <SwapHorizOutlined />, title: 'Transferencias entre tiendas', desc: 'Mueve productos entre sucursales y almacenes con trazabilidad completa.' },
  { icon: <PeopleOutlined />, title: 'Clientes y descuentos', desc: 'Registra clientes y aplica descuentos personalizados por cliente.' },
  { icon: <AssessmentOutlined />, title: 'Reportes y dashboard', desc: 'Gráficos de ventas, comparativas entre tiendas y métricas clave.' },
  { icon: <AdminPanelSettingsOutlined />, title: 'Auditoría integrada', desc: 'Detecta inconsistencias de inventario con auditorías periódicas.' },
  { icon: <TableChartOutlined />, title: 'Importación y exportación Excel', desc: 'Carga productos e inventario masivamente. Exporta reportes a Excel.' },
  { icon: <ReceiptLongOutlined />, title: 'Impresión de tickets', desc: 'Conexión directa con impresoras térmicas para tickets de venta.' },
];

const Features = () => (
  <Box id="features" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Características
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Todo lo que necesitas en una plataforma
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, fontSize: '1.05rem' }}>
              Herramientas completas para gestionar tu negocio multi-tienda sin complicaciones.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 3.5, height: '100%', borderRadius: 4,
                    border: '1px solid', borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': { borderColor: 'primary.light', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', transform: 'translateY(-2px)' },
                  }}
                >
                  <Box sx={{
                    width: 44, height: 44, borderRadius: 2.5,
                    bgcolor: 'primary.main', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2, '& svg': { fontSize: 22 },
                  }}>
                    {f.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1rem' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {f.desc}
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

export default Features;
