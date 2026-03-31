import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ErrorOutline, TrendingUp } from '@mui/icons-material';

const problems = [
  { emoji: '😰', text: 'No sabes cuánto inventario tiene cada sucursal' },
  { emoji: '📉', text: 'Pierdes ventas por falta de control en tu stock' },
  { emoji: '🔄', text: 'Transferir productos entre tiendas es un caos' },
  { emoji: '📊', text: 'No tienes datos claros para tomar decisiones' },
];

const solutions = [
  { emoji: '✅', text: 'Inventario unificado y en tiempo real por sucursal' },
  { emoji: '✅', text: 'Alertas y auditoría que previenen pérdidas' },
  { emoji: '✅', text: 'Traspasos con trazabilidad y confirmación' },
  { emoji: '✅', text: 'Dashboards con KPIs, tendencias y heatmaps' },
];

const ProblemSolution = () => (
  <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, textAlign: 'center', mb: 2 }}>
          ¿Te suena familiar?
        </Typography>
        <Typography sx={{ color: 'text.secondary', textAlign: 'center', maxWidth: 550, mx: 'auto', mb: 6 }}>
          Manejar varias tiendas sin las herramientas correctas genera problemas que cuestan dinero.
        </Typography>
      </motion.div>

      <Grid container spacing={4}>
        {/* Problems */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Box sx={{
              p: 4, borderRadius: 4, height: '100%',
              bgcolor: '#fef2f2', border: '1px solid #fecaca',
            }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <ErrorOutline sx={{ color: '#ef4444' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#991b1b' }}>El problema</Typography>
              </Stack>
              <Stack spacing={2.5}>
                {problems.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography sx={{ fontSize: '1.3rem' }}>{p.emoji}</Typography>
                      <Typography sx={{ color: '#7f1d1d', fontWeight: 500 }}>{p.text}</Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>

        {/* Solutions */}
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Box sx={{
              p: 4, borderRadius: 4, height: '100%',
              bgcolor: '#f0fdf4', border: '1px solid #bbf7d0',
            }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <TrendingUp sx={{ color: '#10b981' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: '#14532d' }}>Con SmartVenta</Typography>
              </Stack>
              <Stack spacing={2.5}>
                {solutions.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Typography sx={{ fontSize: '1.3rem' }}>{s.emoji}</Typography>
                      <Typography sx={{ color: '#14532d', fontWeight: 500 }}>{s.text}</Typography>
                    </Stack>
                  </motion.div>
                ))}
              </Stack>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default ProblemSolution;
