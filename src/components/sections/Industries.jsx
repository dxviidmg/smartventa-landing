'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DescriptionIcon from '@mui/icons-material/Description';
import ToysIcon from '@mui/icons-material/Toys';
import CakeIcon from '@mui/icons-material/Cake';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CleaningServicesIcon from '@mui/icons-material/CleaningServices';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SpaIcon from '@mui/icons-material/Spa';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DiamondIcon from '@mui/icons-material/Diamond';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PetsIcon from '@mui/icons-material/Pets';
import ChairIcon from '@mui/icons-material/Chair';
import { fadeUp } from '../../constants';

const industries = [
  { name: 'Ferreterías', color: '#EA580C', icon: BuildIcon },
  { name: 'Refaccionarias', color: '#B91C1C', icon: DirectionsCarIcon },
  { name: 'Papelerías', color: '#0284C7', icon: DescriptionIcon },
  { name: 'Jugueterías', color: '#D97706', icon: ToysIcon },
  { name: 'Cosméticos', color: '#C026D3', icon: SpaIcon },
  { name: 'Dulcerías', color: '#DB2777', icon: CakeIcon },
  { name: 'Tiendas de regalos', color: '#9333EA', icon: ShoppingBagIcon },
  { name: 'Productos de limpieza', color: '#0891B2', icon: CleaningServicesIcon },
  { name: 'Joyerías', color: '#0F766E', icon: DiamondIcon },
  { name: 'Tiendas de celulares', color: '#334155', icon: SmartphoneIcon },
  { name: 'Electrónica', color: '#4F46E5', icon: DesktopMacIcon },
  { name: 'Accesorios', color: '#16A34A', icon: ShoppingBagIcon },
  { name: 'Mercerías', color: '#9D174D', icon: ContentCutIcon },
  { name: 'Librerías', color: '#1E3A8A', icon: MenuBookIcon },
  { name: 'Mueblerías', color: '#854D0E', icon: ChairIcon },
  { name: 'Tiendas de artículos para fiesta', color: '#E11D48', icon: CelebrationIcon },
  { name: 'Tiendas de mascotas', color: '#4D7C0F', icon: PetsIcon },
  { name: 'Ópticas', color: '#1D4ED8', icon: RemoveRedEyeIcon },
  { name: 'Estéticas', color: '#A21CAF', icon: SpaIcon },
];

const POPPINS = '"Poppins", sans-serif';

const Slot = ({ item, delay }) => (
  <Box sx={{ position: 'relative', minHeight: { xs: 112, sm: 104, lg: 84 }, overflow: 'hidden' }}>
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={item.name}
        initial={{ y: 36, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.35, delay } }}
        exit={{ y: -36, opacity: 0, transition: { duration: 0.25 } }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, alignItems: 'center', justifyContent: 'center', gap: { xs: 1, md: 1.5 }, textAlign: 'center' }}>
        <Box sx={{ width: { xs: 36, md: 48 }, height: { xs: 36, md: 48 }, flexShrink: 0, borderRadius: '50%', bgcolor: item.color, color: '#fff', display: 'grid', placeItems: 'center' }}>
          <item.icon aria-hidden="true" sx={{ fontSize: { xs: 20, md: 26 } }} />
        </Box>
        <Box
          component="span"
          sx={{
            fontFamily: POPPINS, fontWeight: 600, fontSize: { xs: 15, sm: 20, lg: 26 }, lineHeight: 1.25,
            color: item.color,
          }}
        >
          {item.name}
        </Box>
        </Box>
      </motion.div>
    </AnimatePresence>
  </Box>
);

const Industries = () => {
  const [step, setStep] = useState(0);
  const [paused, setPaused] = useState(false);
  const COLS = 3;

  useEffect(() => {
    if (paused) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const id = setInterval(() => setStep((v) => (v + 1) % industries.length), 2500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <Box component="section" id="industries" aria-labelledby="industries-title" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ maxWidth: 760, mx: 'auto', mb: { xs: 3, md: 4 } }}>
          <motion.div {...fadeUp}>
            <Typography
              id="industries-title"
              variant="h2"
              sx={{ fontFamily: POPPINS, fontWeight: 500, letterSpacing: 0, fontSize: { xs: 26, md: 40 }, lineHeight: 1.2, color: '#242F3E' }}
            >
              Hecho para tu negocio
            </Typography>
          </motion.div>
        </Stack>

        <Box aria-hidden="true" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', alignItems: 'center', columnGap: { xs: 1, md: 3 }, position: 'relative' }}>
          {Array.from({ length: COLS }, (_, j) => (
            <Slot key={j} item={industries[(step * COLS + j) % industries.length]} delay={j * 0.12} />
          ))}
          {[33.333, 66.666].map((left) => (
            <Box key={left} sx={{ position: 'absolute', left: `${left}%`, top: '18%', bottom: '18%', width: '1px', bgcolor: '#E2E8F0' }} />
          ))}
        </Box>

        <Box component="span" sx={{ position: 'absolute', width: '1px', height: '1px', m: '-1px', p: 0, overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
          Industrias: {industries.map((x) => x.name).join(', ')}
        </Box>
      </Container>
    </Box>
  );
};

export default Industries;
