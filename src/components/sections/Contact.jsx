'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { CONFIG, fadeUp } from '../../constants';

const POPPINS = '"Poppins", sans-serif';

const steps = [
  { title: 'Crea tu cuenta', desc: 'Regístrate y entra desde el navegador, en computadora, tableta o celular.' },
  { title: 'Importamos tu catálogo', desc: 'Envíanos tu Excel y lo cargamos por ti, con plantillas y validación, para que empieces con datos reales.' },
  { title: 'Vende con acompañamiento', desc: 'Te ayudamos por WhatsApp a configurar todo, resolver dudas y empezar a vender.' },
];

const pill = { px: '45px', py: '14px', fontFamily: POPPINS, fontWeight: 500, fontSize: 16, borderRadius: '45px', whiteSpace: 'nowrap' };

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      component="section"
      id="start"
      aria-labelledby="start-title"
      sx={{ py: { xs: 9, md: 13 }, background: 'linear-gradient(134deg, #00A4DB 0%, #00269E 100%)', position: 'relative', overflow: 'hidden', scrollMarginTop: '80px' }}
    >
      {/* Decorative translucent triangles, top-left and bottom-right */}
      {[{ top: 0, left: 0, transform: 'none' }, { bottom: 0, right: 0, transform: 'rotate(180deg)' }].map((pos, i) => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{ position: 'absolute', height: 230, width: '25%', background: 'url(/triangle-double.png) no-repeat', backgroundSize: 'contain', pointerEvents: 'none', ...pos }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div {...fadeUp}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: { xs: 5, md: 7 }, maxWidth: 960, mx: 'auto' }}>
            <Typography
              id="start-title"
              variant="h2"
              sx={{ color: '#fff', fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, lineHeight: 1.25, fontSize: { xs: '1.9rem', sm: '2.2rem', md: '2.6rem' } }}
            >
              Empieza hoy y toma el control de tu negocio
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.92)', fontSize: { xs: 15, md: 17 }, lineHeight: 1.7, maxWidth: 560 }}>
              Tu cuenta lista en minutos, con tu catálogo cargado y soporte directo por WhatsApp.
            </Typography>
          </Stack>
        </motion.div>

        <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, mb: { xs: 5, md: 6 }, display: 'grid', gap: 3, gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' } }}>
          {steps.map((st, i) => (
            <motion.li
              key={st.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Box sx={{ height: '100%', p: 3.5, borderRadius: '24px', bgcolor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(6px)' }}>
                <Box aria-hidden="true" sx={{ width: 44, height: 44, mb: 2, borderRadius: '50%', bgcolor: '#fff', color: '#00269E', display: 'grid', placeItems: 'center', fontFamily: POPPINS, fontWeight: 600, fontSize: 20 }}>
                  {i + 1}
                </Box>
                <Typography component="h3" sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 19, color: '#fff', mb: 1 }}>{st.title}</Typography>
                <Typography sx={{ fontSize: 15, lineHeight: 1.7, color: 'rgba(255,255,255,0.92)' }}>{st.desc}</Typography>
              </Box>
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
            sx={{ ...pill, bgcolor: '#fff', color: '#00269E', '&:hover': { bgcolor: '#E0F2FE' } }}
          >
            Probar SmartVenta
          </Button>
          <Button
            variant="outlined"
            onClick={() => openWhatsApp('Hola, quiero conocer más sobre SmartVenta')}
            sx={{ ...pill, color: '#fff', borderColor: 'rgba(255,255,255,0.7)', borderWidth: 2, '&:hover': { borderColor: '#fff', borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)' } }}
          >
            Hablar con nosotros
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
