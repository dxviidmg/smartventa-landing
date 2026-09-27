'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HowToReg from '@mui/icons-material/HowToReg';
import Flag from '@mui/icons-material/Flag';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import FactCheck from '@mui/icons-material/FactCheck';
import EditNote from '@mui/icons-material/EditNote';
import PriceCheck from '@mui/icons-material/PriceCheck';
import Lock from '@mui/icons-material/Lock';
import Inventory2 from '@mui/icons-material/Inventory2';
import ManageSearch from '@mui/icons-material/ManageSearch';
import { sectionPadding, fadeUp } from '../../constants';

const mechanisms = [
  { icon: ManageSearch, title: 'Auditoría interna', desc: 'Detecta diferencias de stock, movimientos que no cuadran, códigos repetidos, errores de costo o mayoreo y productos sin movimiento. Descarga cada revisión a Excel.' },
  { icon: Flag, title: 'Historial de cambios de stock', desc: 'El historial señala los registros que no cuadran con el anterior.' },
  { icon: Inventory2, title: 'Stock bajo control', desc: 'Solo el dueño puede cambiar el stock directamente.' },
  { icon: HowToReg, title: 'Ajustes con aprobación', desc: 'Vendedores y administradores piden el ajuste con la cantidad real. Solo el dueño lo aprueba.' },
  { icon: QrCodeScanner, title: 'Traspasos seguros', desc: 'No puedes enviar más de lo que hay. La tienda confirma escaneando lo que recibe, y un producto sin traspaso pendiente se rechaza.' },
  { icon: Lock, title: 'Caja protegida', desc: 'Solo el dueño edita o elimina entradas y salidas de dinero.' },
  { icon: PriceCheck, title: 'Precios protegidos', desc: 'El costo y el mayoreo no pueden quedar arriba del precio de venta. Solo el dueño edita precios.' },
  { icon: FactCheck, title: 'Distribución revisada', desc: 'Cada tienda revisa los productos antes de confirmar. El dueño puede corregir cantidades.' },
  { icon: EditNote, title: 'Motivo obligatorio', desc: 'Toda cancelación o devolución guarda por qué se hizo.' },
];

const cardsPerSlide = 3;
const totalSlides = Math.ceil(mechanisms.length / cardsPerSlide);

const navButtonSx = {
  color: '#047857',
  border: '1px solid rgba(4, 120, 87, 0.3)',
  '&:hover': { bgcolor: 'rgba(4, 120, 87, 0.08)' },
};

const Inventory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % totalSlides);

  return (
  <Box sx={{ ...sectionPadding, bgcolor: '#ffffff' }} id="inventory">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
            Inventario y traspasos
          </Typography>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.75rem', md: '2.2rem' }, letterSpacing: '-0.02em' }}>
            Detalles que evitan pérdidas
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7 }}>
            Controles que protegen tu inventario, tu caja y tus precios.
          </Typography>
        </Stack>
      </motion.div>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 2.5,
      }}>
        {mechanisms.slice(currentIndex * cardsPerSlide, (currentIndex + 1) * cardsPerSlide).map((m) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            style={{ height: '100%' }}
          >
            <Box sx={{
              p: 2.5, height: '100%', borderRadius: 2.5,
              bgcolor: 'background.default',
              border: '1px solid #e5e7eb',
              transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
              '&:hover': {
                borderColor: '#047857',
                transform: 'translateY(-4px)',
                boxShadow: '0 12px 24px rgba(4, 120, 87, 0.12)',
              },
            }}>
              <Box sx={{
                width: 40, height: 40, borderRadius: 2, mb: 1.5,
                bgcolor: 'rgba(4, 120, 87, 0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <m.icon sx={{ fontSize: 22, color: '#047857' }} />
              </Box>
              <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', mb: 0.75 }}>
                {m.title}
              </Typography>
              <Typography sx={{ fontSize: '0.92rem', color: 'text.secondary', lineHeight: 1.6 }}>
                {m.desc}
              </Typography>
            </Box>
          </motion.div>
        ))}
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 4 }}>
        <IconButton onClick={handlePrev} sx={navButtonSx}>
          <ChevronLeftIcon />
        </IconButton>
        <Stack direction="row" spacing={1}>
          {Array.from({ length: totalSlides }).map((_, i) => (
            <Box
              key={i}
              onClick={() => setCurrentIndex(i)}
              sx={{
                width: 8, height: 8, borderRadius: '50%', cursor: 'pointer',
                bgcolor: i === currentIndex ? '#047857' : 'rgba(4, 120, 87, 0.25)',
                transition: 'all 0.3s ease',
                '&:hover': { bgcolor: '#047857' },
              }}
            />
          ))}
        </Stack>
        <IconButton onClick={handleNext} sx={navButtonSx}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </Container>
  </Box>
  );
};

export default Inventory;
