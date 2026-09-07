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

const groups = [
  {
    category: 'Control del negocio',
    desc: 'Mira cómo va tu negocio sin estar en cada tienda.',
    features: [
      { icon: <Assessment />, title: 'Dashboard de ventas', desc: 'KPIs, productos destacados y rendimiento general.', accent: '#8b5cf6' },
      { icon: <Storefront />, title: 'Ventas por sucursal', desc: 'Consulta qué se vendió en cada tienda.', accent: '#0ea5e9' },
      { icon: <Badge />, title: 'Ventas por vendedor', desc: 'Sabe quién vendió qué en cada tienda.', accent: '#f97316' },
      { icon: <TrendingUp />, title: 'Rentabilidad', desc: 'Consulta la utilidad y cuánto tienes invertido en mercancía.', accent: '#f59e0b' },
      { icon: <AccountBalance />, title: 'Control de caja', desc: 'Resumen por método de pago, movimientos y cortes.', accent: '#10b981' },
    ],
  },
  {
    category: 'Inventario',
    desc: 'Tu mercancía bajo control en todas las ubicaciones.',
    features: [
      { icon: <Inventory2 />, title: 'Inventario por sucursal', desc: 'Consulta el stock disponible en cada tienda.', accent: '#0891b2' },
      { icon: <Inventory2 />, title: 'Inventario total', desc: 'La suma de tu mercancía entre tiendas y almacenes.', accent: '#14b8a6' },
      { icon: <History />, title: 'Kardex de inventario', desc: 'Historial de cada producto: ventas, traspasos y ajustes.', accent: '#14b8a6' },
      { icon: <SwapHoriz />, title: 'Traspasos', desc: 'Mueve mercancía entre sucursales con registro de quién y cuándo.', accent: '#6366f1' },
      { icon: <AttachMoney />, title: 'Cambio masivo de precios', desc: 'Actualiza costo, precio unitario y mayoreo de varios productos a la vez.', accent: '#eab308' },
      { icon: <UploadFile />, title: 'Importación desde Excel', desc: 'Sube tu catálogo completo con plantillas y validación previa.', accent: '#0ea5e9' },
    ],
  },
  {
    category: 'Venta',
    desc: 'Cobra rápido y como tu negocio lo necesita.',
    features: [
      { icon: <QrCodeScanner />, title: 'Código de barras', desc: 'Compatible con lectores USB y Bluetooth. También buscas por nombre.', accent: '#22c55e' },
      { icon: <Scale />, title: 'Venta por peso', desc: 'Vende por kilo, fracción o "20 pesos de…" y el sistema calcula lo proporcional.', accent: '#f97316' },
      { icon: <Payment />, title: 'Pagos mixtos', desc: 'Una misma venta puede pagarse con efectivo, tarjeta y transferencia.', accent: '#6366f1' },
      { icon: <Sell />, title: 'Precios de mayoreo', desc: 'Precios de mayoreo automáticos según la cantidad.', accent: '#eab308' },
      { icon: <ShoppingCart />, title: 'Múltiples carritos', desc: 'Atiende a varios clientes al mismo tiempo sin perder la venta.', accent: '#0891b2' },
      { icon: <BookmarkAdded />, title: 'Apartados', desc: 'Reserva productos para un cliente sin cobrar el total.', accent: '#0891b2' },
      { icon: <Transform />, title: 'Conversión de unidades', desc: 'Cajas a piezas, costales a kilos. Configúralo una vez y convierte con un clic.', accent: '#ec4899' },
      { icon: <PointOfSale />, title: 'Crear productos al vender', desc: 'Ideal si tienes muchos productos sin registrar. Activa la opción y, si escaneas un código que no existe, aparece un modal para crear el producto con su stock y se agrega al carrito al instante.', accent: '#22c55e' },
    ],
  },
  {
    category: 'Operación',
    desc: 'Ordena a tu equipo y a tus clientes.',
    features: [
      { icon: <Badge />, title: 'Vendedores', desc: 'Asigna vendedores a tiendas y consulta sus ventas individuales.', accent: '#f97316' },
      { icon: <Security />, title: 'Roles y permisos', desc: 'Dueño, administrador y vendedor — cada quien ve lo que necesita.', accent: '#d946ef' },
      { icon: <People />, title: 'Clientes', desc: 'Historial de compras por cliente.', accent: '#a855f7' },
      { icon: <Discount />, title: 'Descuentos', desc: 'Descuentos personalizados por cliente.', accent: '#a855f7' },
      { icon: <Print />, title: 'Tickets e impresión', desc: 'Compatible con impresoras térmicas estándar.', accent: '#6366f1' },
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
