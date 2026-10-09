'use client';

import { useState, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { POPPINS, SURFACE_MUTED } from '../../constants';
import SectionHeading from '../ui/SectionHeading';
import { industries } from '../../data/industries';

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
    <Box component="section" id="industries" aria-labelledby="industries-title" sx={{ py: { xs: 6, md: 8 }, bgcolor: SURFACE_MUTED, scrollMarginTop: '80px' }}>
      <Container maxWidth="lg">
        <SectionHeading
          id="industries-title"
          title="Hecho para tu negocio"
          maxWidth={760}
          mb={{ xs: 3, md: 4 }}
          titleSx={{ fontSize: { xs: 26, md: 40 } }}
        />

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
