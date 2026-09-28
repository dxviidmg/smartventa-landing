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
    icon: StorefrontOutlined, label: 'Tienda Norte', value: '$3,450.00',
    color: '#047857', bg: 'rgba(4,120,87,0.1)', delay: 0.9, float: 5,
  },
  {
    icon: StorefrontOutlined, label: 'Tienda Centro', value: '$5,630.50',
    color: '#37857', bg: 'rgba(4,120,87,0.1)', delay: 1.1, float: 6,
  },
  {
    icon: StorefrontOutlined, label: 'Tienda Sur', value: '$2,240.00',
    color: '#065a9e', bg: 'rgba(6,90,158,0.1)', delay: 1.3, float: 4.5,
  },
];

const FloatingCard = ({ icon: Icon, label, value, color, bg, meta, live, delay, float }) => (
  <motion.div
    initial={{ opacity: 0, y: 12, scale: 0.96 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  >
    <motion.div
      animate={{ y: [0, -6, 0] }}
      transition={{ duration: float, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        sx={{
          px: { sm: 1.25, md: 1.5 }, py: 1, borderRadius: 2.5,
          whiteSpace: 'nowrap',
          bgcolor: '#ffffff',
          border: '1px solid rgba(15,23,42,0.06)',
          boxShadow: '0 12px 32px rgba(2,35,71,0.35)',
        }}
      >
        <Box sx={{
          width: 30, height: 30, borderRadius: 1.75, bgcolor: bg,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <Icon sx={{ fontSize: 20, color }} />
        </Box>
        <Box sx={{ minWidth: 0 }}>
          <Stack direction="row" spacing={0.75} alignItems="center">
            <Typography sx={{ fontSize: '0.68rem', color: '#64748b', fontWeight: 600, lineHeight: 1.2 }}>
              {label}
            </Typography>
            {meta && (
              <Stack direction="row" spacing={0.4} alignItems="center" sx={{ flexShrink: 0 }}>
                {live && (
                  <Box
                    component={motion.span}
                    animate={{ opacity: [1, 0.25, 1] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#10b981', display: 'block' }}
                  />
                )}
                <Typography sx={{ fontSize: '0.62rem', color: '#94a3b8', fontWeight: 600, lineHeight: 1.2 }}>
                  {meta}
                </Typography>
              </Stack>
            )}
          </Stack>
          <Typography
            noWrap
            sx={{ fontSize: { sm: '0.8rem', md: '0.875rem' }, color: '#0f172a', fontWeight: 700, lineHeight: 1.35 }}
          >
            {value}
          </Typography>
        </Box>
      </Stack>
    </motion.div>
  </motion.div>
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
      background: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px) 0 0 / 22px 22px, linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)',
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
              <Box>
                <Stack
                  direction="row"
                  spacing={1.25}
                  alignItems="center"
                  justifyContent="center"
                  useFlexGap
                  flexWrap="wrap"
                  sx={{
                    display: { xs: 'none', sm: 'flex' },
                    mx: { md: -4 }, mb: 2.5,
                  }}
                >
                  {floatingCards.map((card) => (
                    <FloatingCard key={card.label} {...card} />
                  ))}
                </Stack>
                <BrowserFrame />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Hero;
