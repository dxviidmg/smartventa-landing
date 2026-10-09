'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import UploadFile from '@mui/icons-material/UploadFile';
import SupportAgent from '@mui/icons-material/SupportAgent';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { CONFIG, fadeUp } from '../../constants';

const POPPINS = '"Poppins", sans-serif';
const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';

const blocks = [
  {
    icon: UploadFile,
    title: 'Excel a SmartVenta',
    desc: 'Tienes Excel con tus productos. Nosotros los importamos. Plantillas, validación, correcciones. Empieza con datos reales.',
  },
  {
    icon: SupportAgent,
    title: 'Soporte directo',
    desc: 'Soporte por WhatsApp. Te ayudamos a configurar, resolver dudas y empezar a vender.',
  },
];

const pill = { px: '40px', py: '13px', fontFamily: POPPINS, fontWeight: 500, fontSize: 16, borderRadius: '45px', whiteSpace: 'nowrap' };

const OnboardingSupport = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box component="section" id="start" aria-labelledby="start-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#F5F9FF', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        <motion.div {...fadeUp}>
          <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: { xs: 4, md: 6 }, maxWidth: 1040, mx: 'auto' }}>
            <Typography
              id="start-title"
              variant="h2"
              sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 30, md: 40 }, lineHeight: 1.2, color: '#242F3E' }}
            >
              Comienza en minutos. Soporte por WhatsApp.
            </Typography>
            <Typography sx={{ color: '#5B6472', fontSize: { xs: 15, md: 16 }, lineHeight: 1.7, maxWidth: 620 }}>
              Sin instalación. Sin contrato. Importamos tu catálogo de Excel.
              Una persona te ayuda a configurar y a empezar a vender.
            </Typography>
          </Stack>
        </motion.div>

        <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, mb: 5, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, maxWidth: 900, mx: 'auto' }}>
          {blocks.map(({ icon: Icon, title, desc }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Stack spacing={2} sx={{ height: '100%', p: { xs: 3, md: 4 }, bgcolor: '#fff', borderRadius: '24px', border: '1px solid #DBEAFE', boxShadow: '0 12px 30px rgba(0,141,236,0.08)' }}>
                <Box sx={{ width: 56, height: 56, borderRadius: '50%', background: GRADIENT, color: '#fff', display: 'grid', placeItems: 'center' }}>
                  <Icon aria-hidden="true" sx={{ fontSize: 28 }} />
                </Box>
                <Typography component="h3" sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 20, color: '#242F3E' }}>{title}</Typography>
                <Typography sx={{ color: '#5B6472', fontSize: 15, lineHeight: 1.7 }}>{desc}</Typography>
              </Stack>
            </motion.li>
          ))}
        </Box>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" alignItems="center">
          <Button
            variant="contained"
            endIcon={<ArrowForward />}
            href={`${CONFIG.urls.app}/registrarme`}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ ...pill, bgcolor: '#2563EB', color: '#fff', boxShadow: '0 8px 24px rgba(37,99,235,0.30)', '&:hover': { bgcolor: '#1D4ED8' } }}
          >
            Probar SmartVenta
          </Button>
          <Button
            variant="outlined"
            onClick={() => openWhatsApp('Hola, quiero que me ayuden a comenzar con SmartVenta')}
            sx={{ ...pill, color: '#0030AB', borderColor: '#0030AB', borderWidth: 2, '&:hover': { borderWidth: 2, borderColor: '#0030AB', bgcolor: 'rgba(0,48,171,0.06)' } }}
          >
            Hablar con nosotros
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default OnboardingSupport;
