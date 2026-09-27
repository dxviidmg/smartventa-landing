'use client';

import { Box, Container, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from '../ui/CountUp';

const stats = [
  { value: 163475, label: 'ventas procesadas' },
  { value: 2025, label: 'operando desde enero', plain: true },
];

const Stats = () => (
  <Box sx={{
    py: { xs: 7, md: 9 },
    background: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px) 0 0 / 22px 22px, linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)',
  }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 4, md: 3 }}>
        {stats.map((s, i) => (
          <Grid key={s.label} size={{ xs: 12, sm: 6 }}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Box sx={{
                textAlign: 'center', px: 1,
                borderLeft: { sm: i ? '1px solid rgba(255,255,255,0.12)' : 'none' },
              }}>
                <Typography sx={{
                  fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                  fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1,
                  fontSize: { xs: '2.2rem', md: '3rem' },
                  color: '#ffffff', fontVariantNumeric: 'tabular-nums', mb: 1,
                }}>
                  {s.plain ? s.value : <CountUp value={s.value} />}
                </Typography>
                <Typography sx={{ fontSize: { xs: '0.85rem', md: '0.95rem' }, color: '#cbd5e1', lineHeight: 1.4, maxWidth: 220, mx: 'auto' }}>
                  {s.label}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Stats;
