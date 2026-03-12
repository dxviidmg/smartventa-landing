import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Inventory2, Store, PointOfSale, Assessment } from '@mui/icons-material';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: <Inventory2 sx={{ fontSize: 48 }} />,
      title: 'Configura tu catálogo',
      description: 'Añade tus productos con precios, categorías y códigos de barras. Importa masivamente desde Excel.',
    },
    {
      number: '2',
      icon: <Store sx={{ fontSize: 48 }} />,
      title: 'Distribuye a tus tiendas',
      description: 'Asigna inventario a cada sucursal y almacén. Realiza transferencias entre ubicaciones fácilmente.',
    },
    {
      number: '3',
      icon: <PointOfSale sx={{ fontSize: 48 }} />,
      title: 'Vende con agilidad',
      description: 'Procesa ventas rápidamente con el punto de venta. El inventario se actualiza al instante.',
    },
    {
      number: '4',
      icon: <Assessment sx={{ fontSize: 48 }} />,
      title: 'Analiza y optimiza',
      description: 'Revisa reportes y métricas para tomar decisiones informadas y mejorar tu negocio.',
    },
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'text.primary' }}>
                ¿Cómo funciona Smartventa?
              </Typography>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '700px', fontSize: '1.1rem' }}>
                Cuatro pasos simples para transformar la gestión de tu negocio multi-tienda
              </Typography>
            </motion.div>
          </Stack>

          <Stack spacing={4}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Paper
                  sx={{
                    p: 4,
                    borderRadius: 3,
                    boxShadow: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: 6,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center">
                    <Box
                      sx={{
                        minWidth: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: '#ff6b35',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2rem',
                        fontWeight: 700,
                        boxShadow: 3,
                      }}
                    >
                      {step.number}
                    </Box>
                    <motion.div
                      animate={{ color: ['#ff6b35', '#ff8c42', '#ff6b35'] }}
                      transition={{ duration: 4, delay: index * 0.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {step.icon}
                    </motion.div>
                    <Stack spacing={1} sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'text.primary' }}>
                        {step.title}
                      </Typography>
                      <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                        {step.description}
                      </Typography>
                    </Stack>
                  </Stack>
                </Paper>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default HowItWorks;
