'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

const reasons = [
  {
    title: 'Diseñado para multi-sucursal desde el inicio',
    desc: 'No es un POS básico con módulo de sucursales. SmartVenta nació porque alguien con 4 tiendas y 3 almacenes necesitaba control real. Cada característica está pensada para eso.',
    accent: '#0ea5e9',
  },
  {
    title: 'Almacenes integrados, no separados',
    desc: 'Distribuye a varias tiendas en una operación. Consulta stock total o por ubicación. Traspasos con confirmación obligatoria y trazabilidad automática.',
    accent: '#8b5cf6',
  },
  {
    title: 'Cambios masivos de precios en segundos',
    desc: 'Selecciona cientos de productos y cambia precio en todas las tiendas de una vez. Sin ir tienda por tienda. Sin errores por olvidarse una sucursal.',
    accent: '#ec4899',
  },
  {
    title: 'Historial completo de movimientos',
    desc: 'Cada producto que se vende, traspasa o ajusta queda registrado con usuario, hora y detalle. Auditoría automática detecta duplicados y inconsistencias.',
    accent: '#f59e0b',
  },
  {
    title: 'Búsqueda ultrarrápida',
    desc: 'Encuentra productos en milisegundos incluso con miles de SKUs. Escanea desde cámara de celular. Autocompletado inteligente mientras escribes.',
    accent: '#10b981',
  },
  {
    title: 'Soporte WhatsApp directo',
    desc: 'Desde enero 2025 acompañamos negocios reales. No es ticket automático. Es respuesta directa cuando la necesitas, en la plataforma que ya usas.',
    accent: '#06b6d4',
  },
];

const Why = () => (
  <Box id="why" sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Por qué SmartVenta
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            Pensado específicamente para negocios con varias sucursales
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
            No es un POS genérico con módulo de sucursales. SmartVenta nació de un problema real:
            un negocio que quería controlar 4 tiendas y 3 almacenes sin fricciones.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {reasons.map((r, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 4 }}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ height: '100%' }}
            >
              <Stack
                spacing={2}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    borderColor: r.accent,
                    boxShadow: `0 4px 20px ${r.accent}12`,
                  },
                }}
              >
                <Box sx={{
                  width: 40, height: 40, borderRadius: 2.5,
                  bgcolor: `${r.accent}10`, color: r.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 700, fontSize: '1.2rem',
                }}>
                  ✓
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary' }}>
                  {r.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.9rem' }}>
                  {r.desc}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Why;
