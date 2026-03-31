import { Box, Container, Typography, Grid, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const mockSales = [
  { store: 'Sucursal Centro', today: '$12,450', status: 'up' },
  { store: 'Sucursal Norte', today: '$8,320', status: 'up' },
  { store: 'Almacén Principal', today: '—', status: 'neutral' },
];

const mockProducts = [
  { name: 'Camiseta básica', stock: 142, stores: 3 },
  { name: 'Pantalón slim', stock: 87, stores: 2 },
  { name: 'Zapatos casual', stock: 34, stores: 3 },
];

const DashboardPreview = () => (
  <Box id="dashboard-preview" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Así se ve por dentro
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
            Información clara, decisiones rápidas
          </Typography>
        </motion.div>
      </Stack>

      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
        <Box sx={{
          borderRadius: 4, overflow: 'hidden',
          border: '1px solid', borderColor: 'divider',
          bgcolor: '#0f172a', p: { xs: 2, md: 4 },
          boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
        }}>
          {/* Top bar */}
          <Stack direction="row" spacing={1} sx={{ mb: 3 }}>
            {['#ef4444', '#f59e0b', '#10b981'].map((c) => (
              <Box key={c} sx={{ width: 12, height: 12, borderRadius: '50%', bgcolor: c }} />
            ))}
            <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', ml: 2 }}>
              app.smartventa.com/dashboard
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {/* KPI cards */}
            <Grid size={{ xs: 12 }}>
              <Grid container spacing={2}>
                {[
                  { label: 'Ventas hoy', value: '$20,770', change: '+12%' },
                  { label: 'Productos activos', value: '1,247', change: '' },
                  { label: 'Sucursales', value: '3', change: '' },
                  { label: 'Ticket promedio', value: '$385', change: '+5%' },
                ].map((kpi, i) => (
                  <Grid size={{ xs: 6, md: 3 }} key={i}>
                    <Box sx={{ p: 2.5, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                      <Typography sx={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem', mb: 0.5 }}>{kpi.label}</Typography>
                      <Stack direction="row" spacing={1} alignItems="baseline">
                        <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.3rem' }}>{kpi.value}</Typography>
                        {kpi.change && (
                          <Typography sx={{ color: '#34d399', fontSize: '0.75rem', fontWeight: 600 }}>{kpi.change}</Typography>
                        )}
                      </Stack>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Sales by store */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, mb: 2 }}>
                  Ventas por sucursal
                </Typography>
                <Stack spacing={2}>
                  {mockSales.map((s, i) => (
                    <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ['#3b82f6', '#8b5cf6', '#f59e0b'][i] }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>{s.store}</Typography>
                      </Stack>
                      <Typography sx={{ color: 'white', fontWeight: 600, fontSize: '0.9rem' }}>{s.today}</Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Top products */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 3, borderRadius: 3, bgcolor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 600, mb: 2 }}>
                  Inventario destacado
                </Typography>
                <Stack spacing={2}>
                  {mockProducts.map((p, i) => (
                    <Stack key={i} direction="row" justifyContent="space-between" alignItems="center">
                      <Typography sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>{p.name}</Typography>
                      <Stack direction="row" spacing={1.5} alignItems="center">
                        <Chip label={`${p.stock} uds`} size="small" sx={{ bgcolor: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', height: 24 }} />
                        <Typography sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{p.stores} tiendas</Typography>
                      </Stack>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </motion.div>
    </Container>
  </Box>
);

export default DashboardPreview;
