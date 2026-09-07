'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';
import tiendasImg from '../../assets/Tiendas.png';
import { LazyImage } from '../ui/LazyImage';

const capabilities = [
  { title: 'Catálogo centralizado', desc: 'Un solo catálogo para todas tus tiendas.' },
  { title: 'Precios centralizados', desc: 'Cambia un precio una vez y aplica en todas.' },
  { title: 'Costos centralizados', desc: 'Administra los costos desde un solo lugar.' },
  { title: 'Inventario por sucursal', desc: 'Mira cuánto tienes disponible en cada tienda.' },
  { title: 'Traspasos entre sucursales', desc: 'Mueve mercancía y registra quién la mandó.' },
  { title: 'Distribución de mercancía', desc: 'Reparte producto a varias tiendas a la vez.' },
  { title: 'Ventas por sucursal', desc: 'Consulta qué se vendió en cada tienda.' },
  { title: 'Información consolidada', desc: 'Todo tu negocio en una sola vista.' },
];

const BrowserFrame = () => (
  <Box sx={{
    borderRadius: 2.5, overflow: 'hidden', bgcolor: '#1e293b',
    boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.04)',
  }}>
    <Stack direction="row" alignItems="center" spacing={0.75} sx={{ px: 1.5, py: 0.8, bgcolor: '#1e293b' }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#ef4444' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#eab308' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
    </Stack>
    <LazyImage src={tiendasImg} alt="Panel multi-sucursal SmartVenta" sx={{ width: '100%', height: 'auto', display: 'block' }} />
  </Box>
);

const MultiStore = () => (
  <Box sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }} id="multi-store">
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeUp}>
            <Stack spacing={3}>
              <Typography variant="overline" sx={{ color: '#34d399', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Multi-sucursal
              </Typography>
              <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.15 }}>
                Todas tus sucursales en un solo lugar
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 480 }}>
                Si tienes varias tiendas, no necesitas administrar cada una como si fuera un negocio
                diferente. Un catálogo, precios y costos centralizados, con el inventario y las
                ventas de cada sucursal a la vista.
              </Typography>

              <Grid container spacing={1.5} sx={{ pt: 1 }}>
                {capabilities.map((c, i) => (
                  <Grid key={i} size={{ xs: 12, sm: 6 }}>
                    <motion.div
                      {...cardGridItem}
                      transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <Box sx={{
                        height: '100%',
                        p: 2,
                        borderRadius: 2.5,
                        bgcolor: 'rgba(255,255,255,0.06)',
                        border: '1px solid rgba(255,255,255,0.1)',
                      }}>
                        <Typography sx={{ fontWeight: 600, color: 'white', fontSize: '0.95rem', mb: 0.5 }}>
                          {c.title}
                        </Typography>
                        <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                          {c.desc}
                        </Typography>
                      </Box>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>

              <Stack spacing={1.5} sx={{ pt: 1 }}>
                <Box sx={{
                  p: 2, borderRadius: 2.5,
                  bgcolor: 'rgba(52,211,153,0.1)',
                  border: '1px solid rgba(52,211,153,0.25)',
                }}>
                  <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.5 }}>
                    Mueve mercancía entre sucursales y mantén el control desde un solo lugar.
                  </Typography>
                </Box>
                <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  Empieza con una sucursal. Cuando crezcas, SmartVenta crece contigo.
                </Typography>
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <BrowserFrame />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default MultiStore;
