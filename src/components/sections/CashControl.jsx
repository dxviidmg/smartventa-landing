'use client';

import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';

const points = [
  'Separa automáticamente efectivo, tarjeta y transferencia',
  'Registra entradas y salidas de dinero (retiros, gastos, etc)',
  'Sistema verifica que caja coincida con ventas automáticamente',
  'Cortes parciales o totales, exportables a Excel con un clic',
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
  <Box sx={{ ...sectionPadding, bgcolor: 'background.paper', py: { xs: 4, md: 5 } }}>
    <Container maxWidth="md">
      <motion.div {...fadeUp}>
        <Stack spacing={3} alignItems="center" textAlign="center">
          <Stack spacing={1.5}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, letterSpacing: '-0.02em' }}>
              Cierre de caja en segundos
            </Typography>
            <Typography sx={{ color: 'text.secondary', fontSize: '0.95rem', maxWidth: 480, mx: 'auto', lineHeight: 1.6 }}>
              Efectivo, tarjeta y transferencias separadas automáticamente. SmartVenta verifica que todo coincida. Sin errores. Sin sorpresas.
            </Typography>
          </Stack>

          <Box sx={{ width: '100%', maxWidth: 400 }}>
            <CashReceipt />
          </Box>
        </Stack>
      </motion.div>
    </Container>
  </Box>
);

export default CashControl;
