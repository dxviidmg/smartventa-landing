'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import CalendarMonth from '@mui/icons-material/CalendarMonth';
import CountUp from '../ui/CountUp';

const POPPINS = '"Poppins", sans-serif';
// Same blue as the other gradient blocks, with a darker start so white text keeps good contrast
const BLUE_BG = 'linear-gradient(134deg, #0079BE 0%, #00269E 100%)';

const stats = [
  { value: 163475, label: 'ventas procesadas', icon: ReceiptLong },
  { value: 2025, label: 'operando desde enero', plain: true, icon: CalendarMonth },
];

const Stats = () => (
  <Box component="section" aria-label="Cifras de SmartVenta" sx={{ py: { xs: 7, md: 9 }, background: BLUE_BG }}>
    <Container maxWidth="lg">
      <Box
        component="ul"
        sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: { xs: 4, md: 0 }, gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}
      >
        {stats.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 1.4 }}
          >
            <Box
              sx={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 2, md: 3 }, px: 2,
                borderLeft: { md: i ? '1px solid rgba(255,255,255,0.3)' : 'none' },
              }}
            >
              <Box sx={{ width: { xs: 56, md: 72 }, height: { xs: 56, md: 72 }, flexShrink: 0, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.18)', color: '#fff', display: 'grid', placeItems: 'center' }}>
                <s.icon aria-hidden="true" sx={{ fontSize: { xs: 28, md: 36 } }} />
              </Box>
              <Box>
                <Typography sx={{ fontFamily: POPPINS, fontWeight: 600, lineHeight: 1.1, fontSize: { xs: 40, md: 56 }, color: '#fff', fontVariantNumeric: 'tabular-nums' }}>
                  {s.plain ? s.value : <CountUp value={s.value} duration={5} />}
                </Typography>
                <Typography sx={{ mt: 0.5, fontSize: { xs: 15, md: 17 }, color: 'rgba(255,255,255,0.92)' }}>{s.label}</Typography>
              </Box>
            </Box>
          </motion.li>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Stats;
