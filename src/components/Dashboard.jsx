import { Box, Container, Typography, Grid, Card, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import { PieChart } from '@mui/x-charts/PieChart';

const Dashboard = () => {
  const salesData = [
    { month: 'Ene', ventas: 45000 },
    { month: 'Feb', ventas: 52000 },
    { month: 'Mar', ventas: 48000 },
    { month: 'Abr', ventas: 61000 },
    { month: 'May', ventas: 55000 },
    { month: 'Jun', ventas: 67000 },
  ];

  const storesData = [
    { label: 'Tienda Centro', value: 35, color: '#04346b' },
    { label: 'Tienda Norte', value: 28, color: '#0d47a1' },
    { label: 'Tienda Sur', value: 22, color: '#1976d2' },
    { label: 'Tienda Este', value: 15, color: '#42a5f5' },
  ];

  const inventoryData = [
    { day: 'Lun', stock: 1200 },
    { day: 'Mar', stock: 1150 },
    { day: 'Mié', stock: 1100 },
    { day: 'Jue', stock: 1180 },
    { day: 'Vie', stock: 1220 },
    { day: 'Sáb', stock: 1050 },
    { day: 'Dom', stock: 980 },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
                Dashboard con métricas en tiempo real
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', maxWidth: '700px', fontSize: '1.1rem' }}
              >
                Visualiza el rendimiento de tu negocio con reportes y gráficos actualizados
              </Typography>
            </motion.div>
          </Stack>

          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} style={{ height: '100%' }}>
                <Card sx={{ bgcolor: 'white', height: '100%' }}>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Ventas Mensuales
                    </Typography>
                    <Box sx={{ width: '100%', height: 300 }}>
                      <BarChart
                        dataset={salesData}
                        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                        series={[
                          {
                            dataKey: 'ventas',
                            label: 'Ventas ($)',
                            color: '#04346b',
                          },
                        ]}
                        height={300}
                      />
                    </Box>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={4}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} style={{ height: '100%' }}>
                <Card sx={{ bgcolor: 'white', height: '100%' }}>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Ventas por Tienda
                    </Typography>
                    <Box sx={{ width: '100%', height: 300, display: 'flex', justifyContent: 'center' }}>
                      <PieChart
                        series={[
                          {
                            data: storesData,
                            highlightScope: { faded: 'global', highlighted: 'item' },
                          },
                        ]}
                        height={300}
                        slotProps={{
                          legend: { hidden: true },
                        }}
                      />
                    </Box>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
                <Card sx={{ bgcolor: 'white' }}>
                  <Stack spacing={2}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Movimiento de Inventario
                    </Typography>
                    <Box sx={{ width: '100%', height: 300 }}>
                      <LineChart
                        dataset={inventoryData}
                        xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
                        series={[
                          {
                            dataKey: 'stock',
                            label: 'Productos en Stock',
                            color: '#04346b',
                            curve: 'natural',
                          },
                        ]}
                        height={300}
                      />
                    </Box>
                  </Stack>
                </Card>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.3 }}>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'primary.main',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    4
                  </Typography>
                  <Typography variant="body1">Tiendas Activas</Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.4 }}>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'primary.main',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    $67K
                  </Typography>
                  <Typography variant="body1">Ventas del Mes</Typography>
                </Paper>
              </motion.div>
            </Grid>

            <Grid item xs={12} sm={4}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 }}>
                <Paper
                  sx={{
                    p: 3,
                    bgcolor: 'primary.main',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 600, mb: 1 }}>
                    980
                  </Typography>
                  <Typography variant="body1">Productos en Stock</Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
