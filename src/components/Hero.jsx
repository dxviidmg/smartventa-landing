import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Hero() {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #04346b 0%, #0066cc 100%)',
      color: 'white',
      pt: 12,
      pb: 16,
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '4rem' }, fontWeight: 700 }}>
              Gestiona tu negocio de forma inteligente
            </Typography>
            <Typography variant="h5" sx={{ maxWidth: 700, opacity: 0.95 }}>
              SmartVenta es la solución completa para administrar tus puntos de venta, inventario y clientes en un solo lugar. Diseñado para crecer con tu negocio.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: '#04346b',
                  px: 4,
                  py: 1.5,
                  '&:hover': { bgcolor: '#f1f5f9' }
                }}
                startIcon={<RocketLaunchIcon />}
              >
                Solicitar Demo
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  px: 4,
                  py: 1.5,
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                }}
              >
                Ver Características
              </Button>
            </Stack>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
