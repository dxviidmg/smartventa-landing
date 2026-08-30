import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { fadeUp } from '../../constants';

const industries = [
  'Ropa', 'Abarrotes', 'Farmacias', 'Ferreterías', 'Mini Súpers',
  'Papelerías', 'Cosméticos', 'Mascotas', 'Jugueterías',
];

const Industries = () => (
  <div id="industries">
    <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: 'background.default', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={2.5} alignItems="center">
            <Typography
              sx={{
                textAlign: 'center',
                color: 'text.secondary',
                fontSize: '0.82rem',
                fontWeight: 600,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
              }}
            >
              Diseñado para
            </Typography>

            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{ gap: { xs: 1, sm: 0 } }}
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
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', sm: '0.92rem' },
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
