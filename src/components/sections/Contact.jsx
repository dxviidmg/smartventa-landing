import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { CONFIG, ctaButtonSx, contactItem } from '../../constants';

const Contact = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <Box
      sx={{
        py: { xs: 10, md: 14 },
        background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <Box sx={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 50%, rgba(4,120,87,0.12) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <motion.div {...contactItem} transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Typography
              variant="h2"
              sx={{
                color: 'white',
                fontSize: { xs: '2rem', sm: '2.4rem', md: '2.8rem' },
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Tu negocio ya está creciendo.
              <br />
              <Box component="span" sx={{ color: '#34d399' }}>
                Ahora ten el control.
              </Box>
            </Typography>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Typography sx={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 440, lineHeight: 1.7 }}>
              Agenda una llamada de 15 minutos. Te mostramos el sistema y, si te convence, arrancas el mismo día.
            </Typography>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.2, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => openWhatsApp('Hola, quiero agendar una llamada para conocer SmartVenta')}
                sx={{ ...ctaButtonSx, px: 4, py: 1.5, fontSize: '1rem' }}
              >
                Agendar llamada
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  color: 'rgba(255,255,255,0.85)',
                  borderColor: 'rgba(255,255,255,0.25)',
                  '&:hover': { borderColor: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.05)' },
                }}
              >
                Crear cuenta gratis
              </Button>
            </Stack>
          </motion.div>

          <motion.div {...contactItem} transition={{ delay: 0.3, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}>
            <Stack direction="row" spacing={3} sx={{ pt: 2 }}>
              {['Sin instalación', 'Sin contrato', 'Soporte directo'].map((text) => (
                <Stack key={text} direction="row" spacing={0.75} alignItems="center">
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#34d399', flexShrink: 0 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem' }}>
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
