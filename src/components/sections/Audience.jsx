'use client';

import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, cardGridItem } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import Storefront from '@mui/icons-material/Storefront';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Store from '@mui/icons-material/Store';
import Business from '@mui/icons-material/Business';

const profiles = [
  {
    icon: <Storefront />,
    title: 'Tiendas con una sucursal',
    desc: 'Empieza con un punto de venta completo. Cuando abras otra tienda, ya tienes todo listo.',
  },
  {
    icon: <Business />,
    title: 'Negocios con varias sucursales',
    desc: 'Centraliza la operación de todas tus tiendas y almacenes. Un catálogo, un sistema.',
  },
  {
    icon: <Store />,
    title: 'Comercios minoristas',
    desc: 'Ropa, abarrotes, ferreterías, farmacias, papelerías. Diseñado para el día a día del retail.',
  },
  {
    icon: <TrendingUp />,
    title: 'Negocios en crecimiento',
    desc: 'Si estás abriendo más ubicaciones, SmartVenta crece contigo sin complicar la operación.',
  },
];

const Audience = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <SectionHeader
        overline="¿Para quién es?"
        title="Pensado para negocios que están creciendo"
        sx={{ mb: 6 }}
      />

      <Grid container spacing={3}>
        {profiles.map((p, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ height: '100%' }}
            >
              <Stack
                spacing={2}
                sx={{
                  p: 3, height: '100%', borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider',
                  transition: 'border-color 0.25s ease',
                  '&:hover': { borderColor: 'primary.light' },
                }}
              >
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(4,52,107,0.06)', color: 'primary.main',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 22 },
                }}>
                  {p.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.95rem' }}>{p.title}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.88rem', lineHeight: 1.65 }}>{p.desc}</Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Audience;
