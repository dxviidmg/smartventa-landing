import { Box, Container, Typography, Stack, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Check, ArrowForward, Star } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const plans = [
  {
    name: 'Paquete Emprende',
    price: '$500 MXN',
    period: '/mes',
    desc: 'Ideal para 1 tienda que necesita poner orden.',
    features: ['1 Sucursal incluida', 'Inventario básico'],
    cta: 'Comenzar Básico',
    popular: false,
  },
  {
    name: 'Empresarial',
    price: '$2500 MXN',
    period: '/mes',
    desc: 'Para negocios en expansión con múltiples locales.',
    features: ['8 Sucursales (tiendas o almacenes)', 'Inventario avanzado & transferencias', 'Soporte prioritario'],
    cta: 'Comprar',
    popular: true,
  },

];

const Pricing = () => (
  <Box id="pricing" sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="md">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Precios
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Precios simples, sin sorpresas
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 450 }}>
            Elige el plan que mejor se adapte a tu etapa de crecimiento.
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3} justifyContent="center">
        {plans.map((plan, i) => (
          <Grid size={{ xs: 12, sm: 6 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <Box sx={{
                p: 4, height: '100%', borderRadius: 4,
                border: '2px solid',
                borderColor: plan.popular ? 'primary.main' : 'divider',
                position: 'relative', overflow: 'hidden',
                display: 'flex', flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': { boxShadow: plan.popular ? '0 12px 40px rgba(4,52,107,0.15)' : '0 8px 30px rgba(0,0,0,0.06)' },
              }}>
                {plan.popular && (
                  <>
                    <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, bgcolor: 'secondary.main' }} />
                    <Chip
                      icon={<Star sx={{ fontSize: 14 }} />}
                      label="Más Popular"
                      size="small"
                      sx={{
                        position: 'absolute', top: 16, right: 16,
                        bgcolor: 'primary.main', color: 'white',
                        fontWeight: 600, fontSize: '0.7rem',
                        '& .MuiChip-icon': { color: '#fbbf24' },
                      }}
                    />
                  </>
                )}

                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{plan.name}</Typography>
                <Stack direction="row" alignItems="baseline" spacing={0.5} sx={{ mb: 1 }}>
                  <Typography sx={{ fontWeight: 800, fontSize: '3rem', lineHeight: 1 }}>{plan.price}</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>{plan.period}</Typography>
                </Stack>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>{plan.desc}</Typography>

                <Stack spacing={1.5} sx={{ flex: 1, mb: 3 }}>
                  {plan.features.map((f, j) => (
                    <Stack key={j} direction="row" spacing={1.5} alignItems="center">
                      <Check sx={{ color: 'secondary.main', fontSize: 18 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>{f}</Typography>
                    </Stack>
                  ))}
                </Stack>

                <Button
                  variant={plan.popular ? 'contained' : 'outlined'}
                  size="large"
                  fullWidth
                  endIcon={<ArrowForward />}
                  onClick={() => openWhatsApp(`Hola, me interesa el plan ${plan.name} de SmartVenta`)}
                  sx={plan.popular ? {
                    bgcolor: '#10b981', color: '#fff',
                    '&:hover': { bgcolor: '#059669' },
                    boxShadow: '0 4px 20px rgba(16,185,129,0.3)',
                  } : {
                    borderColor: 'divider', color: 'text.primary',
                    '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(4,52,107,0.04)' },
                  }}
                >
                  {plan.cta}
                </Button>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Pricing;
