import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Assessment from '@mui/icons-material/Assessment';
import People from '@mui/icons-material/People';
import SwapHoriz from '@mui/icons-material/SwapHoriz';
import Image from '@mui/icons-material/Image';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Keyboard from '@mui/icons-material/Keyboard';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import History from '@mui/icons-material/History';
import TableChart from '@mui/icons-material/TableChart';
import Security from '@mui/icons-material/Security';
import Print from '@mui/icons-material/Print';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Support from '@mui/icons-material/Support';
import { sectionHeader, cardGridItem } from '../constants';
import SEO from '../components/SEO';

const features = [
  { icon: <PointOfSale />, title: 'Multiventa', desc: 'Atiende a varios clientes a la vez. Mientras uno paga o revisa su cambio, avanzas con el siguiente sin perder ninguna venta.', color: '#10b981' },
  { icon: <History />, title: 'Inventario en Tiempo Real', desc: 'Stock unificado en todas las tiendas, reservas inteligentes y revisión de stock entre sucursales.', color: '#14b8a6' },
  { icon: <SwapHoriz />, title: 'Traspasos y Distribución', desc: 'Mueve mercancía entre tiendas y almacenes con trazabilidad completa y confirmación obligatoria.', color: '#8b5cf6' },
  { icon: <Assessment />, title: 'Dashboard', desc: 'KPIs clave, heatmap de ventas, ticket promedio, mejor/peor tienda y gráficas de tendencia.', color: '#8b5cf6' },
  { icon: <AttachMoney />, title: 'Precios y Pagos Flexibles', desc: 'Mayoreo automático por cantidad, pagos mixtos (efectivo, tarjeta, transferencia) en una misma venta.', color: '#f97316' },
  { icon: <AccountBalance />, title: 'Corte de Caja', desc: 'Resumen por método de pago, movimientos detallados, corte parcial/total y exportación a Excel.', color: '#22c55e' },
  { icon: <Image />, title: 'Catálogo de Productos', desc: 'Imágenes, costos, márgenes, historial de precios. Organiza por marca y departamento.', color: '#f97316' },
  { icon: <QrCodeScanner />, title: 'Lector de Códigos', desc: 'Búsqueda instantánea por código de barras o nombre. Crea productos al vuelo si no existen.', color: '#22c55e' },
  { icon: <People />, title: 'Clientes y Descuentos', desc: 'Registro completo, historial de compras y descuentos personalizados por porcentaje.', color: '#a855f7' },
  { icon: <SwapHoriz />, title: 'Devoluciones y Cancelaciones', desc: 'Cancelación total o devolución parcial con motivos documentados y filtros rápidos.', color: '#eab308' },
  { icon: <Security />, title: 'Roles y Permisos', desc: 'Dueño, Administrador y Vendedor con vistas personalizadas según nivel de acceso.', color: '#d946ef' },
  { icon: <TableChart />, title: 'Importación Masiva', desc: 'Carga miles de productos desde Excel con plantillas descargables y validación previa.', color: '#0ea5e9' },
  { icon: <Print />, title: 'Impresión de Tickets', desc: 'Compatible con impresoras térmicas estándar.', color: '#6366f1' },
  { icon: <Keyboard />, title: 'Atajos de Teclado', desc: 'Vende más rápido con atajos configurados para cada operación.', color: '#84cc16' },
  { icon: <Support />, title: 'Soporte Integrado', desc: 'WhatsApp directo con info prellenada y ayuda contextual en cada página del sistema.', color: '#0ea5e9' },
];

const Features = () => (
  <div id="features">
    <SEO
      title="Características del Sistema"
      description="Todo lo que necesitas para controlar mejor tu negocio. Centraliza tu información y toma decisiones informadas."
    />
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#CAD2DE' }}>
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
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
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
  </div>
);

export default Features;
