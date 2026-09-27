'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem, fadeUp } from '../../constants';
import tableroImg from '../../assets/Tablero.png';
import { LazyImage } from '../ui/LazyImage';

const BrowserFrame = ({ src, alt }) => (
  <Box sx={{
    borderRadius: 2.5, overflow: 'hidden', bgcolor: '#1e293b',
    boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
  }}>
    <Stack direction="row" alignItems="center" spacing={0.75} sx={{ px: 1.5, py: 0.8, bgcolor: '#1e293b' }}>
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

const highlights = [
  'Stock en tiempo real por sucursal',
  'Total consolidado de tu negocio',
  'Historial completo (Kardex)',
  'Reservas automáticas (sin duplicados)',
  'Traspasos con confirmación',
  'Distribuciones a varias tiendas',
  'Conversión de unidades (Costal → Kg)',
  'Catálogo centralizado e importable',
];

const Inventory = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }} id="inventory">
    <Container maxWidth="lg">
      <motion.div {...cardGridItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Inventario y traspasos
              </Typography>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, letterSpacing: '-0.02em' }}>
                Tu stock al instante
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.75 }}>
                Ve qué hay en cada tienda y almacén. Sin llamadas.
                Traspasa productos con trazabilidad. Distribuye a varias tiendas en una operación.
                <br />
                <br />
                Un catálogo. Cambias una vez. Se aplica en todas.
              </Typography>
              <Box sx={{
                p: 2, borderRadius: 2.5,
                bgcolor: 'rgba(4,120,87,0.06)',
                border: '1px solid rgba(4,120,87,0.15)',
              }}>
                <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#047857', lineHeight: 1.5 }}>
                  Mueve productos entre sucursales sin perder el rastro.
                </Typography>
              </Box>
              <Stack direction="row" flexWrap="wrap" gap={1} sx={{ pt: 0.5 }}>
                {highlights.map((h) => (
                  <Box key={h} sx={{
                    py: 0.5, px: 1.5, borderRadius: 2,
                    bgcolor: 'rgba(4,120,87,0.06)',
                    border: '1px solid rgba(4,120,87,0.12)',
                  }}>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#047857' }}>{h}</Typography>
                  </Box>
                ))}
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <BrowserFrame src={tableroImg} alt="Inventario por sucursal en SmartVenta — stock y traspasos" />
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  </Box>
);

export default Inventory;
