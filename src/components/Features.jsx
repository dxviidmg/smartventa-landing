import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  PointOfSale, Assessment, People, SwapHoriz, Warehouse, LocalOffer, Image, AttachMoney, Keyboard, QrCodeScanner, History, TableChart, Security, Print, Payment, AccountBalance, Support
} from '@mui/icons-material';
import { sectionHeader, cardGridItem } from '../constants';
import SEO from '../components/SEO';

const features = [
  { icon: <Warehouse />, title: 'Tiendas y Almacenes', desc: 'Gestiona múltiples tiendas y almacenes desde un solo lugar.', color: '#6366f1' },
  { icon: <Assessment />, title: 'Dashboard', desc: 'Gráficas y KPIs en tiempo real para tomar decisiones.', color: '#8b5cf6' },
  { icon: <PointOfSale />, title: 'Mayoreo y Menudeo', desc: 'Precios dinámicos según cantidad.', color: '#10b981' },
  { icon: <PointOfSale />, title: 'Multiventa', desc: 'Múltiples ventas simultáneas en una pantalla.', color: '#d946ef' },
  { icon: <Payment />, title: 'Pagos Mixtos', desc: 'Efectivo, transferencia y tarjeta en una venta.', color: '#f97316' },
  { icon: <Keyboard />, title: 'Atajos de Teclado', desc: 'Vende más rápido con atajos de teclado.', color: '#84cc16' },
  { icon: <QrCodeScanner />, title: 'Lector de Códigos', desc: 'Compatible con lectores de código de barras USB y BT.', color: '#22c55e' },
  { icon: <Print />, title: 'Impresión', desc: 'Compatible con impresoras térmicas y tickets.', color: '#6366f1' },
  { icon: <Image />, title: 'Productos', desc: 'Imágenes, costos, márgenes y control de inventario por producto.', color: '#f97316' },
  { icon: <LocalOffer />, title: 'Marcas y Departamentos', desc: 'Organiza productos por marca y departamento.', color: '#ec4899' },
  { icon: <History />, title: 'Historial', desc: 'Registro de cambios de precios y movimientos de inventario.', color: '#14b8a6' },
  { icon: <SwapHoriz />, title: 'Reasignación', desc: 'Cambia marcas y departamentos masivamente.', color: '#06b6d4' },
  { icon: <People />, title: 'Clientes y Descuentos', desc: 'Historial de compras y descuentos personalizados.', color: '#a855f7' },
  { icon: <People />, title: 'Personal', desc: 'Un usuario manager por tienda y múltiples vendedores con control de acceso.', color: '#d946ef' },
  { icon: <SwapHoriz />, title: 'Traspasos y Distribución', desc: 'Traslados y distribución entre tiendas y almacenes con trazabilidad.', color: '#8b5cf6' },
  { icon: <SwapHoriz />, title: 'Devoluciones y cancelaciones', desc: 'Devoluciones y cancelaciones documentadas.', color: '#eab308' },
  { icon: <AttachMoney />, title: 'Mayoreo Automático', desc: 'Aplica precios de mayoreo según cantidad.', color: '#f43f5e' },
  { icon: <AccountBalance />, title: 'Caja', desc: 'Flujo de caja y corte parcial o total con resumen por método.', color: '#22c55e' },
  { icon: <TableChart />, title: 'Importación', desc: 'Carga productos y ventas masivamente con plantillas Excel.', color: '#0ea5e9' },
  { icon: <Security />, title: 'Auditoría', desc: 'Auditoría de productos, ventas e inventario.', color: '#3b82f6' },
  { icon: <Support />, title: 'Soporte', desc: 'Soporte integrado vía WhatsApp.', color: '#0ea5e9' },
];

const Features = () => (
  <>
    <SEO
      title="Características del Sistema"
      description="Todo lo que necesitas para controlar mejor tu negocio. Centraliza tu información y toma decisiones informadas."
    />
    <Box id="features" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#CAD2DE' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <motion.div {...sectionHeader.overline}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Características
            </Typography>
          </motion.div>
          <motion.div {...sectionHeader.title}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
              Todo lo que necesitas para controlar mejor tu negocio
            </Typography>
          </motion.div>
          <motion.div {...sectionHeader.subtitle}>
            <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
              Centraliza tu información y toma decisiones informadas. Diseñado específicamente para resolver el caos operativo en negocios multi-tienda.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div
                {...cardGridItem}
                transition={{ delay: i * 0.08 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 4, height: '100%', borderRadius: 4,
                    bgcolor: 'background.paper',
                    border: '1px solid', borderColor: 'divider',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: f.color,
                      boxShadow: `0 12px 40px ${f.color}20`,
                      transform: 'translateY(-8px) scale(1.01)',
                    },
                  }}
                >
                  <Box sx={{
                    width: 48, height: 48, borderRadius: 3,
                    bgcolor: `${f.color}12`, color: f.color,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, '& svg': { fontSize: 24 },
                  }}>
                    {f.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                    {f.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Features;
