'use client';

import { Container, Typography, Button, Stack, Box, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { CONFIG, ctaButtonSx, heroContainer, heroItem, heroImage } from '../../constants';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import tableroImg from '../../assets/Tablero.png';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Inventory2Outlined from '@mui/icons-material/Inventory2Outlined';

const floatingCards = [
  {
    icon: StorefrontOutlined, label: 'Tienda Centro', value: '+$3,450 hoy', color: '#047857', bg: 'rgba(4,120,87,0.1)',
    pos: { top: { sm: -28, md: -32 }, left: { sm: -8, md: -40 } }, delay: 0.9, float: 5,
  },
  {
    icon: CheckCircle, label: 'Traspaso confirmado', value: 'Sur → Centro · 24 pzas', color: '#047857', bg: 'rgba(4,120,87,0.1)',
    pos: { top: '42%', right: { sm: -8, md: -36 } }, delay: 1.2, float: 6,
  },
  {
    icon: Inventory2Outlined, label: 'Almacén Principal', value: '1,240 productos', color: '#065a9e', bg: 'rgba(6,90,158,0.1)',
    pos: { bottom: { sm: -28, md: -36 }, left: { sm: '8%', md: '6%' } }, delay: 1.5, float: 4.5,
  },
];

const FloatingCard = ({ icon: Icon, label, value, color, bg, pos, delay, float }) => (
  <Box sx={{ position: 'absolute', zIndex: 2, display: { xs: 'none', sm: 'block' }, ...pos }}>
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: float, repeat: Infinity, ease: 'easeInOut', delay }}
      >
        <Stack
          direction="row"
          spacing={1.25}
          alignItems="center"
          sx={{
            px: 1.75, py: 1.25, borderRadius: 2.5,
            bgcolor: '#ffffff',
            boxShadow: '0 12px 32px rgba(2,35,71,0.35)',
            whiteSpace: 'nowrap',
          }}
        >
          <Box sx={{
            width: 34, height: 34, borderRadius: 2, bgcolor: bg,
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <Icon sx={{ fontSize: 20, color }} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600, lineHeight: 1.2 }}>
              {label}
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 700, lineHeight: 1.3 }}>
              {value}
            </Typography>
          </Box>
        </Stack>
      </motion.div>
    </motion.div>
  </Box>
);

const ArrowForward = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
  </svg>
);

const BrowserFrame = () => (
  <Box
    sx={{
      borderRadius: { xs: 2, md: 3 },
      overflow: 'hidden',
      boxShadow: '0 25px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.08)',
      bgcolor: '#1e293b',
      transform: { md: 'perspective(1200px) rotateY(-4deg) rotateX(2deg)' },
      transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      '&:hover': {
        transform: { md: 'perspective(1200px) rotateY(-1deg) rotateX(0.5deg)' },
      },
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      spacing={0.75}
      sx={{ px: 1.5, py: 1, bgcolor: '#1e293b' }}
    >
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#eab308' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
      <Box sx={{
        flex: 1, mx: 1.5, py: 0.4, px: 1.5,
        borderRadius: 1, bgcolor: 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center',
      }}>
        <Typography sx={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontFamily: 'monospace' }}>
          app.smartventa.com
        </Typography>
      </Box>
    </Stack>
    <img
      src={typeof tableroImg === 'string' ? tableroImg : tableroImg.src}
      alt="Dashboard de SmartVenta — tablero de ventas y métricas"
      width={1296}
      height={618}
      loading="eager"
      style={{ width: '100%', maxWidth: 1296, height: 'auto', display: 'block' }}
    />
  </Box>
);

const Hero = () => {
  const { openWhatsApp } = useWhatsApp();

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)',
    }}>
      <Box sx={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 30% 20%, rgba(6,90,158,0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(4,120,87,0.15) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 12, md: 0 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div {...heroContainer} initial="initial" animate="animate">
              <Stack spacing={3} sx={{ textAlign: { xs: 'center', md: 'left' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                <motion.div variants={heroItem}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.6rem' },
                      color: 'white', lineHeight: 1.05, letterSpacing: '-0.035em', fontWeight: 800,
                    }}
                  >
                    Punto de venta para negocios con{' '}
                    <Box
                      component="span"
                      sx={{
                        background: 'linear-gradient(90deg, #34d399 0%, #10b981 100%)',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                      }}
                    >
                      varias sucursales.
                    </Box>
                  </Typography>
                </motion.div>

                <motion.div variants={heroItem}>
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.75)', maxWidth: 520, mx: { xs: 'auto', md: 0 },
                      fontSize: { xs: '1.05rem', md: '1.2rem' }, fontWeight: 400, lineHeight: 1.7,
                    }}
                  >
                    Ventas sincronizadas. Inventario centralizado. Precios actualizados al instante.
                    Sin revisar tienda por tienda.
                  </Typography>
                </motion.div>

                <motion.div variants={heroItem}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
                    <Button
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
                      sx={{ ...ctaButtonSx, px: 4, py: 1.5, fontSize: '1rem' }}
                    >
                      Probar SmartVenta
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      onClick={() => openWhatsApp('Hola, quiero conocer más sobre SmartVenta')}
                      sx={{
                        px: 4, py: 1.5, fontSize: '1rem',
                        color: 'rgba(255,255,255,0.85)',
                        borderColor: 'rgba(255,255,255,0.25)',
                        '&:hover': { borderColor: 'rgba(255,255,255,0.6)', bgcolor: 'rgba(255,255,255,0.05)' },
                      }}
                    >
                      Hablar con nosotros
                    </Button>
                  </Stack>
                </motion.div>

                <motion.div variants={heroItem}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 3 }} sx={{ pt: 2 }}>
                    {['Sin instalación', 'Sin contrato', 'Listo para comenzar'].map((text) => (
                      <Stack key={text} direction="row" spacing={0.75} alignItems="center">
                        <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#34d399', flexShrink: 0 }} />
                        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>
                          {text}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              {...heroImage}
              initial="initial"
              animate="animate"
            >
              <Box sx={{ position: 'relative' }}>
                <BrowserFrame />
                {floatingCards.map((card) => (
                  <FloatingCard key={card.label} {...card} />
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
