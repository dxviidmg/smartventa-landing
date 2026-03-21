import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Inventory2Outlined, StorefrontOutlined, PointOfSaleOutlined,
  SwapHorizOutlined, PeopleOutlined, AssessmentOutlined,
  AdminPanelSettingsOutlined, TableChartOutlined, ReceiptLongOutlined,
  WarehouseOutlined, BugReportOutlined,
  FindInPageOutlined, HelpOutlineOutlined,
} from '@mui/icons-material';

const features = [
  { icon: <Inventory2Outlined />, title: 'Gestión de Productos', desc: 'Catálogo completo con precios unificados, mayoreo, códigos de barras y SKU.' },
  { icon: <StorefrontOutlined />, title: 'Gestión de Almacenes', desc: 'Inventario separado por almacén, distribución a tiendas y seguimiento de productos en tránsito.' },
  { icon: <WarehouseOutlined />, title: 'Control de Inventario', desc: 'Stock en tiempo real por tienda y almacén con alertas automáticas de bajo stock.' },
  { icon: <SwapHorizOutlined />, title: 'Transferencias entre Sucursales', desc: 'Solicita, aprueba y confirma movimientos entre tiendas y almacenes con trazabilidad completa.' },
  { icon: <PointOfSaleOutlined />, title: 'Punto de Venta', desc: 'Interfaz rápida con lectores de código de barras, múltiples métodos de pago e historial de transacciones.' },
  { icon: <PeopleOutlined />, title: 'Clientes y Descuentos', desc: 'Registro de clientes, descuentos personalizados e historial de compras por cliente.' },
  { icon: <AssessmentOutlined />, title: 'Dashboard de Ventas', desc: 'Total de ventas, mejor y peor tienda, mejores y peores días y horas de actividad. Filtra por año y mes para analizar cualquier periodo.' },
  { icon: <BugReportOutlined />, title: 'Auditoría de Productos', desc: 'Detecta códigos repetidos, costos en cero, precios mayoreo inconsistentes, faltantes en tiendas y productos sin movimiento.' },
  { icon: <FindInPageOutlined />, title: 'Auditoría de Transacciones', desc: 'Detecta ventas duplicadas, logs inconsistentes y discrepancias de stock con herramientas dedicadas.' },
  { icon: <AdminPanelSettingsOutlined />, title: 'Gestión de Empleados', desc: 'Roles y permisos personalizables, control de acceso por tienda y registro de actividad.' },
  { icon: <TableChartOutlined />, title: 'Importación y Exportación', desc: 'Carga masiva de productos e inventario desde Excel. Exporta reportes a Excel.' },
  { icon: <ReceiptLongOutlined />, title: 'Impresión de Tickets', desc: 'Conexión directa con impresoras térmicas para tickets de venta.' },
  { icon: <HelpOutlineOutlined />, title: 'Ayuda Contextual', desc: 'Un botón de ayuda en cada página que explica qué hace cada sección. Ideal para nuevos usuarios.' },
];

const Features = () => (
  <Box id="features" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
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
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
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
