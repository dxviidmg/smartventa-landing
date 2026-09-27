'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

import Transform from '@mui/icons-material/Transform';
import Scale from '@mui/icons-material/Scale';
import PointOfSale from '@mui/icons-material/PointOfSale';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Payment from '@mui/icons-material/Payment';
import AccountBalance from '@mui/icons-material/AccountBalance';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import UploadFile from '@mui/icons-material/UploadFile';
import Assessment from '@mui/icons-material/Assessment';
import TrendingUp from '@mui/icons-material/TrendingUp';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import People from '@mui/icons-material/People';
import Badge from '@mui/icons-material/Badge';
import Security from '@mui/icons-material/Security';
import History from '@mui/icons-material/History';
import Print from '@mui/icons-material/Print';
import Storefront from '@mui/icons-material/Storefront';
import Inventory2 from '@mui/icons-material/Inventory2';
import SwapHoriz from '@mui/icons-material/SwapHoriz';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Sell from '@mui/icons-material/Sell';
import Discount from '@mui/icons-material/Discount';
import SupportAgent from '@mui/icons-material/SupportAgent';

const groups = [
  {
    category: 'Ventas',
    desc: 'Cobra rápido y como tu negocio lo necesita.',
    features: [
      { icon: <PointOfSale />, title: 'Punto de venta', desc: 'Búsqueda instantánea por código de barras o nombre. Vende y cobra desde una sola pantalla en segundos.', accent: '#22c55e' },
      { icon: <ShoppingCart />, title: 'Múltiples carritos', desc: 'Atiende a varios clientes simultáneamente sin perder información de ninguna venta.', accent: '#0891b2' },
      { icon: <QrCodeScanner />, title: 'Escáner con cámara', desc: 'Lee códigos de barras desde tu móvil o tablet. Compatible también con lectores USB y Bluetooth.', accent: '#22c55e' },
      { icon: <Scale />, title: 'Venta por peso y granel', desc: '"Dame $20 de queso" — Vende por kilo, fracción, cantidad o monto y el sistema calcula automáticamente.', accent: '#f97316' },
      { icon: <AttachMoney />, title: 'Precios dinámicos', desc: 'Precio unitario y de mayoreo automático según la cantidad vendida en la misma transacción.', accent: '#eab308' },
      { icon: <Sell />, title: 'Precio de mayoreo', desc: 'Configura precios de mayoreo por cantidad. Se aplica automáticamente cuando el cliente compra en volumen.', accent: '#eab308' },
      { icon: <BookmarkAdded />, title: 'Apartados', desc: 'Reserva productos para un cliente sin cobrar el total. Los productos se descuentan del inventario.', accent: '#0891b2' },
      { icon: <People />, title: 'Clientes', desc: 'Registro completo con historial de compras, descuentos personalizados y seguimiento de apartados.', accent: '#a855f7' },
      { icon: <Discount />, title: 'Descuentos', desc: 'Aplica descuentos por porcentaje por cliente o por venta. Todo queda registrado.', accent: '#a855f7' },
    ],
  },
  {
    category: 'Inventario',
    desc: 'Tu mercancía bajo control en todas las ubicaciones.',
    features: [
      { icon: <Inventory2 />, title: 'Inventario por sucursal', desc: 'Consulta stock disponible en cada tienda en tiempo real. Las reservas se descuentan automáticamente.', accent: '#0891b2' },
      { icon: <History />, title: 'Kardex', desc: 'Historial completo de cada producto: ventas, traspasos, conversiones y ajustes con trazabilidad.', accent: '#14b8a6' },
      { icon: <SwapHoriz />, title: 'Traspasos', desc: 'Mueve mercancía entre sucursales con confirmación obligatoria. Cada movimiento queda registrado.', accent: '#6366f1' },
      { icon: <Storefront />, title: 'Distribución', desc: 'Reparte producto desde almacén a múltiples tiendas en una sola operación. Cada tienda confirma recibido.', accent: '#0ea5e9' },
      { icon: <Transform />, title: 'Conversión de unidades', desc: '1 Costal → 10 Kg automáticamente. Múltiples unidades: Pieza, KG, Costal, Litro, Metro, Rollo, Caja.', accent: '#ec4899' },
      { icon: <Inventory2 />, title: 'Ajustes de inventario', desc: 'Solicita ajustes (vendedor/admin) o autoriza cambios (dueño). Todo queda documentado en el Kardex.', accent: '#14b8a6' },
      { icon: <UploadFile />, title: 'Catálogo centralizado', desc: 'Un catálogo para todas tus tiendas. Impórtalo desde Excel con validación previa de errores.', accent: '#0ea5e9' },
    ],
  },
  {
    category: 'Caja',
    desc: 'Cuadra tu caja sin dolores de cabeza.',
    features: [
      { icon: <AccountBalance />, title: 'Movimientos de caja', desc: 'Registra entradas y salidas de dinero. Separa cada método de pago (efectivo, tarjeta, transferencia).', accent: '#10b981' },
      { icon: <AccountBalance />, title: 'Corte de caja', desc: 'Resumen diario de ventas y movimientos. Cortes parciales o totales, exportables a Excel.', accent: '#10b981' },
      { icon: <Payment />, title: 'Pagos mixtos', desc: 'Una misma venta se puede pagar con efectivo, tarjeta y transferencia combinados.', accent: '#6366f1' },
      { icon: <Payment />, title: 'Control por método', desc: 'Sabe cuánto vendiste en efectivo, tarjeta y transferencia. El sistema te calcula cuánto debería haber en caja.', accent: '#6366f1' },
    ],
  },
  {
    category: 'Administración',
    desc: 'Mira cómo va tu negocio sin estar en cada tienda.',
    features: [
      { icon: <Assessment />, title: 'Dashboard', desc: 'KPIs clave: mejor/peor tienda, heatmap de ventas, ticket promedio, productos top.', accent: '#8b5cf6' },
      { icon: <Badge />, title: 'Vendedores', desc: 'Asigna vendedores a tiendas. Consulta ventas individuales y rendimiento por empleado.', accent: '#f97316' },
      { icon: <Security />, title: 'Roles y permisos', desc: 'Dueño (acceso total), Administrador (gestión de tienda) y Vendedor (ventas básicas).', accent: '#d946ef' },
      { icon: <UploadFile />, title: 'Importar catálogo', desc: 'Carga miles de productos desde Excel con validación previa. Plantillas descargables incluidas.', accent: '#0ea5e9' },
      { icon: <AttachMoney />, title: 'Cambios de precios', desc: 'Actualiza costo, precio unitario y mayoreo de múltiples productos simultáneamente desde una tabla.', accent: '#eab308' },
      { icon: <TrendingUp />, title: 'Rentabilidad', desc: 'Consulta utilidad, inversión en mercancía, historial de precios y análisis de cancelaciones.', accent: '#f59e0b' },
    ],
  },
  {
    category: 'Operación',
    desc: 'Todo listo para empezar a trabajar.',
    features: [
      { icon: <Print />, title: 'Impresión de tickets', desc: 'Compatible con impresoras térmicas estándar. Indicador de estado en tiempo real vía WebSocket.', accent: '#6366f1' },
      { icon: <SupportAgent />, title: 'Auditoría integrada', desc: 'Detecta automáticamente: ventas duplicadas, códigos repetidos, productos sin precio, stock inconsistente.', accent: '#0891b2' },
      { icon: <SupportAgent />, title: 'Soporte por WhatsApp', desc: 'Botón directo con información de tu tienda prellenada. Ayuda inmediata cuando la necesites.', accent: '#22c55e' },
    ],
  },
];

const FeatureCard = ({ f }) => (
  <Stack
    spacing={1.5}
    sx={{
      p: 3,
      height: '100%',
      borderRadius: 3,
      bgcolor: 'background.paper',
      border: '1px solid',
      borderColor: 'divider',
      transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
      '&:hover': {
        borderColor: f.accent,
        boxShadow: `0 4px 20px ${f.accent}12`,
      },
    }}
  >
    <Box sx={{
      width: 40, height: 40, borderRadius: 2.5,
      bgcolor: `${f.accent}10`, color: f.accent,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      '& svg': { fontSize: 20 },
    }}>
      {f.icon}
    </Box>
    <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
      {f.title}
    </Typography>
    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.85rem' }}>
      {f.desc}
    </Typography>
  </Stack>
);

const Features = () => (
  <div id="features" style={{ scrollMarginTop: '80px' }}>
    <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={1} sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Todo incluido
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Todo lo que necesitas, sin módulos extra
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
              Cada plan incluye todas las funciones. Estas son las que más usan los dueños de negocio.
            </Typography>
          </Stack>
        </motion.div>

        <Stack spacing={{ xs: 5, md: 6 }}>
          {groups.map((group) => (
            <Box key={group.category}>
              <motion.div {...fadeUp}>
                <Stack spacing={0.5} sx={{ mb: 2.5 }}>
                  <Typography variant="h3" sx={{ fontSize: { xs: '1.35rem', md: '1.6rem' } }}>
                    {group.category}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem' }}>
                    {group.desc}
                  </Typography>
                </Stack>
              </motion.div>

              <Grid container spacing={2}>
                {group.features.map((f, i) => (
                  <Grid key={f.title} size={{ xs: 12, sm: 6, md: 4 }}>
                    <motion.div
                      {...cardGridItem}
                      transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                      style={{ height: '100%' }}
                    >
                      <FeatureCard f={f} />
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  </div>
);

export default Features;
