import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp, ArrowForward } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const Contact = () => (
  <Box
    id="contact"
    sx={{
      py: { xs: 10, md: 14 },
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(145deg, #022347 0%, #04346b 40%, #065a9e 100%)',
    }}
  >
    <Box sx={{
      position: 'absolute', inset: 0, opacity: 0.03,
      backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
      backgroundSize: '60px 60px',
    }} />

    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: '2rem', md: '3rem' }, maxWidth: 600 }}>
            Empieza a controlar tu negocio{' '}
            <Box component="span" sx={{
              background: 'linear-gradient(135deg, #34d399, #6ee7b7)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            }}>
              hoy mismo
            </Box>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: 480 }}>
            Solicita una demo gratuita y descubre cómo SmartVenta puede transformar la operación de tus tiendas.
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              startIcon={<WhatsApp />}
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp()}
              sx={{
                px: 4, py: 1.5, fontSize: '1rem',
                bgcolor: '#10b981', color: '#fff',
                '&:hover': { bgcolor: '#059669' },
                boxShadow: '0 4px 24px rgba(16,185,129,0.35)',
              }}
            >
              Solicitar demo gratis
            </Button>
          </Stack>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
          <Typography sx={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.85rem', mt: 2 }}>
            Sin compromiso · Respuesta en menos de 24 horas · Acceso inmediato a demo
          </Typography>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Contact;
