import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #0d47a1 0%, #01579b 100%)',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 12 },
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center" textAlign="center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 600,
                color: 'white',
                mb: 2,
              }}
            >
              Smartventa, el punto de venta inteligente
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 500,
                color: 'rgba(255,255,255,0.9)',
                maxWidth: '800px',
                lineHeight: 1.6,
              }}
            >
              Controla todas tus sucursales desde una sola plataforma. Gestiona ventas, inventario y obtén reportes en tiempo real para tomar mejores decisiones.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: 2 }}>
              <Button
                variant="contained"
                size="large"
                onClick={scrollToDemo}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'rgba(255,255,255,0.9)',
                  },
                  boxShadow: '0 4px 6px rgba(0,0,0,0.2)',
                }}
              >
                Solicitar acceso a demo
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={scrollToFeatures}
                sx={{
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  textTransform: 'none',
                  borderWidth: 2,
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderWidth: 2,
                    borderColor: 'white',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Ver cómo funciona
              </Button>
            </Stack>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{ width: '100%', marginTop: '3rem' }}
          >
            <Box
              component="img"
              src="/dashboard-mockup.png"
              alt="Dashboard Smartventa"
              sx={{
                width: '100%',
                maxWidth: '900px',
                borderRadius: 3,
                boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
