'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants';

const audiences = [
  'Abarrotes',
  'Ferreterías',
  'Jugueterias',
  'Refraccionarias',
  'Papelerías',
  'Cosméticos',
  'Y más',
];

const Audience = () => (
  <Box sx={{ py: { xs: 5, md: 6 }, background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'white' }}>
            Diseñado para negocios como
          </Typography>
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
