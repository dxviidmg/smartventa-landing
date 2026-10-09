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
  { name: 'Ferreterías', icon: BuildIcon },
  { name: 'Refaccionarias', icon: DirectionsCarIcon },
  { name: 'Papelerías', icon: DescriptionIcon },
  { name: 'Jugueterías', icon: ToysIcon },
  { name: 'Cosméticos', icon: SpaIcon },
  { name: 'Dulcerías', icon: CakeIcon },
  { name: 'Tiendas de regalos', icon: ShoppingBagIcon },
  { name: 'Productos de limpieza', icon: CleaningServicesIcon },
  { name: 'Joyerías', icon: DiamondIcon },
  { name: 'Tiendas de celulares', icon: SmartphoneIcon },
  { name: 'Electrónica', icon: DesktopMacIcon },
  { name: 'Accesorios', icon: ShoppingBagIcon },
  { name: 'Mercerías', icon: ContentCutIcon },
  { name: 'Librerías', icon: MenuBookIcon },
  { name: 'Mueblerías', icon: ChairIcon },
  { name: 'Tiendas de artículos para fiesta', icon: CelebrationIcon },
  { name: 'Tiendas de mascotas', icon: PetsIcon },
  { name: 'Ópticas', icon: RemoveRedEyeIcon },
  { name: 'Estéticas', icon: SpaIcon },
];

const POPPINS = '"Poppins", sans-serif';
const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';

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
        <Box sx={{ width: { xs: 36, md: 48 }, height: { xs: 36, md: 48 }, flexShrink: 0, borderRadius: '50%', background: GRADIENT, color: '#fff', display: 'grid', placeItems: 'center' }}>
          <item.icon aria-hidden="true" sx={{ fontSize: { xs: 20, md: 26 } }} />
        </Box>
        <Box
          component="span"
          sx={{
            fontFamily: POPPINS, fontWeight: 600, fontSize: { xs: 15, sm: 20, lg: 26 }, lineHeight: 1.25,
            background: GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
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
              Hecho para negocios de
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

        <Box component="span" sx={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          Industrias: {industries.map((x) => x.name).join(', ')}
        </Box>
      </Container>
    </Box>
  );
};

export default Industries;
