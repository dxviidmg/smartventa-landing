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
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center" direction="row-reverse">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeUp}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Adiós calculadora
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.15 }}>
                Vende como lo haces ahora
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 460 }}>
                Cliente: "250 gramos" o "$20 de jamón"
                <br />
                SmartVenta lo calcula automáticamente.
                <br />
                <br />
                Sin confusiones. Sin retrasos.
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
