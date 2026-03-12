import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const CTA = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #0d47a1 0%, #01579b 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="md">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: 'white' }}>
              Descubre por qué Smartventa es el punto de venta inteligente
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
              Únete a los negocios que ya están optimizando sus operaciones multi-tienda
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToContact}
                sx={{
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                }}
              >
                Solicitar acceso a demo
              </Button>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2 }}>
              Te daremos acceso a una cuenta demo para explorar el sistema
            </Typography>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default CTA;
