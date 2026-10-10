'use client';

import { Box, Typography, Stack, Grid } from '@mui/material';
import { motion } from 'framer-motion';

/** Illustrative app windows (sample data, aria-hidden) shown next to each feature group. */
const NAVY = '#0B1B4D';

const Window = ({ title, children }) => (
  <Box aria-hidden="true" sx={{
    borderRadius: 3, overflow: 'hidden', bgcolor: '#FBFCFE',
    boxShadow: '0 24px 60px rgba(0,20,90,0.40), 0 0 0 1px rgba(255,255,255,0.10)',
  }}>
    <Stack direction="row" alignItems="center" spacing={0.75} sx={{ px: 2, py: 1.25, background: 'linear-gradient(90deg, #0B1B4D 0%, #1E40AF 100%)' }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.3)' }} />
      <Typography sx={{ pl: 1, fontSize: '0.8rem', fontWeight: 600, color: '#ffffff' }}>{title}</Typography>
    </Stack>
    <Box sx={{ p: { xs: 2, md: 2.5 } }}>{children}</Box>
  </Box>
);

const TableHead = ({ cols, template }) => (
  <Box sx={{
    display: 'grid', gridTemplateColumns: template, gap: 1,
    px: 1.5, py: 0.9, bgcolor: NAVY, borderRadius: '8px 8px 0 0',
  }}>
    {cols.map((c, i) => (
      <Typography key={c} sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#ffffff', textAlign: i === 0 ? 'left' : 'right' }}>{c}</Typography>
    ))}
  </Box>
);

const Row = ({ cells, template, delay = 0 }) => (
  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.35 }}>
    <Box sx={{
      display: 'grid', gridTemplateColumns: template, gap: 1, alignItems: 'center',
      px: 1.5, py: 1, borderBottom: '1px solid #eef2f7',
    }}>
      {cells.map((c, i) => (
        <Box key={i} sx={{ fontSize: '0.78rem', color: '#0f172a', textAlign: i === 0 ? 'left' : 'right', fontVariantNumeric: 'tabular-nums' }}>{c}</Box>
      ))}
    </Box>
  </motion.div>
);

const Chip = ({ children, color, bg }) => (
  <Box component="span" sx={{ px: 0.9, py: 0.2, borderRadius: 1, fontSize: '0.75rem', fontWeight: 700, color, bgcolor: bg, whiteSpace: 'nowrap' }}>
    {children}
  </Box>
);

export const SaleMockup = () => {
  const template = '2.2fr 0.8fr 1fr 1fr';
  return (
    <Window title="Tienda Centro · Venta">
      <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
        {['Venta 1 (3)', 'Venta 2 (1)', 'Venta 3 (2)'].map((t, i) => (
          <Box key={t} sx={{
            px: 1.25, py: 0.5, borderRadius: 1.5, fontSize: '0.72rem', fontWeight: 600,
            color: i === 0 ? '#ffffff' : '#475569', bgcolor: i === 0 ? '#0B1B4D' : '#f1f5f9',
          }}>{t}</Box>
        ))}
        <Box sx={{ px: 1, py: 0.5, fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>+</Box>
      </Stack>
      <TableHead cols={['Producto', 'Cant.', 'Precio', 'Subtotal']} template={template} />
      <Row template={template} delay={0.1} cells={['Martillo 16 oz', '1', '$189.00', '$189.00']} />
      <Row template={template} delay={0.2} cells={['Clavo 2" (kg)', '2.5 kg', '$45.00', '$112.50']} />
      <Row template={template} delay={0.3} cells={[
        <Stack key="p" direction="row" spacing={0.75} alignItems="center"><span>Cinta de aislar</span><Chip color="#047857" bg="rgba(4,120,87,0.1)">Mayoreo</Chip></Stack>,
        '12', '$15.00', '$180.00',
      ]} />
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'stretch', sm: 'center' }} spacing={1.5} sx={{ mt: 2 }}>
        <Stack direction="row" spacing={1}>
          <Chip color="#0B1B4D" bg="#E8EEF6">Efectivo $300.00</Chip>
          <Chip color="#0B1B4D" bg="#E8EEF6">Tarjeta $181.50</Chip>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="flex-end">
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>$481.50</Typography>
          <Box sx={{ px: 2, py: 0.75, borderRadius: 1.5, bgcolor: '#047857', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700 }}>Cobrar</Box>
        </Stack>
      </Stack>
    </Window>
  );
};

export const CashMockup = () => {
  const template = '1.5fr 1fr';
  return (
    <Window title="Tienda Centro · Corte de caja">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TableHead cols={['Forma de pago', 'Monto']} template={template} />
          <Row template={template} delay={0.1} cells={['Efectivo', '$8,420.00']} />
          <Row template={template} delay={0.15} cells={['Tarjeta', '$5,130.00']} />
          <Row template={template} delay={0.2} cells={['Transferencia', '$2,300.00']} />
          <Row template={template} delay={0.25} cells={[<b key="t">Total ventas</b>, <b key="v">$15,850.00</b>]} />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TableHead cols={['Entradas y salidas', 'Monto']} template={template} />
          <Row template={template} delay={0.3} cells={['Fondo de caja', <Box key="a" component="span" sx={{ color: '#047857' }}>+$500.00</Box>]} />
          <Row template={template} delay={0.35} cells={['Pago a proveedor', <Box key="b" component="span" sx={{ color: '#dc2626' }}>-$1,200.00</Box>]} />
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.45, duration: 0.4 }}>
            <Box sx={{ mt: 2, p: 1.75, borderRadius: 2, bgcolor: 'rgba(4,120,87,0.08)', border: '1px solid rgba(4,120,87,0.2)' }}>
              <Typography sx={{ fontSize: '0.72rem', fontWeight: 600, color: '#047857' }}>Ganancia del día</Typography>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: '#047857', fontVariantNumeric: 'tabular-nums' }}>$4,760.00</Typography>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Window>
  );
};

export const InventoryMockup = () => {
  const template = '1.1fr 1fr 0.7fr 0.7fr';
  const rows = [
    { type: 'Venta', color: '#0B1B4D', bg: '#E8EEF6', user: 'Luis', before: 18, after: 16 },
    { type: 'Traspaso', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)', user: 'Ana', before: 16, after: 22 },
    { type: 'Desempaque', color: '#b45309', bg: 'rgba(245,158,11,0.12)', user: 'Ana', before: 22, after: 42 },
    { type: 'Ajuste', color: '#dc2626', bg: 'rgba(220,38,38,0.1)', user: 'Dueño', before: 42, after: 41 },
  ];
  return (
    <Window title="Historial · Croquetas 20 kg">
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Movimientos de hoy</Typography>
        <Chip color="#047857" bg="rgba(4,120,87,0.1)">Inventario actual: 41 kg</Chip>
      </Stack>
      <TableHead cols={['Movimiento', 'Usuario', 'Antes', 'Después']} template={template} />
      {rows.map((r, i) => (
        <Row key={r.type} template={template} delay={0.1 + i * 0.08} cells={[
          <Chip key="c" color={r.color} bg={r.bg}>{r.type}</Chip>,
          r.user,
          r.before,
          <Box key="d" component="span" sx={{ fontWeight: 700, color: r.after > r.before ? '#047857' : '#dc2626' }}>{r.after}</Box>,
        ]} />
      ))}
    </Window>
  );
};

export const BranchesMockup = () => {
  const stores = [
    { name: 'Tienda Centro', value: 3450, pct: 100, dot: '#10b981' },
    { name: 'Tienda Sur', value: 2650, pct: 77, dot: '#f59e0b' },
    { name: 'Tienda Norte', value: 1980, pct: 57, dot: '#dc2626' },
  ];
  return (
    <Window title="Todas las sucursales · Hoy">
      <Stack spacing={2}>
        {stores.map((st, i) => (
          <Box key={st.name}>
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 0.75 }}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: st.dot }} />
                <Typography sx={{ fontSize: '0.82rem', fontWeight: 600, color: '#0f172a' }}>{st.name}</Typography>
              </Stack>
              <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>
                ${st.value.toLocaleString('en-US')}
              </Typography>
            </Stack>
            <Box sx={{ height: 10, borderRadius: 5, bgcolor: '#eef2f7', overflow: 'hidden' }}>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${st.pct}%` }}
                transition={{ delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                style={{ height: '100%', borderRadius: 5, background: 'linear-gradient(90deg, #0B1B4D 0%, #1D4ED8 100%)' }}
              />
            </Box>
          </Box>
        ))}
        <Stack direction="row" spacing={1} sx={{ pt: 0.5 }} flexWrap="wrap" useFlexGap>
          <Chip color="#7c3aed" bg="rgba(124,58,237,0.1)">2 traspasos pendientes</Chip>
          <Chip color="#0B1B4D" bg="#E8EEF6">1 distribución en camino</Chip>
        </Stack>
      </Stack>
    </Window>
  );
};
