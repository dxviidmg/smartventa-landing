'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';
import tiendasImg from '../../assets/Tiendas.png';
import { LazyImage } from '../ui/LazyImage';

const capabilities = [
  { title: 'Un catálogo centralizado', desc: 'Productos compartidos entre todas las tiendas. Cambias un precio y se actualiza en todas.' },
  { title: 'Traspasos con trazabilidad', desc: 'Mueve mercancía entre sucursales. Queda registrado quién mandó qué, cuándo y a dónde.' },
  { title: 'Distribución desde almacén', desc: 'Envía inventario a varias tiendas en una sola operación.' },
  { title: 'Control desde un solo lugar', desc: 'Consulta ventas, inventario y caja de cualquier sucursal sin moverte.' },
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
                Crece sin perder el control
              </Typography>
              <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 480 }}>
                Administra varias sucursales y almacenes desde una misma plataforma. Un catálogo, un sistema, una vista de todo tu negocio.
              </Typography>

              <Stack spacing={2.5} sx={{ pt: 1 }}>
                {capabilities.map((c, i) => (
                  <motion.div
                    key={i}
                    {...cardGridItem}
                    transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <Box>
                      <Typography sx={{ fontWeight: 600, color: 'white', fontSize: '0.95rem', mb: 0.25 }}>
                        {c.title}
                      </Typography>
                      <Typography sx={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                        {c.desc}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
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
