'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants';

const audiences = [
  'Abarrotes y minisúpers',
  'Cremerías',
  'Carnicerías',
  'Dulcerías',
  'Ferreterías y tlapalerías',
  'Refaccionarias',
  'Papelerías',
  'Jugueterías',
  'Cosméticos y cuidado personal',
  'Tiendas de regalos',
  'Granos y semillas',
  'Productos de limpieza',
  'Y otros comercios de productos físicos',
];

const Audience = () => (
  <Box sx={{ py: { xs: 5, md: 6 }, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Stack spacing={1} alignItems="center" sx={{ maxWidth: 620 }}>
            <Typography sx={{ fontWeight: 800, fontSize: { xs: '1.5rem', md: '1.9rem' }, color: 'white', lineHeight: 1.2 }}>
              Ideal para comercios de productos físicos
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1rem', lineHeight: 1.6 }}>
              SmartVenta funciona especialmente bien para negocios que necesitan controlar productos,
              inventario y ventas, con una o varias sucursales.
            </Typography>
          </Stack>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
            {audiences.map((name) => (
              <Typography
                key={name}
                sx={{
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 500,
                  py: 0.5, px: 1.5,
                  borderRadius: 2,
                  bgcolor: 'rgba(255,255,255,0.1)',
                }}
              >
                {name}
              </Typography>
            ))}
          </Stack>
        </Stack>
      </motion.div>
    </Container>
  </Box>
);

export default Audience;
