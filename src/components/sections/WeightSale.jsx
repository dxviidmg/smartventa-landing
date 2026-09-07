'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const examples = [
  { price: '$200/kg', ask: 'Cliente pide $20', result: '100 g' },
  { price: '$120/kg', ask: 'Cliente pide 250 g', result: '$30' },
  { price: '$20/pz', ask: 'Cliente pide medio kilo', result: '$40' },
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
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" direction="row-reverse">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeUp}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Venta por peso y granel
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.15 }}>
                Vende por pieza, peso o cantidad
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 460 }}>
                ¿Tu cliente quiere $20 de jamón, 250 gramos de queso o medio kilo de producto?
                Vende exactamente lo que necesita tu cliente y deja que SmartVenta haga el cálculo.
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: 460 }}>
                Maneja unidades como pieza, kilogramo, costal, litro y más. Tú capturas el precio o
                el monto, y el sistema hace la conversión.
              </Typography>
            </Stack>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <CalcCard />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default WeightSale;
