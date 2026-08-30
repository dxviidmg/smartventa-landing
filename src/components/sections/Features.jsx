import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { cardGridItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

import SwapHoriz from '@mui/icons-material/SwapHoriz';
import Transform from '@mui/icons-material/Transform';
import Scale from '@mui/icons-material/Scale';
import AttachMoney from '@mui/icons-material/AttachMoney';
import PointOfSale from '@mui/icons-material/PointOfSale';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import AccountBalance from '@mui/icons-material/AccountBalance';
import UploadFile from '@mui/icons-material/UploadFile';
import Assessment from '@mui/icons-material/Assessment';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import Security from '@mui/icons-material/Security';
import People from '@mui/icons-material/People';

const bentoItems = [
  // Large cards — differentiators
  {
    icon: <SwapHoriz />,
    title: 'Traspasos entre tiendas',
    desc: 'Mueve mercancía entre sucursales con trazabilidad completa. Queda registrado quién mandó qué, cuándo y a dónde.',
    size: { xs: 12, sm: 6 },
    accent: '#8b5cf6',
    featured: true,
  },
  {
    icon: <Transform />,
    title: 'Conversión de unidades',
    desc: 'Cajas a piezas, costales a kilos. Configura una vez y convierte con un clic.',
    size: { xs: 12, sm: 6 },
    accent: '#ec4899',
    featured: true,
  },
  // Standard cards
  {
    icon: <Scale />,
    title: 'Venta a granel',
    desc: '"20 pesos de…" y el sistema calcula lo proporcional.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#f97316',
  },
  {
    icon: <PointOfSale />,
    title: 'Crear productos al vender',
    desc: 'Si no existe en el catálogo, lo creas directo desde la venta.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#22c55e',
  },
  {
    icon: <AttachMoney />,
    title: 'Cambio masivo de precios',
    desc: 'Actualiza costo y precios de varios productos a la vez.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#eab308',
  },
  {
    icon: <QrCodeScanner />,
    title: 'Código de barras',
    desc: 'Compatible con lectores USB y Bluetooth.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#22c55e',
  },
  {
    icon: <AccountBalance />,
    title: 'Corte de caja',
    desc: 'Resumen por método de pago con exportación a Excel.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#10b981',
  },
  {
    icon: <UploadFile />,
    title: 'Importación desde Excel',
    desc: 'Sube tu catálogo con plantillas y validación previa.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#0ea5e9',
  },
  {
    icon: <Assessment />,
    title: 'Dashboard de ventas',
    desc: 'KPIs, productos destacados y rendimiento por tienda.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#8b5cf6',
  },
  {
    icon: <BookmarkAdded />,
    title: 'Apartados',
    desc: 'Reserva productos sin cobrar el total.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#0891b2',
  },
  {
    icon: <People />,
    title: 'Clientes y descuentos',
    desc: 'Historial de compras y descuentos personalizados.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#a855f7',
  },
  {
    icon: <Security />,
    title: 'Roles y permisos',
    desc: 'Dueño, administrador y vendedor — cada quien ve lo suyo.',
    size: { xs: 12, sm: 6, md: 4 },
    accent: '#d946ef',
  },
];

const FeatureCard = ({ item, index }) => (
  <motion.div
    {...cardGridItem}
    transition={{ delay: index * 0.04, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    style={{ height: '100%' }}
  >
    <Stack
      spacing={item.featured ? 2 : 1.5}
      sx={{
        p: item.featured ? 3.5 : 3,
        height: '100%',
        borderRadius: 3,
        bgcolor: 'background.paper',
        border: '1px solid',
        borderColor: 'divider',
        transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
        '&:hover': {
          borderColor: item.accent,
          boxShadow: `0 4px 20px ${item.accent}12`,
        },
      }}
    >
      <Box sx={{
        width: item.featured ? 48 : 40,
        height: item.featured ? 48 : 40,
        borderRadius: 2.5,
        bgcolor: `${item.accent}10`,
        color: item.accent,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': { fontSize: item.featured ? 24 : 20 },
      }}>
        {item.icon}
      </Box>
      <Box>
        <Typography sx={{
          fontWeight: 600,
          mb: 0.5,
          fontSize: item.featured ? '1.1rem' : '0.95rem',
        }}>
          {item.title}
        </Typography>
        <Typography variant="body2" sx={{
          color: 'text.secondary',
          lineHeight: 1.65,
          fontSize: item.featured ? '0.9rem' : '0.85rem',
        }}>
          {item.desc}
        </Typography>
      </Box>
    </Stack>
  </motion.div>
);

const Features = () => (
  <div id="features">
    <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="Características"
          title="Todo incluido, sin módulos extra"
          subtitle="No hay funciones bloqueadas. Todo está disponible desde el primer día."
          sx={{ mb: 8 }}
        />

        <Grid container spacing={2.5}>
          {bentoItems.map((item, i) => (
            <Grid size={item.size} key={i}>
              <FeatureCard item={item} index={i} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </div>
);

export default Features;
