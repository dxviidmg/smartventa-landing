import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const plans = [
  {
    name: 'Básico',
    price: '$29',
    period: '/mes',
    features: ['1 Tienda', 'Hasta 500 productos', 'Ventas ilimitadas', 'Soporte por email', 'Reportes básicos'],
    popular: false
  },
  {
    name: 'Profesional',
    price: '$79',
    period: '/mes',
    features: ['Hasta 5 Tiendas', 'Productos ilimitados', 'Ventas ilimitadas', 'Soporte prioritario', 'Reportes avanzados', 'Traspasos entre tiendas'],
    popular: true
  },
  {
    name: 'Empresarial',
    price: '$149',
    period: '/mes',
    features: ['Tiendas ilimitadas', 'Productos ilimitados', 'Ventas ilimitadas', 'Soporte 24/7', 'Reportes personalizados', 'API completa', 'Capacitación incluida'],
    popular: false
  },
];

export default function Pricing() {
  return (
    <Box sx={{ py: 10, bgcolor: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
          Planes y Precios
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Elige el plan perfecto para tu negocio
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Card 
                  elevation={plan.popular ? 8 : 2}
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    border: plan.popular ? '3px solid #04346b' : 'none',
                    transform: plan.popular ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  {plan.popular && (
                    <Chip 
                      label="Más Popular" 
                      color="primary" 
                      sx={{ position: 'absolute', top: 16, right: 16 }}
                    />
                  )}
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
                      {plan.name}
                    </Typography>
                    <Stack direction="row" alignItems="baseline" sx={{ mb: 3 }}>
                      <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.main' }}>
                        {plan.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        {plan.period}
                      </Typography>
                    </Stack>
                    <Stack spacing={2} sx={{ mb: 4 }}>
                      {plan.features.map((feature, j) => (
                        <Stack direction="row" spacing={1} key={j}>
                          <CheckCircleIcon sx={{ color: 'primary.main', fontSize: 20 }} />
                          <Typography variant="body2">{feature}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                    <Button 
                      variant={plan.popular ? 'contained' : 'outlined'}
                      fullWidth
                      size="large"
                    >
                      Comenzar Ahora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
