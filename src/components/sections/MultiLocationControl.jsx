'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import { sectionPadding, fadeUp } from '../../constants';

const locations = [
  {
    type: 'Tienda',
    name: 'Tienda Centro',
    icon: StorefrontOutlined,
    ventas: { monto: '$3,450', numero: 47 },
    inversion: '$48,500',
    apartados: { numero: 8 },
    caja: '$2,890',
  },
  {
    type: 'Tienda',
    name: 'Tienda Sur',
    icon: StorefrontOutlined,
    ventas: { monto: '$2,650', numero: 34 },
    inversion: '$52,200',
    apartados: { numero: 5 },
    caja: '$2,100',
  },
  {
    type: 'Almacén',
    name: 'Almacén Principal',
    icon: InventoryIcon,
    ventas: 'NA',
    inversion: '$125,800',
    apartados: 'NA',
    caja: 'NA',
  },
  {
    type: 'Almacén',
    name: 'Almacén Sur',
    icon: InventoryIcon,
    ventas: 'NA',
    inversion: '$97,500',
    apartados: 'NA',
    caja: 'NA',
  },
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

<Grid container spacing={2} sx={{ mt: 6 }}>
        {locations.map((loc, i) => (
          <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Box sx={{
                p: 2.5,
                borderRadius: 2.5,
                bgcolor: '#ffffff',
                border: '1px solid #e5e7eb',
                textAlign: 'center',
                transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                '&:hover': {
                  borderColor: '#065a9e',
                  transform: 'translateY(-6px)',
                  boxShadow: '0 12px 24px rgba(6, 90, 158, 0.15)',
                },
              }}>
                <Box sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: loc.type === 'Tienda' ? '#e8f1fb' : 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <loc.icon sx={{
                    fontSize: 28,
                    color: loc.type === 'Tienda' ? '#04346b' : '#3b82f6',
                  }} />
                </Box>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', fontWeight: 600, mb: 0.5, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                  {loc.type}
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', mb: 1.5 }}>
                  {loc.name}
                </Typography>

                <Stack spacing={0.75} sx={{ textAlign: 'left' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Ventas</Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: typeof loc.ventas === 'string' ? 'text.secondary' : '#047857' }}>
                      {typeof loc.ventas === 'string' ? loc.ventas : loc.ventas.monto}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Inversión</Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: '#3b82f6' }}>
                      {loc.inversion}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Apartados</Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: typeof loc.apartados === 'string' ? 'text.secondary' : '#f59e0b' }}>
                      {typeof loc.apartados === 'string' ? loc.apartados : `${loc.apartados.numero} items`}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>Caja</Typography>
                    <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: typeof loc.caja === 'string' && loc.caja === 'NA' ? 'text.secondary' : '#8b5cf6' }}>
                      {loc.caja}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

    </Container>
  </Box>
);

export default MultiLocationControl;
