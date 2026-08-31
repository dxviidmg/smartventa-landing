'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';
import Close from '@mui/icons-material/Close';
import Check from '@mui/icons-material/Check';

const before = [
  'Información dispersa entre hojas de cálculo y WhatsApp',
  'Traspasos de mercancía sin registro',
  'Inventario poco claro entre sucursales',
  'Ir físicamente a cada tienda para saber qué hay',
  'No sabes cuánto vendió cada sucursal',
];

const after = [
  'Toda la operación centralizada en un solo sistema',
  'Traspasos con trazabilidad completa',
  'Inventario en tiempo real de cada ubicación',
  'Consulta cualquier tienda desde donde estés',
  'Ventas, corte de caja y métricas al instante',
];

const Comparison = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Antes vs con SmartVenta
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {/* Before */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Box sx={{
              p: 3.5, borderRadius: 3,
              bgcolor: 'background.paper',
              border: '1px solid', borderColor: 'divider',
              height: '100%',
            }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: 2.5, color: 'text.secondary' }}>
                Sin SmartVenta
              </Typography>
              <Stack spacing={2}>
                {before.map((text, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                    <Close sx={{ fontSize: 18, color: '#ef4444', mt: 0.3, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', lineHeight: 1.6 }}>
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>

        {/* After */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Box sx={{
              p: 3.5, borderRadius: 3,
              bgcolor: 'background.paper',
              border: '1px solid', borderColor: '#047857',
              height: '100%',
            }}>
              <Typography sx={{ fontWeight: 700, fontSize: '1rem', mb: 2.5, color: '#047857' }}>
                Con SmartVenta
              </Typography>
              <Stack spacing={2}>
                {after.map((text, i) => (
                  <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                    <Check sx={{ fontSize: 18, color: '#047857', mt: 0.3, flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: 'text.primary', lineHeight: 1.6 }}>
                      {text}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Comparison;
