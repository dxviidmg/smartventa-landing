import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Close, Check } from '@mui/icons-material';

const Comparison = () => {
  const comparisons = [
    {
      without: 'Sistemas separados por tienda',
      with: 'Una sola plataforma centralizada',
    },
    {
      without: 'Actualización manual de inventarios',
      with: 'Sincronización automática en tiempo real',
    },
    {
      without: 'Errores frecuentes en conteos',
      with: 'Trazabilidad completa de movimientos',
    },
    {
      without: 'Reportes tardíos e incompletos',
      with: 'Métricas actualizadas al instante',
    },
    {
      without: 'Dificultad para escalar',
      with: 'Agrega tiendas sin complicaciones',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'text.primary' }}>
                Antes y después de Smartventa
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', fontSize: '1.1rem' }}>
                Transforma la forma en que gestionas tu negocio multi-tienda
              </Typography>
            </motion.div>
          </Stack>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} md={5}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Paper sx={{ p: 3, bgcolor: '#ffebee', borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stack spacing={2}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#c62828', mb: 2, textAlign: 'center' }}>
                      ❌ Sin Smartventa
                    </Typography>
                    {comparisons.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Close sx={{ color: '#c62828', mt: 0.5 }} />
                          <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                            {item.without}
                          </Typography>
                        </Stack>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={5}>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Paper sx={{ p: 3, bgcolor: '#e8f5e9', borderRadius: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <Stack spacing={2}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#2e7d32', mb: 2, textAlign: 'center' }}>
                      ✅ Con Smartventa
                    </Typography>
                    {comparisons.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Stack direction="row" spacing={2} alignItems="flex-start">
                          <Check sx={{ color: '#2e7d32', mt: 0.5 }} />
                          <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                            {item.with}
                          </Typography>
                        </Stack>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Comparison;
