import { Box, Container, Typography, Button } from '@mui/material';
import { WhatsApp } from '@mui/icons-material';

const Contact = () => {
  const openWhatsApp = () => window.open(`https://wa.me/525561652599?text=${encodeURIComponent('Hola, me interesa solicitar una demo de Smartventa')}`, '_blank');

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mb: 2 }}>Solicita tu demo</Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', fontSize: '1.1rem', mb: 4 }}>
            Contáctanos por WhatsApp y te daremos acceso inmediato a una cuenta demo
          </Typography>
          <Button variant="contained" size="large" startIcon={<WhatsApp />} onClick={openWhatsApp} sx={{ py: 2, px: 4, fontSize: '1.1rem', textTransform: 'none', bgcolor: '#25D366', '&:hover': { bgcolor: '#20BA5A' } }}>
            Solicitar demo por WhatsApp
          </Button>
        </Box>
      </Container>

      <Box onClick={openWhatsApp} sx={{ position: 'fixed', bottom: 24, right: 24, width: 60, height: 60, borderRadius: '50%', bgcolor: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', zIndex: 1000, '&:hover': { transform: 'scale(1.1)', boxShadow: '0 6px 16px rgba(0,0,0,0.2)' } }}>
        <WhatsApp sx={{ fontSize: 32, color: 'white' }} />
      </Box>
    </Box>
  );
};

export default Contact;
