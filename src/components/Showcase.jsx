import { Box, Container, Typography, Grid, Stack, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { BarChart } from '@mui/x-charts/BarChart';
import { PieChart } from '@mui/x-charts/PieChart';
const salesData = [
  { month: 'Ene', ventas: 45200 },
  { month: 'Feb', ventas: 52800 },
  { month: 'Mar', ventas: 48100 },
  { month: 'Abr', ventas: 61400 },
  { month: 'May', ventas: 55900 },
  { month: 'Jun', ventas: 67300 },
];

const storesData = [
  { label: 'Centro', value: 35, color: '#04346b' },
  { label: 'Norte', value: 28, color: '#1565c0' },
  { label: 'Sur', value: 22, color: '#42a5f5' },
  { label: 'Este', value: 15, color: '#90caf9' },
];

const posItems = [
  { name: 'Shampoo Pantene 400ml', qty: 2, price: 89.90 },
  { name: 'Jabón Dove 135g', qty: 3, price: 32.50 },
  { name: 'Pasta Colgate 150ml', qty: 1, price: 45.00 },
  { name: 'Desodorante Old Spice', qty: 1, price: 78.00 },
];

const inventoryRows = [
  { product: 'Shampoo Pantene 400ml', centro: 45, norte: 32, sur: 28, almacen: 120 },
  { product: 'Jabón Dove 135g', centro: 80, norte: 65, sur: 72, almacen: 200 },
  { product: 'Pasta Colgate 150ml', centro: 55, norte: 40, sur: 38, almacen: 150 },
  { product: 'Desodorante Old Spice', centro: 22, norte: 18, sur: 15, almacen: 90 },
];

const MockCard = ({ title, children, chip }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3, borderRadius: 4, height: '100%',
        bgcolor: '#fff',
        border: '1px solid', borderColor: 'divider',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>{title}</Typography>
        {chip && <Chip label={chip} size="small" color="success" variant="outlined" />}
      </Stack>
      {children}
    </Paper>
  );
};

const Showcase = () => (
  <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Interfaz
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Diseñado para ser simple y poderoso
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
              Una interfaz limpia que tu equipo puede aprender en minutos.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={3}>
          {/* Dashboard */}
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ height: '100%' }}>
              <MockCard title="Dashboard — Ventas Mensuales" chip="Tiempo real">
                <Box sx={{ width: '100%', height: 280 }}>
                  <BarChart
                    dataset={salesData}
                    xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                    series={[{ dataKey: 'ventas', label: 'Ventas ($)', color: '#04346b' }]}
                    height={280}
                    slotProps={{ legend: { hidden: true } }}
                  />
                </Box>
              </MockCard>
            </motion.div>
          </Grid>

          {/* Pie chart */}
          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ height: '100%' }}>
              <MockCard title="Ventas por Tienda">
                <Box sx={{ width: '100%', height: 280, display: 'flex', justifyContent: 'center' }}>
                  <PieChart
                    series={[{ data: storesData, highlightScope: { faded: 'global', highlighted: 'item' } }]}
                    height={280}
                    slotProps={{ legend: { hidden: true } }}
                  />
                </Box>
              </MockCard>
            </motion.div>
          </Grid>

          {/* POS */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} style={{ height: '100%' }}>
              <MockCard title="Punto de Venta" chip="POS">
                <Stack spacing={1}>
                  {posItems.map((item, i) => (
                    <Stack key={i} direction="row" justifyContent="space-between" alignItems="center"
                      sx={{ py: 1, px: 1.5, borderRadius: 2, bgcolor: 'action.hover' }}
                    >
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>{item.name}</Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>Cant: {item.qty}</Typography>
                      </Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        ${(item.qty * item.price).toFixed(2)}
                      </Typography>
                    </Stack>
                  ))}
                  <Stack direction="row" justifyContent="space-between" sx={{ pt: 2, borderTop: '2px solid', borderColor: 'divider' }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>Total</Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      ${posItems.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2)}
                    </Typography>
                  </Stack>
                </Stack>
              </MockCard>
            </motion.div>
          </Grid>

          {/* Inventory */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ height: '100%' }}>
              <MockCard title="Inventario Multi-Tienda" chip="Sincronizado">
                <Box sx={{ overflowX: 'auto' }}>
                  <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse', '& th, & td': { py: 1.2, px: 1.5, textAlign: 'left', fontSize: '0.8rem' }, '& th': { color: 'text.secondary', fontWeight: 600, borderBottom: '1px solid', borderColor: 'divider' }, '& td': { borderBottom: '1px solid', borderColor: 'divider' } }}>
                    <thead>
                      <tr>
                        <th>Producto</th>
                        <th>Centro</th>
                        <th>Norte</th>
                        <th>Sur</th>
                        <th>Almacén</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventoryRows.map((row, i) => (
                        <tr key={i}>
                          <td><Typography variant="body2" sx={{ fontWeight: 500 }}>{row.product}</Typography></td>
                          <td>{row.centro}</td>
                          <td>{row.norte}</td>
                          <td>{row.sur}</td>
                          <td><Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main' }}>{row.almacen}</Typography></td>
                        </tr>
                      ))}
                    </tbody>
                  </Box>
                </Box>
              </MockCard>
            </motion.div>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default Showcase;
