import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { WhatsApp } from '@mui/icons-material';

const Contact = () => {
  const openWhatsApp = () => window.open(`https://wa.me/525561652599?text=${encodeURIComponent('Hola, me interesa solicitar una demo de Smartventa')}`, '_blank');

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2, color: 'text.primary' }}>Solicita tu demo</Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4 }}>
              Contáctanos por WhatsApp y te daremos acceso inmediato a una cuenta demo
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="contained" size="large" startIcon={<WhatsApp />} onClick={openWhatsApp} sx={{ py: 2, px: 4, fontSize: '1.1rem', textTransform: 'none', bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' } }}>
                Solicitar demo por WhatsApp
              </Button>
            </motion.div>
          </motion.div>
        </Box>
      </Container>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Box onClick={openWhatsApp} sx={{ position: 'fixed', bottom: 24, right: 24, width: 60, height: 60, borderRadius: '50%', bgcolor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000, transition: 'box-shadow 0.3s ease' }}>
          <WhatsApp sx={{ fontSize: 32, color: 'white' }} />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Contact;
