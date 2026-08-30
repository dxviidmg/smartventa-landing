import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { cardGridItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const steps = [
  {
    num: '01',
    title: 'Vende',
    desc: 'Tu equipo busca el producto, lo agrega al carrito y cobra. Así de simple.',
  },
  {
    num: '02',
    title: 'Controla',
    desc: 'Consulta inventario, movimientos y corte de caja de cualquier tienda.',
  },
  {
    num: '03',
    title: 'Administra',
    desc: 'Métricas, traspasos y decisiones — todo desde un solo lugar.',
  },
];

const HowItWorks = () => (
  <Box
    id="how-it-works"
    sx={{
      ...sectionPadding,
      background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)',
    }}
  >
    <Container maxWidth="md">
      <SectionHeader
        overline="Cómo funciona"
        title="Simple de verdad"
        overlineSx={{ color: '#34d399' }}
        titleSx={{ color: 'white' }}
        sx={{ mb: 8 }}
      />

      <Grid container spacing={3}>
        {steps.map((step, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ height: '100%' }}
            >
              <Stack
                spacing={2}
                sx={{
                  p: 3.5,
                  height: '100%',
                  borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  textAlign: { xs: 'left', md: 'center' },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: '2.5rem',
                    color: '#34d399',
                    lineHeight: 1,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {step.num}
                </Typography>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ fontWeight: 700, color: 'white', fontSize: '1.25rem' }}
                >
                  {step.title}
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {step.desc}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default HowItWorks;
