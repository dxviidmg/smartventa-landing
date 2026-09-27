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

const capabilities = [
  'Búsqueda en milisegundos',
  'Escáner desde cámara del celular',
  'Múltiples carritos simultáneos',
  'Crear producto al instante',
  'Vender por pieza, peso o monto',
  'Precios dinámicos automáticos',
  'Apartados sin cobrar',
  'Historial de compras por cliente',
  'Descuentos personalizados',
  'Devolver y cancelar',
  'Pagos mixtos (efectivo + tarjeta)',
  'Impresoras térmicas integradas',
];

const ProductShowcase = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }} id="product">
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
                El punto de venta que entiende tu negocio
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75 }}>
                Búsqueda instantánea por código o nombre. Vende por pieza, peso, cantidad o dinero directo ("dame $20 de queso").
                Múltiples carritos simultáneos. Escanea código de barras desde tu celular. Crea productos al vender.
                Todo pensado para vendedores reales.
              </Typography>
              <Grid container spacing={1}>
                {capabilities.map((c) => (
                  <Grid key={c} size={{ xs: 6 }}>
                    <Box sx={{
                      py: 0.75, px: 1.5, borderRadius: 2,
                      bgcolor: 'rgba(4,120,87,0.06)',
                      border: '1px solid rgba(4,120,87,0.12)',
                      height: '100%',
                    }}>
                      <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#047857' }}>{c}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default ProductShowcase;
