'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

const painPoints = [
  {
    scenario: '¿Cuánto vendieron hoy?',
    detail: 'Tienes que llamar a cada tienda para saberlo.',
  },
  {
    scenario: '¿Cuánto producto queda?',
    detail: 'Nadie sabe exactamente. Alguien intuye.',
  },
  {
    scenario: '¿Ya recibieron el traspaso?',
    detail: 'No hay registro. No sabes qué pasó en el camino.',
  },
  {
    scenario: '¿El precio cambió en todas las tiendas?',
    detail: 'Tuviste que ir tienda por tienda a actualizarlo manualmente.',
  },
];

const IsThisForYou = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }} id="for-you">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 8, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            ¿Te pasa esto?
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
            Si administras una o varias sucursales, probablemente reconozcas alguno de estos momentos.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {painPoints.map((point, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6 }}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.06, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ height: '100%' }}
            >
              <Stack
                spacing={1.5}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    borderColor: '#ef4444',
                    boxShadow: '0 4px 20px rgba(239, 68, 68, 0.1)',
                  },
                }}
              >
                <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: '#ef4444' }}>
                  {point.scenario}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, fontSize: '0.9rem' }}>
                  {point.detail}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div
        {...fadeUp}
        transition={{ delay: 0.3 }}
        style={{ marginTop: '4rem' }}
      >
        <Box sx={{
          p: 3, borderRadius: 3,
          bgcolor: 'rgba(239, 68, 68, 0.05)',
          border: '2px solid #ef4444',
          textAlign: 'center',
        }}>
          <Typography sx={{ color: 'text.primary', fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.6 }}>
            Si tienes que preguntar para saberlo, ya perdiste el control.
          </Typography>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default IsThisForYou;
