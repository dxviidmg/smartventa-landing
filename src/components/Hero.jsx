import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const FloatingCard = ({ delay, children, position }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.8, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
    style={{
      position: 'absolute',
      ...position,
      background: 'rgba(255,255,255,0.1)',
      backdropFilter: 'blur(10px)',
      borderRadius: '16px',
      padding: '16px 24px',
      border: '1px solid rgba(255,255,255,0.2)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
    }}
  >
    {children}
  </motion.div>
);

export default function Hero() {
  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #0a1929 0%, #04346b 50%, #0066cc 100%)',
      color: 'white',
      pt: { xs: 15, md: 20 },
      pb: { xs: 18, md: 24 },
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 50%, rgba(0, 102, 204, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(4, 52, 107, 0.3) 0%, transparent 50%)',
        animation: 'pulse 8s ease-in-out infinite',
      },
      '@keyframes pulse': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.8 },
      }
    }}>
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.2, 0.5, 0.2],
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0]
          }}
          transition={{ 
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
          style={{
            position: 'absolute',
            width: Math.random() * 4 + 2,
            height: Math.random() * 4 + 2,
            borderRadius: '50%',
            background: 'white',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Floating stats cards */}
      <FloatingCard delay={0.5} position={{ top: '15%', left: '5%', display: { xs: 'none', lg: 'block' } }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <TrendingUpIcon sx={{ color: '#4ade80' }} />
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>+150%</Typography>
            <Typography variant="caption">Ventas</Typography>
          </Box>
        </Stack>
      </FloatingCard>

      <FloatingCard delay={1} position={{ top: '60%', right: '8%', display: { xs: 'none', lg: 'block' } }}>
        <Stack spacing={0.5}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>500+ Clientes</Typography>
          <Typography variant="caption">Confían en nosotros</Typography>
        </Stack>
      </FloatingCard>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={5} alignItems="center" textAlign="center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Box sx={{ 
              display: 'inline-block',
              px: 3,
              py: 1,
              borderRadius: '50px',
              background: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              mb: 3
            }}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                🚀 La solución POS más completa del mercado
              </Typography>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '3rem', md: '5.5rem' }, 
                fontWeight: 900,
                lineHeight: 1.1,
                background: 'linear-gradient(135deg, #ffffff 0%, #a5d8ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              Gestiona tu negocio
              <br />
              de forma <span style={{ 
                background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>inteligente</span>
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Typography 
              variant="h5" 
              sx={{ 
                maxWidth: 800, 
                opacity: 0.9,
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                fontWeight: 400,
                lineHeight: 1.6
              }}
            >
              La plataforma todo-en-uno para administrar tus puntos de venta, inventario y clientes. 
              <strong style={{ color: '#4ade80' }}> Aumenta tus ventas hasta un 150%</strong> con SmartVenta.
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: '#4ade80',
                  color: '#0a1929',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  borderRadius: '50px',
                  textTransform: 'none',
                  boxShadow: '0 10px 40px rgba(74, 222, 128, 0.4)',
                  '&:hover': { 
                    bgcolor: '#22c55e',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 15px 50px rgba(74, 222, 128, 0.5)',
                  },
                  transition: 'all 0.3s ease'
                }}
                startIcon={<RocketLaunchIcon />}
              >
                Solicitar Demo Gratis
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'white',
                  px: 5,
                  py: 2,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: '50px',
                  textTransform: 'none',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255,255,255,0.05)',
                  '&:hover': { 
                    borderColor: 'white',
                    background: 'rgba(255,255,255,0.15)',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s ease'
                }}
                startIcon={<PlayArrowIcon />}
              >
                Ver Video Demo
              </Button>
            </Stack>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={4} 
              sx={{ 
                mt: 4,
                pt: 4,
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#4ade80' }}>500+</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Negocios activos</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#4ade80' }}>50K+</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Ventas diarias</Typography>
              </Box>
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 700, color: '#4ade80' }}>99.9%</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>Uptime garantizado</Typography>
              </Box>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
}
