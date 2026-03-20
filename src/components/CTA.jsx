import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, WhatsApp } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const CTA = () => {
  return (
    <Box
      id="cta"
      sx={{
        py: { xs: 10, md: 14 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #04346b 0%, #0d47a1 100%)',
      }}
    >
      <Box sx={{
        position: 'absolute', top: '-30%', right: '-15%', width: '500px', height: '500px',
        borderRadius: '50%', background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="h2" sx={{ color: 'white', fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 600 }}>
              Empieza a gestionar tu negocio de forma inteligente
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 500 }}>
              Solicita una demo gratuita y descubre cómo SmartVenta puede transformar la operación de tus tiendas.
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                size="large"
                endIcon={<ArrowForward />}
                onClick={() => openWhatsApp('Hola, me interesa una prueba gratuita de SmartVenta')}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  bgcolor: '#10b981', color: '#fff',
                  '&:hover': { bgcolor: '#059669' },
                  boxShadow: '0 4px 24px rgba(16,185,129,0.4)',
                }}
              >
                Prueba gratis
              </Button>
              <Button
                variant="outlined"
                size="large"
                startIcon={<WhatsApp />}
                onClick={() => openWhatsApp()}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  borderColor: 'rgba(255,255,255,0.3)', color: 'white',
                  '&:hover': { borderColor: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.05)' },
                }}
              >
                Solicitar demo
              </Button>
            </Stack>
          </motion.div>
        </Stack>
      </Container>

      {/* Floating WhatsApp button */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1000 }}
      >
        <Box
          onClick={() => openWhatsApp()}
          sx={{
            width: 56, height: 56, borderRadius: '50%',
            bgcolor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', boxShadow: '0 4px 16px rgba(37,211,102,0.4)',
          }}
        >
          <WhatsApp sx={{ fontSize: 28, color: 'white' }} />
        </Box>
      </motion.div>
    </Box>
  );
};

export default CTA;
