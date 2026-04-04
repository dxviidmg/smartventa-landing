import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ErrorOutline, TrendingUp, Inventory, TrendingDown, SwapHoriz, Insights } from '@mui/icons-material';

const problems = [
  { icon: <Inventory />, text: 'No sabes cuánto inventario tiene cada sucursal' },
  { icon: <TrendingDown />, text: 'Pierdes ventas por falta de control en tu stock' },
  { icon: <SwapHoriz />, text: 'Transferir productos entre tiendas es un caos' },
  { icon: <Insights />, text: 'No tienes datos claros para tomar decisiones' },
];

const solutions = [
  { icon: <Inventory />, text: 'Inventario unificado y en tiempo real por sucursal' },
  { icon: <ErrorOutline />, text: 'Alertas y auditoría que previenen pérdidas' },
  { icon: <SwapHoriz />, text: 'Traspasos con trazabilidad y confirmación' },
  { icon: <TrendingUp />, text: 'Dashboards con KPIs, tendencias y heatmaps' },
];

const ProblemSolution = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
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
              bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <ErrorOutline sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>El problema</Typography>
              </Stack>
              <Stack spacing={2.5}>
                {problems.map((p, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{
                        width: 36, height: 36, borderRadius: 2,
                        bgcolor: 'rgba(4, 52, 107, 0.1)', color: 'primary.main',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        '& svg': { fontSize: 20 },
                      }}>
                        {p.icon}
                      </Box>
                      <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>{p.text}</Typography>
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
              bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            }}>
              <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 3 }}>
                <TrendingUp sx={{ color: 'primary.main' }} />
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary' }}>Con SmartVenta</Typography>
              </Stack>
              <Stack spacing={2.5}>
                {solutions.map((s, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Box sx={{
                        width: 36, height: 36, borderRadius: 2,
                        bgcolor: 'rgba(4, 52, 107, 0.1)', color: 'primary.main',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        '& svg': { fontSize: 20 },
                      }}>
                        {s.icon}
                      </Box>
                      <Typography sx={{ color: 'text.primary', fontWeight: 500 }}>{s.text}</Typography>
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
