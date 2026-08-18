import { Box, Container, Typography, Stack, Button, Grid, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import Check from '@mui/icons-material/Check';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Star from '@mui/icons-material/Star';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { cardGridItem, ctaButtonSx, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { plans } from '../../data/plans';

const Pricing = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <>
      <Box id="pricing" sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <SectionHeader
            overline="Precios"
            title="Elige el plan perfecto para tu negocio"
            subtitle="Elige el plan que mejor se adapte a tu etapa de crecimiento. Sin costos ocultos. Cancela cuando quieras."
            sx={{ mb: 6 }}
          />

          <Grid container spacing={3} justifyContent="center">
            {plans.map((plan, i) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={i}>
                <motion.div
                  {...cardGridItem}
                  transition={{ delay: i * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Box sx={{
                    p: 4, height: '100%', borderRadius: 4,
                    border: '2px solid',
                    borderColor: plan.popular ? 'primary.main' : 'divider',
                    position: 'relative', overflow: 'hidden',
                    display: 'flex', flexDirection: 'column',
                    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: plan.popular ? '0 20px 50px rgba(4,52,107,0.2)' : '0 15px 40px rgba(0,0,0,0.08)',
                      borderColor: plan.popular ? 'secondary.main' : 'primary.main',
                    },
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

                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>{plan.name}</Typography>
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
                        ...ctaButtonSx,
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
    </>
  );
};

export default Pricing;
