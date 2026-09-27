'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

const BeforeAfter = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            Así era antes
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={6} alignItems="stretch">
        {/* ANTES */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <Stack spacing={3} sx={{ height: '100%' }}>
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: 'text.primary' }}>
                ❌ ANTES
              </Typography>

              <Stack spacing={2.5}>
                {[
                  '📞 Cliente pregunta por producto → Llamada a otra tienda',
                  '⏳ Esperar respuesta (si contestan)',
                  '😞 Se va sin comprar o compra menos',
                  '💰 Cambio de precio = ir tienda por tienda',
                  '🧮 Vendedores siempre con calculadora (fracción, peso, dinero)',
                  '🚚 Traspasos sin registro claro',
                  '❓ "¿Dónde está ese producto?" (nadie sabe)',
                  '📊 Vendemos a ciegas (sin saber qué vende cada tienda)',
                ].map((item, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: '0.95rem',
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      bgcolor: 'rgba(239, 68, 68, 0.06)',
                      borderLeft: '3px solid #ef4444',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        {/* DESPUÉS */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Stack spacing={3} sx={{ height: '100%' }}>
              <Typography sx={{ fontSize: '1.2rem', fontWeight: 700, color: 'text.primary' }}>
                ✅ AHORA
              </Typography>

              <Stack spacing={2.5}>
                {[
                  '👀 Cliente pregunta → ves stock de todas las tiendas al instante',
                  '⚡ Traspaso en 30 segundos desde el sistema',
                  '😊 Cliente compra más (tiene opciones)',
                  '💲 Cambio de precio = un clic, aplica en todas',
                  '🧮 "Dame $20 de queso" → SmartVenta calcula automáticamente',
                  '📦 Cada traspaso queda registrado (quién, cuándo, cuánto)',
                  '✓ "Está en almacén" (sabes dónde está cada producto)',
                  '📈 Dashboard muestra qué vende cada tienda en tiempo real',
                ].map((item, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: '0.95rem',
                      color: 'text.secondary',
                      lineHeight: 1.6,
                      py: 1.5,
                      px: 2,
                      borderRadius: 2,
                      bgcolor: 'rgba(16, 185, 129, 0.06)',
                      borderLeft: '3px solid #10b981',
                    }}
                  >
                    {item}
                  </Typography>
                ))}
              </Stack>
            </Stack>
          </motion.div>
        </Grid>
      </Grid>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Box sx={{
          mt: 8,
          p: { xs: 3, md: 4 },
          borderRadius: 3,
          bgcolor: 'rgba(52, 211, 153, 0.08)',
          border: '2px solid rgba(52, 211, 153, 0.3)',
          textAlign: 'center',
        }}>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 600, color: '#047857' }}>
            "El cambio no fue la tecnología.
            <br />
            Fue tener el control en mis manos."
          </Typography>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default BeforeAfter;
