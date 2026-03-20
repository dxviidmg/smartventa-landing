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
      <Stack spacing={3} alignItems="center" textAlign="center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <Chip
            label="☁️ Sistema POS en la nube para múltiples sucursales"
            sx={{
              bgcolor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.9)',
              fontWeight: 500, fontSize: '0.85rem',
              backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.15)',
              py: 2.5, px: 1,
            }}
          />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.2rem' },
              color: 'white', lineHeight: 1.1, maxWidth: '900px', letterSpacing: '-0.02em',
            }}
          >
            Controla todas tus tiendas y almacenes{' '}
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
            Controla ventas, inventario y operaciones de todas tus tiendas y almacenes en tiempo real, desde una sola plataforma en la nube.
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

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Stack
            direction="row"
            spacing={{ xs: 3, md: 6 }}
            sx={{ mt: 2, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            {[
              { value: '100%', label: 'En la nube' },
              { value: '∞', label: 'Sucursales' },
              { value: '24/7', label: 'Disponible' },
            ].map((stat, i) => (
              <Box key={i} sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: 'white', fontWeight: 800, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', mt: 0.5 }}>
                    {stat.label}
                  </Typography>
              </Box>
            ))}
          </Stack>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Hero;
