import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { ArrowForward, PlayArrow } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';
import { hero } from '../utils/animations';

const Hero = () => (
  <Box
    sx={{
      pt: { xs: 16, md: 15 },
      pb: { xs: 10, md: 15 },
      position: 'relative',
      overflow: 'hidden',
      background: 'linear-gradient(145deg, #022347 0%, #04346b 40%, #065a9e 100%)',
    }}
  >
    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
      <Stack spacing={4} alignItems="center" textAlign="center">
        <motion.div {...hero.title}>
          <Typography
            variant="h1"
            sx={{ fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' }, color: 'white', maxWidth: '850px' }}
          >
            El punto de venta{' '}
            <Box
              component="span"
              sx={{
                background: 'linear-gradient(135deg, #34d399, #6ee7b7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              inteligente.
            </Box>
          </Typography>
        </motion.div>

        <motion.div {...hero.subtitle}>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.65)', maxWidth: '600px',
              fontSize: { xs: '1rem', md: '1.2rem' }, lineHeight: 1.7,
            }}
          >
            Diseñado para negocios reales. Gestiona inventario, ventas y equipo en múltiples tiendas desde un solo lugar.
          </Typography>
        </motion.div>

        <motion.div {...hero.cta}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center">
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp()}
              sx={{
                px: 4, py: 1.5, fontSize: '1rem',
                bgcolor: '#10b981', color: '#fff',
                '&:hover': { bgcolor: '#059669' },
                boxShadow: '0 4px 24px rgba(16,185,129,0.35)',
              }}
            >
              Probar el sistema
            </Button>
            <Button
              size="large"
              startIcon={<PlayArrow />}
              onClick={() => window.open('https://drive.google.com/file/d/1L8BTl1Hb7K1MxwXmup5n8FNcFKB8o5Ry/preview', '_blank')}
              sx={{
                color: 'white',
                fontWeight: 500, fontSize: '0.95rem',
                border: '1px solid rgba(255,255,255,0.3)',
                '&:hover': { bgcolor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.5)' },
              }}
            >
              Ver video
            </Button>
          </Stack>
        </motion.div>
      </Stack>
    </Container>
  </Box>
);

export default Hero;
