'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const locations = [
  { type: 'Tienda', name: 'Tienda Centro', metrics: 'Ventas hoy: $2,450' },
  { type: 'Tienda', name: 'Tienda Sur', metrics: 'Ventas hoy: $1,890' },
  { type: 'Tienda', name: 'Tienda Norte', metrics: 'Ventas hoy: $3,120' },
  { type: 'Almacén', name: 'Almacén Principal', metrics: 'Stock: 450 ítems' },
];

const MultiLocationControl = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }} id="multilocal">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 8, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            Todas tus sucursales, un solo lugar
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
            Ves el estado de cada tienda y almacén en tiempo real. Sin llamadas. Sin esperas.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={2} sx={{ mb: 6 }}>
        {locations.map((loc, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Box sx={{
                p: 2.5, borderRadius: 2.5,
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
                textAlign: 'center',
              }}>
                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
                  {loc.type}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary', mb: 1 }}>
                  {loc.name}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#047857', fontWeight: 600 }}>
                  {loc.metrics}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

    </Container>
  </Box>
);

export default MultiLocationControl;
