'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants';

const audiences = [
  'Tiendas de ropa',
  'Abarrotes',
  'Farmacias',
  'Ferreterías',
  'Mini súpers',
  'Papelerías',
  'Cosméticos',
  'Y más',
];

const Audience = () => (
  <Box sx={{ py: { xs: 5, md: 6 }, bgcolor: 'background.paper', borderTop: '1px solid', borderBottom: '1px solid', borderColor: 'divider' }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={2.5} alignItems="center" textAlign="center">
          <Typography sx={{ fontWeight: 700, fontSize: '1.05rem', color: 'text.primary' }}>
            Diseñado para negocios como
          </Typography>
          <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={1.5}>
            {audiences.map((name) => (
              <Typography
                key={name}
                sx={{
                  fontSize: '0.88rem',
                  color: 'text.secondary',
                  fontWeight: 500,
                  py: 0.5, px: 1.5,
                  borderRadius: 2,
                  bgcolor: 'background.default',
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
