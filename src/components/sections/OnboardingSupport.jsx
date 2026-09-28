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
    title: 'Excel a SmartVenta',
    desc: 'Tienes Excel con tus productos. Nosotros los importamos. Plantillas, validación, correcciones. Empieza con datos reales.',
  },
  {
    icon: <SupportAgent />,
    title: 'Soporte directo',
    desc: 'Soporte por WhatsApp. Te ayudamos a configurar, resolver dudas y empezar a vender.',
  },
];

const OnboardingSupport = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box sx={{ ...sectionPadding, background: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px) 0 0 / 22px 22px, linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }} id="start">
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 5, maxWidth: 620, mx: 'auto' }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: '#ffffff' }}>
              Comienza en minutos. Soporte por WhatsApp.
            </Typography>
            <Typography sx={{ color: '#e5e7eb', fontSize: '1rem', lineHeight: 1.7 }}>
              Sin instalación. Sin contrato. Importamos tu catálogo de Excel.
              Una persona te ayuda a configurar y a empezar a vender.
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
                    bgcolor: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <Box sx={{
                    width: 44, height: 44, borderRadius: 2.5,
                    bgcolor: 'rgba(255,255,255,0.12)', color: '#ffffff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    '& svg': { fontSize: 24 },
                  }}>
                    {b.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.15rem', color: '#ffffff' }}>{b.title}</Typography>
                  <Typography sx={{ color: '#e5e7eb', fontSize: '0.95rem', lineHeight: 1.7 }}>
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
              color: '#ffffff',
              borderColor: 'rgba(255,255,255,0.5)',
              '&:hover': { borderColor: '#ffffff', bgcolor: 'rgba(255,255,255,0.08)' },
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
