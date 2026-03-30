import { Box, Container, Typography, Stack, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const Contact = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 6, md: 8 },
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #04346b 0%, #065a9e 100%)',
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
              Empieza a controlar todas tus tiendas hoy
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', maxWidth: 500 }}>
              Solicita una demo gratuita y descubre cómo SmartVenta puede transformar la operación de tus tiendas.
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                startIcon={<WhatsApp />}
                onClick={() => openWhatsApp()}
                sx={{
                  px: 4, py: 1.5, fontSize: '1rem',
                  bgcolor: '#10b981', color: '#fff',
                  '&:hover': { bgcolor: '#059669' },
                  boxShadow: '0 4px 24px rgba(16,185,129,0.4)',
                }}
              >
                Solicitar demo
              </Button>
            </motion.div>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
