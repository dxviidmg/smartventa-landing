import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Store, Construction, ShoppingCart, MenuBook, Spa, Pets, Toys, Cake } from '@mui/icons-material';

const Industries = () => {
  const industries = [
    {
      icon: <ShoppingCart sx={{ fontSize: 60 }} />,
      title: 'Abarrotes',
      description: 'Gestiona tu inventario de productos de consumo diario con facilidad',
    },
    {
      icon: <Construction sx={{ fontSize: 60 }} />,
      title: 'Ferreterías',
      description: 'Controla herramientas y materiales con códigos de barras',
    },
    {
      icon: <Store sx={{ fontSize: 60 }} />,
      title: 'Mini Supermercados',
      description: 'Optimiza la operación de tus tiendas de conveniencia',
    },
    {
      icon: <MenuBook sx={{ fontSize: 60 }} />,
      title: 'Papelerías',
      description: 'Administra útiles escolares y artículos de oficina eficientemente',
    },
    {
      icon: <Spa sx={{ fontSize: 60 }} />,
      title: 'Perfumerías y Cosméticos',
      description: 'Controla productos de belleza, maquillaje y cuidado personal',
    },
    {
      icon: <Pets sx={{ fontSize: 60 }} />,
      title: 'Tiendas de Mascotas',
      description: 'Gestiona alimentos y accesorios para mascotas',
    },
    {
      icon: <Toys sx={{ fontSize: 60 }} />,
      title: 'Jugueterías',
      description: 'Administra juguetes y artículos infantiles en todas tus sucursales',
    },
    {
      icon: <Cake sx={{ fontSize: 60 }} />,
      title: 'Dulcerías',
      description: 'Controla dulces, chocolates y snacks con facilidad',
    },
    {
      icon: <Store sx={{ fontSize: 60 }} />,
      title: 'Y muchos más...',
      description: 'Smartventa se adapta a cualquier negocio retail con múltiples sucursales',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#1976d2' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white' }}>
                Ideal para tu tipo de negocio
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', maxWidth: '700px', fontSize: '1.1rem' }}>
                Smartventa se adapta perfectamente a diferentes industrias retail
              </Typography>
            </motion.div>
          </Stack>

          <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent="center">
            {industries.map((industry, index) => (
              <Grid item size={{ xs: 4, sm: 4, md: 4 }} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      textAlign: 'center',
                      borderRadius: 3,
                      boxShadow: 2,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 6,
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <motion.div
                      animate={{ color: ['#04346b', '#1976d2', '#04346b'] }}
                      transition={{ duration: 4, delay: index * 0.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {industry.icon}
                    </motion.div>
                    <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 1, color: 'text.primary' }}>
                      {industry.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {industry.description}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Industries;
