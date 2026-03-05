import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';
import WarehouseIcon from '@mui/icons-material/Warehouse';

const benefits = [
  {
    icon: StorefrontIcon,
    title: 'Para Tiendas Pequeñas',
    items: ['Fácil de usar', 'Sin complicaciones', 'Precio accesible', 'Soporte dedicado']
  },
  {
    icon: BusinessIcon,
    title: 'Para Cadenas de Tiendas',
    items: ['Control centralizado', 'Múltiples sucursales', 'Reportes consolidados', 'Escalable']
  },
  {
    icon: WarehouseIcon,
    title: 'Para Almacenes',
    items: ['Gestión de inventario', 'Control de stock', 'Traspasos eficientes', 'Auditoría completa']
  },
];

export default function Benefits() {
  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 6, fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
          Diseñado para tu Negocio
        </Typography>
        <Grid container spacing={4}>
          {benefits.map((benefit, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper elevation={3} sx={{ p: 4, height: '100%', textAlign: 'center' }}>
                  <benefit.icon sx={{ fontSize: 64, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
                    {benefit.title}
                  </Typography>
                  <Stack spacing={1.5}>
                    {benefit.items.map((item, j) => (
                      <Typography key={j} variant="body1" color="text.secondary">
                        ✓ {item}
                      </Typography>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
