'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const locations = [
  { type: 'Tienda', name: 'Tienda Centro', metrics: 'Ventas hoy: $2,450' },
  { type: 'Tienda', name: 'Tienda Sur', metrics: 'Ventas hoy: $1,890' },
  { type: 'Tienda', name: 'Tienda Norte', metrics: 'Ventas hoy: $3,120' },
  { type: 'Almacén', name: 'Almacén Principal', metrics: 'Stock: 450 ítems' },
];

const chartData = [
  { day: 1, 'Tienda Centro': 2200, 'Tienda Sur': 1600, 'Tienda Norte': 2800 },
  { day: 2, 'Tienda Centro': 2400, 'Tienda Sur': 1800, 'Tienda Norte': 3000 },
  { day: 3, 'Tienda Centro': 2100, 'Tienda Sur': 1700, 'Tienda Norte': 2900 },
  { day: 4, 'Tienda Centro': 2600, 'Tienda Sur': 1900, 'Tienda Norte': 3200 },
  { day: 5, 'Tienda Centro': 2450, 'Tienda Sur': 1890, 'Tienda Norte': 3120 },
  { day: 6, 'Tienda Centro': 2800, 'Tienda Sur': 2100, 'Tienda Norte': 3400 },
  { day: 7, 'Tienda Centro': 3000, 'Tienda Sur': 2300, 'Tienda Norte': 3600 },
  { day: 8, 'Tienda Centro': 2300, 'Tienda Sur': 1700, 'Tienda Norte': 2700 },
  { day: 9, 'Tienda Centro': 2500, 'Tienda Sur': 1950, 'Tienda Norte': 3050 },
  { day: 10, 'Tienda Centro': 2700, 'Tienda Sur': 2050, 'Tienda Norte': 3250 },
  { day: 11, 'Tienda Centro': 2900, 'Tienda Sur': 2200, 'Tienda Norte': 3400 },
  { day: 12, 'Tienda Centro': 3100, 'Tienda Sur': 2400, 'Tienda Norte': 3700 },
  { day: 13, 'Tienda Centro': 2600, 'Tienda Sur': 1950, 'Tienda Norte': 3150 },
  { day: 14, 'Tienda Centro': 2400, 'Tienda Sur': 1850, 'Tienda Norte': 2950 },
  { day: 15, 'Tienda Centro': 2800, 'Tienda Sur': 2150, 'Tienda Norte': 3300 },
  { day: 16, 'Tienda Centro': 2700, 'Tienda Sur': 2050, 'Tienda Norte': 3200 },
  { day: 17, 'Tienda Centro': 2500, 'Tienda Sur': 1900, 'Tienda Norte': 3000 },
  { day: 18, 'Tienda Centro': 2900, 'Tienda Sur': 2250, 'Tienda Norte': 3450 },
  { day: 19, 'Tienda Centro': 3100, 'Tienda Sur': 2400, 'Tienda Norte': 3700 },
  { day: 20, 'Tienda Centro': 3200, 'Tienda Sur': 2500, 'Tienda Norte': 3800 },
  { day: 21, 'Tienda Centro': 2800, 'Tienda Sur': 2150, 'Tienda Norte': 3300 },
  { day: 22, 'Tienda Centro': 2600, 'Tienda Sur': 2000, 'Tienda Norte': 3150 },
  { day: 23, 'Tienda Centro': 2700, 'Tienda Sur': 2050, 'Tienda Norte': 3200 },
  { day: 24, 'Tienda Centro': 2900, 'Tienda Sur': 2200, 'Tienda Norte': 3400 },
  { day: 25, 'Tienda Centro': 3100, 'Tienda Sur': 2400, 'Tienda Norte': 3700 },
  { day: 26, 'Tienda Centro': 3300, 'Tienda Sur': 2600, 'Tienda Norte': 3900 },
  { day: 27, 'Tienda Centro': 3200, 'Tienda Sur': 2500, 'Tienda Norte': 3800 },
  { day: 28, 'Tienda Centro': 2900, 'Tienda Sur': 2250, 'Tienda Norte': 3450 },
  { day: 29, 'Tienda Centro': 2700, 'Tienda Sur': 2100, 'Tienda Norte': 3250 },
  { day: 30, 'Tienda Centro': 2800, 'Tienda Sur': 2150, 'Tienda Norte': 3300 },
  { day: 31, 'Tienda Centro': 3000, 'Tienda Sur': 2300, 'Tienda Norte': 3600 },
];

const MultiLocationControl = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }} id="multilocal">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 8, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            Todas tus sucursales, un solo lugar
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
            Ves el estado de cada tienda y almacén en tiempo real. Sin llamadas. Sin esperas.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={2} sx={{ mb: 8 }}>
        {locations.map((loc, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Box sx={{
                p: 2.5, borderRadius: 2.5,
                bgcolor: 'background.default',
                border: '1px solid',
                borderColor: 'divider',
                textAlign: 'center',
              }}>
                <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary', fontWeight: 600, mb: 0.5 }}>
                  {loc.type}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary', mb: 1 }}>
                  {loc.name}
                </Typography>
                <Typography sx={{ fontSize: '0.85rem', color: '#047857', fontWeight: 600 }}>
                  {loc.metrics}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <motion.div {...fadeUp}>
        <Box sx={{
          p: 3,
          borderRadius: 2.5,
          bgcolor: 'background.default',
          border: '1px solid',
          borderColor: 'divider',
        }}>
          <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'text.primary', mb: 2 }}>
            Ventas por día del mes
          </Typography>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="day" stroke="text.secondary" />
              <YAxis stroke="text.secondary" />
              <Tooltip contentStyle={{ bgcolor: 'rgba(0,0,0,0.8)', border: 'none', borderRadius: '8px', color: 'white' }} />
              <Legend />
              <Line type="monotone" dataKey="Tienda Centro" stroke="#022347" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Tienda Sur" stroke="#047857" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="Tienda Norte" stroke="#065a9e" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Box>
      </motion.div>

    </Container>
  </Box>
);

export default MultiLocationControl;
