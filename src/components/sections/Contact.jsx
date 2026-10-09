'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { CONFIG, contactItem } from '../../constants';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(134deg, #00A4DB 0%, #00269E 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative translucent triangles, top-left and bottom-right */}
      {[{ top: 0, left: 0, transform: 'none' }, { bottom: 0, right: 0, transform: 'rotate(180deg)' }].map((pos, i) => (
        <Box
          key={i}
          aria-hidden="true"
          sx={{ position: 'absolute', height: 230, width: '25%', background: 'url(/triangle-double.png) no-repeat', backgroundSize: 'contain', pointerEvents: 'none', ...pos }}
        />
      ))}

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <motion.div {...contactItem} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white', fontFamily: '"Poppins", sans-serif', fontWeight: 500, letterSpacing: 0, lineHeight: 1.25,
                fontSize: { xs: '1.9rem', sm: '2.2rem', md: '2.5rem' },
              }}
            >
              Deja de administrar tu negocio a ciegas.
              <br />
              <Box component="span" sx={{ color: '#BAE6FD' }}>
                Controla todo desde un solo lugar.
              </Box>
            </Typography>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.05rem', maxWidth: 440, lineHeight: 1.7 }}>
              Crea tu cuenta y empieza a vender hoy.
              <br />
              O habla con nosotros si tienes preguntas.
            </Typography>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
                sx={{ px: '45px', py: '14px', fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: 16, borderRadius: '45px', whiteSpace: 'nowrap', bgcolor: '#fff', color: '#00269E', '&:hover': { bgcolor: '#E0F2FE' } }}
              >
                Probar SmartVenta
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => openWhatsApp('Hola, quiero conocer más sobre SmartVenta')}
                sx={{
                  px: '45px', py: '14px', fontFamily: '"Poppins", sans-serif', fontWeight: 500, fontSize: 16, borderRadius: '45px', whiteSpace: 'nowrap',
                  color: '#fff', borderColor: 'rgba(255,255,255,0.7)', borderWidth: 2,
                  '&:hover': { borderColor: '#fff', borderWidth: 2, bgcolor: 'rgba(255,255,255,0.1)' },
                }}
              >
                Hablar con nosotros
              </Button>
            </Stack>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={{ xs: 1.5, sm: 3 }} sx={{ pt: 2 }}>
              {['Desde $399/mes', 'Sin contrato', 'Soporte por WhatsApp'].map((text) => (
                <Stack key={text} direction="row" spacing={0.75} alignItems="center">
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#BAE6FD', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
