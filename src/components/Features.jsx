import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import {
  Inventory2Outlined,
  PointOfSaleOutlined,
  SwapHorizOutlined,
  DashboardOutlined,
  PeopleOutlined,
  HistoryOutlined,
} from '@mui/icons-material';

const Features = () => {
  const features = [
    {
      icon: <Inventory2Outlined sx={{ fontSize: 48 }} />,
      title: 'Inventario en tiempo real',
      description: 'Controla el stock de todas tus sucursales en tiempo real con actualizaciones automáticas.',
    },
    {
      icon: <PointOfSaleOutlined sx={{ fontSize: 48 }} />,
      title: 'Sistema de ventas rápido',
      description: 'Procesa ventas de forma ágil con múltiples métodos de pago e impresión de tickets.',
    },
    {
      icon: <SwapHorizOutlined sx={{ fontSize: 48 }} />,
      title: 'Transferencias entre tiendas',
      description: 'Distribuye inventario entre sucursales de manera eficiente y con trazabilidad completa.',
    },
    {
      icon: <DashboardOutlined sx={{ fontSize: 48 }} />,
      title: 'Dashboard con métricas',
      description: 'Visualiza ventas, inventario y rendimiento de cada tienda desde un solo lugar.',
    },
    {
      icon: <PeopleOutlined sx={{ fontSize: 48 }} />,
      title: 'Gestión de empleados',
      description: 'Administra trabajadores por tienda con roles y permisos personalizados.',
    },
    {
      icon: <HistoryOutlined sx={{ fontSize: 48 }} />,
      title: 'Auditoría de inventario',
      description: 'Logs completos de todos los movimientos de inventario para máxima transparencia.',
    },
  ];

  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Todo lo que necesitas en una sola plataforma
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: '700px', fontSize: '1.1rem' }}
            >
              Smartventa incluye todas las herramientas para gestionar tu negocio multi-tienda
            </Typography>
          </Stack>

          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'white',
                  }}
                >
                  <Stack spacing={2}>
                    <Box sx={{ color: 'primary.main' }}>{feature.icon}</Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
