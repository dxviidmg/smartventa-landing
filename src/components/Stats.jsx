import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp, Speed, CheckCircle, Timer } from '@mui/icons-material';

const Stats = () => {
  const stats = [
    {
      icon: <TrendingUp sx={{ fontSize: 48 }} />,
      value: '80%',
      label: 'Reducción de errores',
      description: 'en inventario',
    },
    {
      icon: <Timer sx={{ fontSize: 48 }} />,
      title: '10 horas',
      label: 'Ahorradas por semana',
      description: 'en tareas administrativas',
    },
    {
      icon: <Speed sx={{ fontSize: 48 }} />,
      value: '5 seg',
      label: 'Procesa una venta',
      description: 'con código de barras',
    },
    {
      icon: <CheckCircle sx={{ fontSize: 48 }} />,
      value: '99.9%',
      label: 'Precisión',
      description: 'en control de inventario',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#1976d2', color: 'white' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, textAlign: 'center', mb: 2 }}>
              Resultados que hablan por sí solos
            </Typography>
          </motion.div>

          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      height: '220px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      textAlign: 'center',
                      bgcolor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: 'rgba(255,255,255,0.15)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <Stack spacing={2} alignItems="center">
                      <motion.div
                        animate={{ color: ['rgba(255,255,255,1)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,1)'] }}
                        transition={{ duration: 3, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {stat.icon}
                      </motion.div>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'white' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: 'white' }}>
                        {stat.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                        {stat.description}
                      </Typography>
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Stats;
