'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp, sectionPadding } from '../../constants';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Inventory from '@mui/icons-material/Inventory';
import Storefront from '@mui/icons-material/Storefront';

const pillars = [
  { icon: <PointOfSale />, title: 'Ventas', desc: 'Registra ventas de forma rápida y sencilla.' },
  { icon: <Inventory />, title: 'Inventario', desc: 'Controla lo que tienes en cada ubicación.' },
  { icon: <Storefront />, title: 'Sucursales', desc: 'Administra todas tus tiendas desde un solo lugar.' },
];

const ValueProp = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.6rem' }, maxWidth: 600 }}
          >
            Controla tu negocio desde un solo lugar
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', maxWidth: 520, lineHeight: 1.75 }}>
            Vende, controla tu inventario y administra tus sucursales desde una misma plataforma. Sin instalar nada.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {pillars.map((p, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Stack spacing={1.5} alignItems="center" textAlign="center">
                <Box sx={{
                  width: 52, height: 52, borderRadius: 3,
                  bgcolor: 'rgba(4,120,87,0.08)', color: '#047857',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 26 },
                }}>
                  {p.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>{p.title}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.92rem', lineHeight: 1.65 }}>{p.desc}</Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ValueProp;
