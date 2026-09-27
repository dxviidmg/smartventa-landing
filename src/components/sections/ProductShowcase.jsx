'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem } from '../../constants';
import carritoImg from '../../assets/Carrito de venta.png';
import { LazyImage } from '../ui/LazyImage';

const BrowserFrame = ({ src, alt }) => (
  <Box
    sx={{
      borderRadius: 2.5,
      overflow: 'hidden',
      bgcolor: '#1e293b',
      boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.75}
      sx={{ px: 1.5, py: 0.8, bgcolor: '#1e293b' }}
    >
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef4444' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eab308' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
      <Box sx={{
        flex: 1, mx: 1.5, py: 0.3, px: 1.5,
        borderRadius: 1, bgcolor: 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center',
      }}>
        <Typography sx={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          app.smartventa.com
        </Typography>
      </Box>
    </Stack>
    <LazyImage src={src} alt={alt} sx={{ width: '100%', height: 'auto', display: 'block' }} />
  </Box>
);

const features = [
  {
    title: 'Múltiples Carritos Simultáneos',
    desc: 'Un vendedor atiende 5 clientes sin mezclar nada. Cambia de cliente con un clic. Cada carrito mantiene su estado completo.',
  },
  {
    title: 'Stock Unificado + Reservas Automáticas',
    desc: 'Ves inventario de todas las tiendas al instante. El sistema evita que dos vendedores vendan lo mismo. Cero sobreventa.',
  },
  {
    title: 'Trazabilidad Completa de Productos',
    desc: 'Rastrea cada producto: dónde está, quién lo movió, cuándo, por qué. Auditoría perfecta. Cero pérdidas.',
  },
  {
    title: 'Cambio de Precios Fácil y Masivo',
    desc: 'Actualiza 1,000 productos en 2 clicks. Cambios al instante en todas las tiendas. Sin errores manuales.',
  },
  {
    title: 'Búsqueda Visual con Imágenes',
    desc: 'Ves fotos de productos. Identifica rápido. Menos errores. Venta más rápida y mejor experiencia.',
  },
  {
    title: 'Traspaso de Productos entre Tiendas',
    desc: 'Mueve mercancía entre sucursales con un registro completo. Sabe quién envía, quién recibe, qué, cuándo. Cero pérdidas.',
  },
  {
    title: 'Compatibilidad con Lectores de Código de Barras',
    desc: 'Escanea productos al instante. Sin digitación. Más rápido. Menos errores. Compatible con cualquier lector USB.',
  },
  {
    title: 'Tableros y Reportes en Tiempo Real',
    desc: 'Ve ventas, inventario y desempeño de todas tus tiendas en un dashboard. Datos actualizados cada segundo. Decisiones informadas.',
  },
  {
    title: 'Pagos Mixtos en una Sola Transacción',
    desc: 'Un cliente paga con efectivo + tarjeta + transferencia en la misma venta. El sistema suma automáticamente. Sin confusiones.',
  },
  {
    title: 'Corte de Caja Automático y Auditado',
    desc: 'Cierra caja en segundos con balance automático. Historial completo de efectivo movido. Conciliación perfecta cada día.',
  },
  {
    title: 'Precio Mayoreo y Precio Menudeo',
    desc: 'Configura precios diferentes según la cantidad. Cliente compra 10 a mayor, 1 a menor. El sistema calcula automáticamente.',
  },
  {
    title: 'Importación de Productos vía Excel',
    desc: 'Carga 5,000 productos desde tu Excel en minutos. Validamos, detectamos errores, tu equipo lo revisa, listo para vender.',
  },
];

const ProductShowcase = () => (
  <Box sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }} id="product">
    <Container maxWidth="lg">
      <motion.div {...cardGridItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" direction="row-reverse">
          <Grid size={{ xs: 12, md: 6 }}>
            <BrowserFrame src={carritoImg} alt="Punto de venta SmartVenta — carrito de venta con búsqueda de productos" />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Punto de venta
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, letterSpacing: '-0.02em' }}>
                Punto de venta poderoso
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75, mb: 3 }}>
                Diseñado para vender más rápido, sin errores, y con control total del inventario.
              </Typography>
              <Stack spacing={2}>
                {features.map((f, i) => (
                  <Box key={i} sx={{
                    p: 2.5, borderRadius: 2.5,
                    bgcolor: 'rgba(4,120,87,0.04)',
                    border: '1px solid rgba(4,120,87,0.12)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: 'rgba(4,120,87,0.08)',
                      borderColor: 'rgba(4,120,87,0.25)',
                    },
                  }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#047857', mb: 0.75 }}>
                      {f.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.6 }}>
                      {f.desc}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default ProductShowcase;
