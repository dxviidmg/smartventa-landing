import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ErrorOutline, CheckCircleOutline } from '@mui/icons-material';

const Problem = () => {
  const problems = [
    'Errores de inventario',
    'Falta de visibilidad del negocio',
    'Decisiones basadas en información incompleta',
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <motion.div whileHover={{ scale: 1.02, boxShadow: '0 16px 32px rgba(0,0,0,0.15)' }} transition={{ duration: 0.2 }}>
                  <Card
                    sx={{
                      bgcolor: '#fff3e0',
                      border: '2px solid #ffb74d',
                    }}
                  >
                    <Stack spacing={2}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <motion.div animate={{ rotate: [0, -10, 10, -10, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                          <ErrorOutline sx={{ fontSize: 40, color: '#f57c00' }} />
                        </motion.div>
                        <Typography variant="h4" sx={{ color: '#e65100' }}>
                          El Problema
                        </Typography>
                      </Stack>
                      <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                        Muchos negocios con varias sucursales usan sistemas separados o procesos
                        manuales para controlar ventas e inventario.
                      </Typography>
                      <Stack spacing={1} sx={{ mt: 2 }}>
                        {problems.map((problem, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}>
                            <Stack direction="row" spacing={1} alignItems="center">
                              <Box
                                sx={{
                                  width: 6,
                                  height: 6,
                                  borderRadius: '50%',
                                  bgcolor: '#f57c00',
                                }}
                              />
                              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                {problem}
                              </Typography>
                            </Stack>
                          </motion.div>
                        ))}
                      </Stack>
                    </Stack>
                  </Card>
                </motion.div>
              </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <motion.div whileHover={{ scale: 1.02, boxShadow: '0 16px 32px rgba(0,0,0,0.15)' }} transition={{ duration: 0.2 }}>
                <Card
                  sx={{
                    bgcolor: '#e8f5e9',
                    border: '2px solid #81c784',
                  }}
                >
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                        <CheckCircleOutline sx={{ fontSize: 40, color: '#388e3c' }} />
                      </motion.div>
                      <Typography variant="h4" sx={{ color: '#2e7d32' }}>
                        La Solución
                      </Typography>
                    </Stack>
                    <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                      Smartventa centraliza todas tus tiendas en una sola plataforma.
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                      Control total, visibilidad en tiempo real y decisiones basadas en datos
                      precisos.
                    </Typography>
                  </Stack>
                </Card>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Problem;
