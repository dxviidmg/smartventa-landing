'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import UploadFile from '@mui/icons-material/UploadFile';
import SupportAgent from '@mui/icons-material/SupportAgent';
import { sectionPadding, fadeUp, cardGridItem } from '../../constants';

const blocks = [
  {
    icon: <UploadFile />,
    title: 'Empieza con tu catálogo actual',
    desc: '¿Ya tienes tus productos en Excel? No tienes que capturarlos uno por uno. Te ayudamos a importarlos con plantillas y validación antes de subirlos, para que empieces a trabajar rápido.',
  },
  {
    icon: <SupportAgent />,
    title: 'No estás solo al comenzar',
    desc: 'Te ayudamos a configurar tu negocio, importar tu catálogo y comenzar a trabajar con SmartVenta. Cuentas con soporte y acompañamiento personal por WhatsApp.',
  },
];

const OnboardingSupport = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Puesta en marcha
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
            Te acompañamos desde el primer día
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={3}>
        {blocks.map((b, i) => (
          <Grid key={b.title} size={{ xs: 12, md: 6 }}>
            <motion.div
              {...cardGridItem}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Stack
                spacing={2}
                sx={{
                  height: '100%',
                  p: { xs: 3, md: 4 },
                  borderRadius: 3,
                  bgcolor: 'background.default',
                  border: '1px solid', borderColor: 'divider',
                }}
              >
                <Box sx={{
                  width: 44, height: 44, borderRadius: 2.5,
                  bgcolor: 'rgba(4,120,87,0.08)', color: '#047857',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 24 },
                }}>
                  {b.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '1.15rem' }}>{b.title}</Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', lineHeight: 1.7 }}>
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

export default OnboardingSupport;
