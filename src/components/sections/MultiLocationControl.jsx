'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import InventoryIcon from '@mui/icons-material/Inventory';
import CountUp from '../ui/CountUp';
import { sectionPadding, fadeUp } from '../../constants';

const BLUE = '#065a9e';

const locations = [
  {
    type: 'Tienda', name: 'Tienda Centro', icon: StorefrontOutlined,
    trend: [12, 18, 15, 24, 22, 30, 28, 36],
    metrics: [
      { label: 'Ventas hoy', value: 3450, prefix: '$', color: '#047857' },
      { label: 'Inversión', value: 48500, prefix: '$' },
      { label: 'Apartados', value: 8 },
      { label: 'Caja', value: 2890, prefix: '$' },
    ],
  },
  {
    type: 'Tienda', name: 'Tienda Sur', icon: StorefrontOutlined,
    trend: [10, 14, 20, 16, 19, 17, 24, 26],
    metrics: [
      { label: 'Ventas hoy', value: 2650, prefix: '$', color: '#047857' },
      { label: 'Inversión', value: 52200, prefix: '$' },
      { label: 'Apartados', value: 5 },
      { label: 'Caja', value: 2100, prefix: '$' },
    ],
  },
  {
    type: 'Almacén', name: 'Almacén Principal', icon: InventoryIcon,
    pending: '2 envíos por confirmar',
    metrics: [
      { label: 'Inversión', value: 125800, prefix: '$' },
      { label: 'Productos', value: 1240 },
      { label: 'En camino', value: 24, suffix: ' pzas' },
    ],
  },
  {
    type: 'Almacén', name: 'Almacén Sur', icon: InventoryIcon,
    pending: '1 envío por confirmar',
    metrics: [
      { label: 'Inversión', value: 97500, prefix: '$' },
      { label: 'Productos', value: 860 },
      { label: 'En camino', value: 12, suffix: ' pzas' },
    ],
  },
];

const activity = [
  'Tienda Sur vendió $320',
  'Almacén Principal envió 24 pzas a Tienda Centro',
  'Tienda Centro abrió un apartado',
  'Tienda Centro vendió $1,150',
  'Tienda Sur confirmó un traspaso',
  'Almacén Sur recibió 60 pzas',
];

const timeLabels = ['ahora', 'hace 1 min', 'hace 3 min'];

const Sparkline = ({ points, id }) => {
  const w = 200;
  const h = 44;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const coords = points.map((p, i) => [
    (i / (points.length - 1)) * w,
    h - 4 - ((p - min) / (max - min)) * (h - 8),
  ]);
  const line = coords.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ');
  const area = `${line} L${w},${h} L0,${h} Z`;
  return (
    <Box component="svg" viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" sx={{ width: '100%', height: 44, display: 'block' }}>
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={BLUE} stopOpacity="0.22" />
          <stop offset="100%" stopColor={BLUE} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area}
        fill={`url(#${id})`}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6, duration: 0.6 }}
      />
      <motion.path
        d={line}
        fill="none"
        stroke={BLUE}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
    </Box>
  );
};

const LiveDot = () => (
  <Box sx={{ position: 'relative', width: 10, height: 10 }}>
    <motion.div
      animate={{ scale: [1, 2.2], opacity: [0.5, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: 'easeOut' }}
      style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: '#10b981' }}
    />
    <Box sx={{ position: 'absolute', inset: 0, borderRadius: '50%', bgcolor: '#10b981' }} />
  </Box>
);

const ActivityFeed = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setOffset((prev) => (prev + 1) % activity.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const visible = [0, 1, 2].map((i) => activity[(offset - i + activity.length) % activity.length]);

  return (
    <Box sx={{ mt: 4, p: { xs: 2, md: 2.5 }, borderRadius: 3, bgcolor: '#ffffff', border: '1px solid #e5e7eb', maxWidth: 720, mx: 'auto' }}>
      <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1.5 }}>
        <LiveDot />
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: 'text.primary' }}>Actividad reciente</Typography>
      </Stack>
      <Box sx={{ position: 'relative' }}>
        <AnimatePresence initial={false}>
          {visible.map((text, i) => (
            <motion.div
              key={text}
              layout
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1 - i * 0.25, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} sx={{ py: 0.9, borderTop: i ? '1px solid #eef2f7' : 'none' }}>
                <Typography sx={{ fontSize: '0.88rem', color: 'text.primary' }}>{text}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', whiteSpace: 'nowrap' }}>{timeLabels[i]}</Typography>
              </Stack>
            </motion.div>
          ))}
        </AnimatePresence>
      </Box>
    </Box>
  );
};

const MultiLocationControl = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }} id="multilocal">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ px: 1.5, py: 0.5, borderRadius: 999, bgcolor: 'rgba(16,185,129,0.1)' }}>
            <LiveDot />
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#047857', letterSpacing: 0.5 }}>EN VIVO</Typography>
          </Stack>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Todas tus sucursales, un solo lugar
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 520 }}>
            Ves el estado de cada tienda y almacén en tiempo real. Sin llamadas. Sin esperas.
          </Typography>
        </Stack>
      </motion.div>

      <Grid container spacing={2}>
        {locations.map((loc, i) => {
          const isStore = loc.type === 'Tienda';
          return (
            <Grid key={loc.name} size={{ xs: 12, sm: 6, md: 3 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <Box sx={{
                  p: 2.5, height: '100%', borderRadius: 2.5,
                  bgcolor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  '&:hover': {
                    borderColor: BLUE,
                    transform: 'translateY(-6px)',
                    boxShadow: '0 12px 24px rgba(6, 90, 158, 0.15)',
                  },
                }}>
                  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
                    <Box sx={{
                      width: 42, height: 42, borderRadius: 2, flexShrink: 0,
                      bgcolor: isStore ? '#e8f1fb' : 'rgba(59, 130, 246, 0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <loc.icon sx={{ fontSize: 24, color: isStore ? '#04346b' : '#3b82f6' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.7rem', color: 'text.secondary', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                        {loc.type}
                      </Typography>
                      <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', lineHeight: 1.2 }}>
                        {loc.name}
                      </Typography>
                    </Box>
                  </Stack>

                  <Box sx={{ height: 44, mb: 2, display: 'flex', alignItems: 'center' }}>
                    {isStore ? (
                      <Sparkline points={loc.trend} id={`spark-${i}`} />
                    ) : (
                      <Box sx={{ px: 1.25, py: 0.6, borderRadius: 1.5, bgcolor: 'rgba(124,58,237,0.08)' }}>
                        <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#7c3aed' }}>{loc.pending}</Typography>
                      </Box>
                    )}
                  </Box>

                  <Stack spacing={0.9}>
                    {loc.metrics.map((m) => (
                      <Stack key={m.label} direction="row" justifyContent="space-between" alignItems="center">
                        <Typography sx={{ fontSize: '0.78rem', color: 'text.secondary' }}>{m.label}</Typography>
                        <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: m.color || 'text.primary', fontVariantNumeric: 'tabular-nums' }}>
                          <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>
          );
        })}
      </Grid>

      <ActivityFeed />
    </Container>
  </Box>
);

export default MultiLocationControl;
