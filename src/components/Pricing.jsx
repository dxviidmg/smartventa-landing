import { Box, Container, Typography, Grid, Card, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Store, Warehouse, Check } from '@mui/icons-material';

const Pricing = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const plans = [
    {
      icon: <Store sx={{ fontSize: 60 }} />,
      title: 'Por Tienda',
      price: '$500',
      period: 'MXN/mes',
      features: [
        'Punto de venta completo',
        'Gestión de inventario',
        'Usuarios ilimitados',
        'Actualizaciones incluidas',
      ],
    },
    {
      icon: <Warehouse sx={{ fontSize: 60 }} />,
      title: 'Por Almacén',
      price: '$500',
      period: 'MXN/mes',
      features: [
        'Control de stock',
        'Distribución a tiendas',
        'Usuarios ilimitados',
        'Actualizaciones incluidas',
      ],
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'text.primary' }}>
                Precios transparentes y accesibles
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', fontSize: '1.1rem' }}>
                Paga solo por lo que necesitas. Sin costos ocultos ni contratos largos.
              </Typography>
            </motion.div>
          </Stack>

          <Grid container spacing={4} justifyContent="center">
            {plans.map((plan, index) => (
              <Grid item xs={12} sm={6} md={5} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <Card
                    sx={{
                      p: 4,
                      height: '100%',
                      borderRadius: 3,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        boxShadow: 8,
                        transform: 'translateY(-8px)',
                      },
                    }}
                  >
                    <Stack spacing={3} alignItems="center" textAlign="center">
                      <motion.div
                        animate={{ color: ['#04346b', '#1976d2', '#04346b'] }}
                        transition={{ duration: 4, delay: index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {plan.icon}
                      </motion.div>
                      
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {plan.title}
                      </Typography>

                      <Box>
                        <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                          {plan.price}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                          {plan.period}
                        </Typography>
                      </Box>

                      <Stack spacing={1.5} sx={{ width: '100%', mt: 2 }}>
                        {plan.features.map((feature, i) => (
                          <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                            <Check sx={{ color: 'primary.main', fontSize: 20 }} />
                            <Typography variant="body2" sx={{ color: 'text.secondary', textAlign: 'left' }}>
                              {feature}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Stack>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Stack spacing={3} alignItems="center" textAlign="center">
              <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                💡 <strong>Ejemplo:</strong> 3 tiendas + 1 almacén = $2,000 MXN/mes
              </Typography>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={scrollToContact}
                  sx={{
                    px: 5,
                    py: 2,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                    boxShadow: 3,
                  }}
                >
                  Solicitar demo gratuita
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Pricing;
