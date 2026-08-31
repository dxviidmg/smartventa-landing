'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem } from '../../constants';
import carritoImg from '../../assets/Carrito de venta.png';
import tableroImg from '../../assets/Tablero.png';
import tiendasImg from '../../assets/Tiendas.png';
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
    <LazyImage
      src={src}
      alt={alt}
      sx={{ width: '100%', height: 'auto', display: 'block' }}
    />
  </Box>
);

const showcaseBlocks = [
  {
    overline: 'Punto de venta',
    title: 'Vende sin complicarte',
    desc: 'Busca por código de barras o nombre, agrega al carrito y cobra. Múltiples carritos simultáneos, precios de mayoreo automáticos y atajos de teclado para operar sin mouse.',
    img: carritoImg,
    imgAlt: 'Punto de venta SmartVenta — carrito de venta con búsqueda de productos',
    reverse: false,
    highlights: ['Múltiples carritos', 'Código de barras', 'Precios de mayoreo', 'Crea productos al vender'],
  },
  {
    overline: 'Control total',
    title: 'Siempre sabes qué tienes',
    desc: 'Stock en tiempo real de todas tus tiendas. Historial completo de cada producto: ventas, traspasos, ajustes. Importa tu catálogo desde Excel en minutos.',
    img: tableroImg,
    imgAlt: 'Dashboard SmartVenta — tablero de ventas y métricas por tienda',
    reverse: true,
    highlights: ['Inventario unificado', 'Kardex por producto', 'Importación masiva', 'Corte de caja'],
  },
  {
    overline: 'Multi-tienda',
    title: 'Una cuenta, todas tus sucursales',
    desc: 'Administra tiendas y almacenes desde un solo lugar. Mueve mercancía con trazabilidad completa. Distribuye inventario desde el almacén a varias tiendas en una operación.',
    img: tiendasImg,
    imgAlt: 'Gestión de tiendas SmartVenta — panel multi-sucursal',
    reverse: false,
    highlights: ['Panel centralizado', 'Traspasos con trazabilidad', 'Distribución a múltiples tiendas', 'Cambio instantáneo entre tiendas'],
  },
];

const ProductShowcase = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }} id="product">
    <Container maxWidth="lg">
      <Stack spacing={{ xs: 10, md: 14 }}>
        {showcaseBlocks.map((block, i) => (
          <motion.div
            key={i}
            {...cardGridItem}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Grid
              container
              spacing={{ xs: 4, md: 6 }}
              alignItems="center"
              direction={block.reverse ? 'row-reverse' : 'row'}
            >
              {/* Text */}
              <Grid size={{ xs: 12, md: 5 }}>
                <Stack spacing={2.5}>
                  <Typography
                    variant="overline"
                    sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}
                  >
                    {block.overline}
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, letterSpacing: '-0.02em' }}
                  >
                    {block.title}
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75 }}>
                    {block.desc}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 0.5 }}>
                    {block.highlights.map((h) => (
                      <Box
                        key={h}
                        sx={{
                          py: 0.5, px: 1.5,
                          borderRadius: 2,
                          bgcolor: 'rgba(4,120,87,0.06)',
                          border: '1px solid rgba(4,120,87,0.12)',
                        }}
                      >
                        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#047857' }}>
                          {h}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Stack>
              </Grid>

              {/* Screenshot */}
              <Grid size={{ xs: 12, md: 7 }}>
                <BrowserFrame src={block.img} alt={block.imgAlt} />
              </Grid>
            </Grid>
          </motion.div>
        ))}
      </Stack>
    </Container>
  </Box>
);

export default ProductShowcase;
