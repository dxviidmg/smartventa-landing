'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const points = [
  'Registra ventas en efectivo, tarjeta y transferencia',
  'Anota entradas y salidas de dinero de la caja',
  'Compara lo que vendiste contra lo que hay en caja',
  'Haz cortes parciales o totales y expórtalos a Excel',
];

const rows = [
  { label: 'Efectivo', value: '$1,000' },
  { label: 'Transferencias', value: '$2,000' },
  { label: 'Tarjeta', value: '$6,000' },
];

const CashReceipt = () => (
  <Box sx={{
    borderRadius: 3,
    bgcolor: 'background.paper',
    border: '1px solid', borderColor: 'divider',
    boxShadow: '0 16px 48px rgba(0,0,0,0.08)',
    overflow: 'hidden',
    maxWidth: 380,
    mx: 'auto',
  }}>
    <Box sx={{ px: 3, py: 2, bgcolor: 'background.default', borderBottom: '1px solid', borderColor: 'divider' }}>
      <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>
        Ventas del día
      </Typography>
    </Box>
    <Stack spacing={0} sx={{ px: 3, py: 2 }}>
      {rows.map((r) => (
        <Stack key={r.label} direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 0.75 }}>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>{r.label}</Typography>
          <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: 'text.primary', fontVariantNumeric: 'tabular-nums' }}>
            {r.value}
          </Typography>
        </Stack>
      ))}

      <Box sx={{ borderTop: '1px solid', borderColor: 'divider', my: 1 }} />
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 0.75 }}>
        <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: 'text.primary' }}>Total vendido</Typography>
        <Typography sx={{ fontWeight: 700, fontSize: '1rem', color: 'text.primary', fontVariantNumeric: 'tabular-nums' }}>
          $9,000
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 0.75 }}>
        <Typography sx={{ color: 'text.secondary', fontSize: '0.9rem' }}>Retiro de caja</Typography>
        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', color: '#ef4444', fontVariantNumeric: 'tabular-nums' }}>
          − $100
        </Typography>
      </Stack>
    </Stack>

    <Box sx={{ px: 3, py: 2, bgcolor: 'rgba(4,120,87,0.06)', borderTop: '1px solid', borderColor: 'rgba(4,120,87,0.15)' }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ fontWeight: 700, fontSize: '0.95rem', color: '#047857' }}>Efectivo esperado</Typography>
        <Typography sx={{ fontWeight: 800, fontSize: '1.25rem', color: '#047857', fontVariantNumeric: 'tabular-nums' }}>
          $900
        </Typography>
      </Stack>
    </Box>
  </Box>
);

const CashControl = () => (
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Grid container spacing={{ xs: 5, md: 8 }} alignItems="center">
        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div {...fadeUp}>
            <Stack spacing={2.5}>
              <Typography variant="overline" sx={{ color: '#047857', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
                Control de caja
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, lineHeight: 1.15 }}>
                Separa lo que vendiste de lo que realmente tienes en caja
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: 460 }}>
                No todo lo que vendes queda en efectivo. SmartVenta separa cada método de pago y
                los movimientos de dinero para que sepas cuánto debería haber en la caja al cerrar.
              </Typography>
              <Stack spacing={1.5} sx={{ pt: 0.5 }}>
                {points.map((p) => (
                  <Stack key={p} direction="row" spacing={1.25} alignItems="flex-start">
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: '#047857', mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.95rem', color: 'text.secondary', lineHeight: 1.6 }}>{p}</Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </motion.div>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <CashReceipt />
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default CashControl;
