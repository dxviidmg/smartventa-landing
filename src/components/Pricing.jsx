import { Box, Container, Typography, Grid, Card, CardContent, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const plans = [
  {
    name: 'Básico',
    price: '$29',
    period: '/mes',
    description: 'Perfecto para comenzar',
    features: ['1 Tienda', 'Hasta 500 productos', 'Ventas ilimitadas', 'Soporte por email', 'Reportes básicos'],
    popular: false,
    color: '#3b82f6'
  },
  {
    name: 'Profesional',
    price: '$79',
    period: '/mes',
    description: 'El más elegido por negocios',
    features: ['Hasta 5 Tiendas', 'Productos ilimitados', 'Ventas ilimitadas', 'Soporte prioritario', 'Reportes avanzados', 'Traspasos entre tiendas'],
    popular: true,
    color: '#8b5cf6'
  },
  {
    name: 'Empresarial',
    price: '$149',
    period: '/mes',
    description: 'Para operaciones a gran escala',
    features: ['Tiendas ilimitadas', 'Productos ilimitados', 'Ventas ilimitadas', 'Soporte 24/7', 'Reportes personalizados', 'API completa', 'Capacitación incluida'],
    popular: false,
    color: '#10b981'
  },
];

export default function Pricing() {
  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative background */}
      <Box sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(4, 52, 107, 0.03) 0%, transparent 70%)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="PRECIOS" 
              sx={{ 
                mb: 2,
                bgcolor: '#f0fdf4',
                color: '#10b981',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}
            />
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2,
                fontWeight: 800, 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #04346b 0%, #0066cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Planes Transparentes
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
              Sin costos ocultos. Cancela cuando quieras.
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {plans.map((plan, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{ height: '100%' }}
              >
                <Card 
                  elevation={0}
                  sx={{ 
                    height: '100%',
                    position: 'relative',
                    borderRadius: 4,
                    border: plan.popular ? `3px solid ${plan.color}` : '2px solid #e2e8f0',
                    background: plan.popular 
                      ? `linear-gradient(135deg, ${plan.color}08 0%, white 100%)`
                      : 'white',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    overflow: 'visible',
                    '&:hover': {
                      borderColor: plan.color,
                      boxShadow: `0 25px 70px ${plan.color}25`,
                      transform: 'scale(1.02)',
                    }
                  }}
                >
                  {plan.popular && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 2,
                      }}
                    >
                      <Chip 
                        icon={<StarIcon sx={{ fontSize: 18 }} />}
                        label="Más Popular" 
                        sx={{
                          background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)`,
                          color: 'white',
                          fontWeight: 700,
                          px: 2,
                          boxShadow: `0 8px 24px ${plan.color}40`,
                        }}
                      />
                    </Box>
                  )}

                  <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 1, 
                          fontWeight: 700,
                          color: plan.color
                        }}
                      >
                        {plan.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                        {plan.description}
                      </Typography>
                      <Stack direction="row" alignItems="baseline" justifyContent="center" sx={{ mb: 1 }}>
                        <Typography 
                          variant="h2" 
                          sx={{ 
                            fontWeight: 800, 
                            color: plan.color,
                            fontSize: '3.5rem'
                          }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ ml: 1 }}>
                          {plan.period}
                        </Typography>
                      </Stack>
                      <Typography variant="caption" color="text.secondary">
                        Facturación mensual
                      </Typography>
                    </Box>

                    <Stack spacing={2} sx={{ mb: 4, flexGrow: 1 }}>
                      {plan.features.map((feature, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.15 + j * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <Stack direction="row" spacing={1.5} alignItems="flex-start">
                            <CheckCircleIcon 
                              sx={{ 
                                color: plan.color, 
                                fontSize: 22,
                                mt: 0.2,
                                flexShrink: 0
                              }} 
                            />
                            <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.6 }}>
                              {feature}
                            </Typography>
                          </Stack>
                        </motion.div>
                      ))}
                    </Stack>

                    <Button 
                      variant={plan.popular ? 'contained' : 'outlined'}
                      fullWidth
                      size="large"
                      startIcon={plan.popular ? <RocketLaunchIcon /> : null}
                      sx={{
                        py: 1.5,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1rem',
                        fontWeight: 700,
                        ...(plan.popular ? {
                          background: `linear-gradient(135deg, ${plan.color}, ${plan.color}dd)`,
                          boxShadow: `0 8px 24px ${plan.color}40`,
                          '&:hover': {
                            background: `linear-gradient(135deg, ${plan.color}dd, ${plan.color})`,
                            boxShadow: `0 12px 32px ${plan.color}50`,
                          }
                        } : {
                          borderColor: plan.color,
                          color: plan.color,
                          borderWidth: 2,
                          '&:hover': {
                            borderWidth: 2,
                            borderColor: plan.color,
                            background: `${plan.color}10`,
                          }
                        })
                      }}
                    >
                      {plan.popular ? 'Comenzar Ahora' : 'Seleccionar Plan'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Typography variant="body1" color="text.secondary">
              ¿Necesitas un plan personalizado? <Button sx={{ textTransform: 'none', fontWeight: 700 }}>Contáctanos</Button>
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}
