import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const floatingOrb = (top, left, size, color, duration) => ({
  position: 'absolute', top, left, width: size, height: size,
  borderRadius: '50%', background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
  filter: 'blur(60px)',
});

const Hero = () => (
  <Box
    sx={{
      pt: { xs: 14, md: 16 },
      pb: { xs: 6, md: 8 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(135deg, #04346b 0%, #0d47a1 50%, #1565c0 100%)',
    }}
  >
    {/* Animated gradient orbs */}
    <motion.div
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      style={floatingOrb('-20%', '-10%', '500px', 'rgba(96,165,250,0.15)')}
    />
    <motion.div
      animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      style={floatingOrb('-10%', '60%', '600px', 'rgba(16,185,129,0.12)')}
    />

    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{ duration: 0.5, y: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
        >
          <Chip
            label="☁️ Punto de venta en la nube para múltiples sucursales"
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)',
              fontWeight: 500, fontSize: '0.85rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.2)',
              py: 2.5, px: 1,
              position: 'relative', overflow: 'hidden',
              '&::before': {
                content: '""', position: 'absolute', top: 0, left: '-100%',
                width: '100%', height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                animation: 'shimmer 4s infinite',
                '@keyframes shimmer': { '0%': { left: '-100%' }, '100%': { left: '100%' } },
              },
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ duration: 0.6, delay: 0.1, y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 } }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.2rem' },
              color: 'white', lineHeight: 1.1, maxWidth: '900px', letterSpacing: '-0.02em',
            }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: 'inline-block' }}
            >
              Controla todas tus tiendas
            </motion.span>{' '}
            <motion.span
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, #34d399, #10b981, #6ee7b7, #34d399)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              <motion.span
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: 'linear-gradient(90deg, #34d399, #10b981, #6ee7b7, #34d399)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                desde un solo lugar
              </motion.span>
            </motion.span>
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Typography
            variant="h5"
            sx={{
              color: 'rgba(255,255,255,0.75)', maxWidth: '650px',
              fontSize: { xs: '1.05rem', md: '1.25rem' }, fontWeight: 400, lineHeight: 1.6,
            }}
          >
            Gestiona inventario, ventas y operaciones de todas tus sucursales y almacenes en tiempo real. Sin instalación, desde cualquier dispositivo.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
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

export default Hero;
