'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants';

const industries = [
  'Ferreterías', 'Refaccionarias', 'Papelerías', 'Jugueterías',
  'Cosméticos', 'Librerías', 'Joyerías', 'Electrónica',
  'Accesorios', 'Ópticas', 'Tiendas de mascotas', 'Mueblerías',
  'y más',
];

const Industries = () => (
  <div id="industries">
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={4} alignItems="center">
            <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 520, mx: 'auto' }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.15 }}>
                Diseñado para miles de negocios
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                Desde pequeñas tiendas hasta redes con múltiples sucursales
              </Typography>
            </Stack>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: { xs: 1.5, sm: 2 } }}
            >
              {industries.map((name, i) => (
                <Stack
                  key={name}
                  direction="row"
                  alignItems="center"
                  sx={{ px: { xs: 1, sm: 0 } }}
                >
                  <Typography
                    sx={{
                      color: 'text.primary',
                      fontSize: { xs: '0.9rem', sm: '1rem' },
                      fontWeight: 500,
                      px: { xs: 0.5, sm: 2 },
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {name}
                  </Typography>
                  {i < industries.length - 1 && (
                    <Box
                      sx={{
                        width: 3,
                        height: 3,
                        borderRadius: '50%',
                        bgcolor: 'divider',
                        display: { xs: 'none', sm: 'block' },
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Stack>
              ))}
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  </div>
);

export default Industries;
