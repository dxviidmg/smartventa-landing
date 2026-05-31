import { useState, useEffect, useCallback, useMemo } from 'react';
import { Box, Container, Typography, Stack, Card, Modal } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import tableroImg from '../assets/Tablero.png';
import tiendasImg from '../assets/Tiendas.png';
import corteImg from '../assets/Corte de caja.png';
import carritoImg from '../assets/Carrito de venta.png';
import { dashboardCarousel } from '../constants';
import { LazyImage } from './LazyImage';
import SEO from '../components/SEO';

const features = [
  { img: tableroImg, title: 'Tablero', desc: 'KPIs y métricas en tiempo real' },
  { img: tiendasImg, title: 'Tiendas', desc: 'Gestión multi-sucursal' },
  { img: corteImg, title: 'Corte de Caja', desc: 'Resumen por método de pago' },
  { img: carritoImg, title: 'Punto de Venta', desc: 'Caja rápida e intuitiva' },
];

const DashboardPreview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (isHovered || modalOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered, modalOpen]);

  const handleCardClick = useCallback(() => setModalOpen(true), []);
  const handleHoverChange = useCallback((hovered) => setIsHovered(hovered), []);

  const carouselProps = useMemo(() => ({
    ...dashboardCarousel,
  }), [activeIndex]);

  return (
    <>
      <SEO
        title="Dashboard"
        description="Tu negocio, bajo control. Interfaz intuitiva diseñada para que gestiones tu negocio sin complicaciones."
      />
      <Box sx={{ py: 8, bgcolor: '#CAD2DE' }}>
        <Container maxWidth="lg">
          <Stack spacing={1} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
            <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2 }}>
              Dashboard
            </Typography>
            <Typography variant="h3" fontWeight={700}>Tu negocio, bajo control</Typography>
            <Typography variant="h6" component="p" color="text.primary" sx={{ maxWidth: 600 }}>
              Interfaz intuitiva diseñada para que gestiones tu negocio sin complicaciones
            </Typography>
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: { xs: '100%', md: '70%' }, maxWidth: 900 }}>
              <AnimatePresence mode="wait">
                <motion.div key={activeIndex} {...carouselProps}>
                  <Card
                    onClick={handleCardClick}
                    onMouseEnter={() => handleHoverChange(true)}
                    onMouseLeave={() => handleHoverChange(false)}
                    sx={{
                      overflow: 'hidden',
                      boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                      cursor: 'pointer',
                    }}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <LazyImage
                        src={features[activeIndex].img}
                        alt={features[activeIndex].title}
                        width={900}
                        height={506}
                        sx={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                      <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 3, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                        <Typography variant="h5" component="h3" color="white" fontWeight={600}>
                          {features[activeIndex].title}
                        </Typography>
                        <Typography variant="body1" color="rgba(255,255,255,0.8)">
                          {features[activeIndex].desc}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </motion.div>
              </AnimatePresence>

              <Stack direction="row" spacing={1.5} justifyContent="center" sx={{ mt: 3 }}>
                {features.map((_, i) => (
                  <Box
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      bgcolor: i === activeIndex ? 'secondary.main' : 'rgba(0,0,0,0.2)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      '&:hover': { bgcolor: 'secondary.main' },
                    }}
                  />
                ))}
              </Stack>
            </Box>
          </Box>

          <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '90%',
                maxWidth: 1200,
                bgcolor: 'background.paper',
                overflow: 'hidden',
                boxShadow: '0 20px 80px rgba(0,0,0,0.5)',
              }}
            >
              <LazyImage
                src={features[activeIndex].img}
                alt={features[activeIndex].title}
                sx={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </Box>
          </Modal>
        </Container>
      </Box>
    </>
  );
};

export default DashboardPreview;
