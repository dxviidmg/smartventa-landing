'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

const reasons = [
  {
    title: 'Crece contigo sin cambiar de sistema',
    desc: 'Empiezas con una tienda. Después tienes 4, 10 o 20. SmartVenta creció así. Cada feature existe porque alguien tuvo ese problema real.',
    accent: '#0ea5e9',
  },
  {
    title: 'Controlas todo desde un lugar',
    desc: 'No persigues información. No cambias precio tienda por tienda. No llamadas para saber cuánto hay. Un dashboard. Una verdad.',
    accent: '#8b5cf6',
  },
  {
    title: 'Hecho por alguien que entiende el negocio',
    desc: 'Fue construido para resolver el caos real de múltiples sucursales. Soporte por WhatsApp directo. Persona, no chatbot. Desde enero 2025.',
    accent: '#10b981',
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
            No es un POS genérico. Fue construido para resolver el caos real de administrar múltiples sucursales sin fragmentar información.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {reasons.map((r, i) => (
          <Grid key={i} size={{ xs: 12, md: 4 }}>
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
