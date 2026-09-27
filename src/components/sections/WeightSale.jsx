'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const examples = [
  { price: '$200/kg', ask: 'Cliente: "Dame $20"', result: '100 gramos' },
  { price: '$120/kg', ask: 'Cliente: "Quiero 250g"', result: '$30' },
  { price: '$24/kg', ask: 'Cliente: "Medio kilo"', result: '$12' },
];

const CalcCard = () => (
  <Box sx={{
    borderRadius: 3,
    bgcolor: 'background.paper',
    border: '1px solid', borderColor: 'divider',
    boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    maxWidth: 420,
    mx: 'auto',
  }}>
    <Box sx={{ px: 3, py: 2, bgcolor: 'background.default', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>
        Venta por peso
      </Typography>
    </Box>
    <Stack divider={<Box sx={{ borderTop: '1px solid', borderColor: 'divider' }} />}>
      {examples.map((ex) => (
        <Grid container key={ex.price} alignItems="center" sx={{ px: 3, py: 2 }} spacing={1}>
          <Grid size={4}>
            <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Precio</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: 'text.primary' }}>{ex.price}</Typography>
          </Grid>
          <Grid size={5}>
            <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Cliente pide</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: 'text.primary' }}>{ex.ask}</Typography>
          </Grid>
          <Grid size={3} sx={{ textAlign: 'right' }}>
            <Typography sx={{ fontSize: '0.8rem', color: 'text.secondary' }}>Cantidad</Typography>
            <Typography sx={{ fontWeight: 800, fontSize: '1.05rem', color: '#047857' }}>{ex.result}</Typography>
          </Grid>
        </Grid>
      ))}
    </Stack>
  </Box>
);

const WeightSale = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default', py: { xs: 4, md: 5 } }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Stack spacing={1.5}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, letterSpacing: '-0.02em' }}>
              Vende por peso, cantidad o monto
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', maxWidth: 480, mx: 'auto', lineHeight: 1.6 }}>
              Cliente dice "250 gramos" o "$20 de jamón". SmartVenta calcula automáticamente el precio. Sin confusiones. Sin retrasos.
            </Typography>
          </Stack>

          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <CalcCard />
          </Box>
        </Stack>
      </motion.div>
    </Container>
  </Box>
);

export default WeightSale;
