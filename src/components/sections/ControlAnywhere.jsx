'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Inventory2 from '@mui/icons-material/Inventory2';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Storefront from '@mui/icons-material/Storefront';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

const benefits = [
  { icon: <PointOfSale />, title: 'Ventas', desc: 'Consulta qué vende cada sucursal y quién está vendiendo.', accent: '#0ea5e9' },
  { icon: <Inventory2 />, title: 'Inventario', desc: 'Conoce qué productos tienes y dónde están.', accent: '#14b8a6' },
  { icon: <AccountBalance />, title: 'Caja', desc: 'Revisa ventas, movimientos y cortes de caja.', accent: '#10b981' },
  { icon: <Storefront />, title: 'Sucursales', desc: 'Administra varias ubicaciones desde un solo sistema.', accent: '#6366f1' },
];

const ControlAnywhere = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }} id="control">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 5, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Control total
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.9rem', md: '2.6rem' }, lineHeight: 1.15 }}>
            Controla tu negocio estés donde estés
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
            No necesitas estar físicamente en cada sucursal para saber qué está pasando. SmartVenta
            centraliza la información de tu negocio para que puedas consultar ventas, inventario,
            caja y movimientos desde un solo lugar.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={2.5}>
        {benefits.map((b, i) => (
          <Grid key={b.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ height: '100%' }}
            >
              <Stack
                spacing={1.5}
                sx={{
                  height: '100%',
                  p: 3,
                  borderRadius: 3,
                  bgcolor: 'background.default',
                  border: '1px solid', borderColor: 'divider',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': { borderColor: b.accent, boxShadow: `0 4px 20px ${b.accent}12` },
                }}
              >
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: `${b.accent}10`, color: b.accent,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 24 },
                }}>
                  {b.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.05rem' }}>{b.title}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.9rem' }}>
                  {b.desc}
                </Typography>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default ControlAnywhere;
