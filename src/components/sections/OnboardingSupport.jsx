'use client';

import { Box, Container, Typography, Stack, Grid, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import UploadFile from '@mui/icons-material/UploadFile';
import SupportAgent from '@mui/icons-material/SupportAgent';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { CONFIG, sectionPadding, fadeUp, cardGridItem, ctaButtonSx } from '../../constants';

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

const OnboardingSupport = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }} id="start">
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 5, maxWidth: 620, mx: 'auto' }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Puesta en marcha
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
              Empieza cuando quieras
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.7 }}>
              Puedes crear tu cuenta y comenzar por tu cuenta. Si prefieres que te ayudemos,
              también puedes hablar con nosotros.
            </Typography>
          </Stack>
        </motion.div>

        <Grid container spacing={3} sx={{ mb: 4 }}>
          {blocks.map((b, i) => (
            <Grid key={b.title} size={{ xs: 12, md: 6 }}>
              <motion.div
                {...cardGridItem}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ height: '100%' }}
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

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
            sx={{ ...ctaButtonSx, px: 4, py: 1.5, fontSize: '1rem' }}
          >
            Probar SmartVenta
          </Button>
          <Button
            variant="outlined"
            size="large"
            onClick={() => openWhatsApp('Hola, quiero que me ayuden a comenzar con SmartVenta')}
            sx={{
              px: 4, py: 1.5, fontSize: '1rem',
              color: 'primary.main',
              borderColor: 'primary.light',
              '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(4,52,107,0.04)' },
            }}
          >
            Hablar con nosotros
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default OnboardingSupport;
