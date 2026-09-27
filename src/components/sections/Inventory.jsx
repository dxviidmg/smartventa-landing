'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import HowToReg from '@mui/icons-material/HowToReg';
import Flag from '@mui/icons-material/Flag';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import FactCheck from '@mui/icons-material/FactCheck';
import EditNote from '@mui/icons-material/EditNote';
import PriceCheck from '@mui/icons-material/PriceCheck';
import Lock from '@mui/icons-material/Lock';
import Inventory2 from '@mui/icons-material/Inventory2';
import ManageSearch from '@mui/icons-material/ManageSearch';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CheckCircle from '@mui/icons-material/CheckCircle';
import FileDownload from '@mui/icons-material/FileDownload';
import { sectionPadding, fadeUp } from '../../constants';

const BLUE = '#065a9e';
const BLUE_BG = '#e8f1fb';

const Panel = ({ children }) => (
  <Box sx={{ mt: 2.5, p: 2, borderRadius: 2, bgcolor: '#ffffff', border: '1px solid #e5e7eb' }}>
    {children}
  </Box>
);

const AuditVisual = () => {
  const findings = [
    { label: 'Diferencias de stock', count: 3, color: '#dc2626', bg: 'rgba(220,38,38,0.1)' },
    { label: 'Códigos repetidos', count: 2, color: '#b45309', bg: 'rgba(245,158,11,0.12)' },
    { label: 'Productos sin movimiento', count: 12, color: '#b45309', bg: 'rgba(245,158,11,0.12)' },
    { label: 'Errores de costo o mayoreo', count: 0, color: '#047857', bg: 'rgba(4,120,87,0.1)' },
  ];
  return (
    <Panel>
      <Stack spacing={1}>
        {findings.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.4 }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ py: 0.5 }}>
              <Typography sx={{ fontSize: '0.85rem', color: '#0f172a' }}>{f.label}</Typography>
              {f.count === 0 ? (
                <CheckCircle sx={{ fontSize: 20, color: f.color }} />
              ) : (
                <Box sx={{ minWidth: 28, px: 1, py: 0.2, borderRadius: 1, textAlign: 'center', fontSize: '0.78rem', fontWeight: 700, color: f.color, bgcolor: f.bg }}>
                  {f.count}
                </Box>
              )}
            </Stack>
          </motion.div>
        ))}
      </Stack>
      <Stack direction="row" spacing={0.75} alignItems="center" sx={{ mt: 1.5, pt: 1.5, borderTop: '1px solid #eef2f7', color: BLUE }}>
        <FileDownload sx={{ fontSize: 18 }} />
        <Typography sx={{ fontSize: '0.8rem', fontWeight: 600 }}>Descargar revisión a Excel</Typography>
      </Stack>
    </Panel>
  );
};

const HistoryVisual = () => {
  const events = [
    { time: '09:14', type: 'Venta', user: 'Luis', before: 18, after: 16, color: BLUE },
    { time: '12:40', type: 'Traspaso de Tienda Sur', user: 'Ana', before: 16, after: 22, color: '#7c3aed' },
    { time: '17:05', type: 'Ajuste aprobado', user: 'Dueño', before: 22, after: 21, color: '#dc2626' },
  ];
  return (
    <Panel>
      <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: '#64748b', mb: 1.5 }}>Martillo Truper 16 oz · Hoy</Typography>
      <Box sx={{ position: 'relative', pl: 2.5 }}>
        <Box sx={{ position: 'absolute', left: 5, top: 6, bottom: 6, width: 2, bgcolor: '#e5e7eb' }} />
        <Stack spacing={1.75}>
          {events.map((e, i) => (
            <motion.div
              key={e.time}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.4 }}
            >
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ position: 'absolute', left: -22, top: 4, width: 12, height: 12, borderRadius: '50%', bgcolor: e.color, border: '2px solid #ffffff' }} />
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" spacing={1}>
                  <Box>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 600, color: '#0f172a' }}>{e.type}</Typography>
                    <Typography sx={{ fontSize: '0.75rem', color: '#64748b' }}>{e.time} · {e.user}</Typography>
                  </Box>
                  <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a', whiteSpace: 'nowrap', fontVariantNumeric: 'tabular-nums' }}>
                    {e.before} → <Box component="span" sx={{ color: e.after > e.before ? '#047857' : '#dc2626' }}>{e.after}</Box>
                  </Typography>
                </Stack>
              </Box>
            </motion.div>
          ))}
        </Stack>
      </Box>
    </Panel>
  );
};

const ApprovalVisual = () => (
  <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 2 }}>
    <Box sx={{ flex: 1, px: 1.25, py: 1, borderRadius: 1.5, bgcolor: '#ffffff', border: '1px solid #e5e7eb' }}>
      <Typography sx={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 600 }}>Vendedor pide</Typography>
      <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: '#0f172a' }}>21 → 19</Typography>
    </Box>
    <ArrowForward sx={{ fontSize: 18, color: '#94a3b8', flexShrink: 0 }} />
    <Box sx={{ flex: 1, px: 1.25, py: 1, borderRadius: 1.5, bgcolor: 'rgba(4,120,87,0.08)', border: '1px solid rgba(4,120,87,0.2)' }}>
      <Typography sx={{ fontSize: '0.7rem', color: '#047857', fontWeight: 600 }}>Dueño</Typography>
      <Typography sx={{ fontSize: '0.82rem', fontWeight: 700, color: '#047857' }}>Aprobado</Typography>
    </Box>
  </Stack>
);

const cards = [
  {
    size: 'large', span: 7, icon: ManageSearch, title: 'Auditoría interna', visual: AuditVisual,
    desc: 'Detecta diferencias de stock, movimientos que no cuadran, códigos repetidos, errores de costo o mayoreo y productos sin movimiento.',
  },
  {
    size: 'large', span: 5, icon: Flag, title: 'Historial de cambios de stock', visual: HistoryVisual,
    desc: 'Cada movimiento guarda quién lo hizo, cuándo, y el stock antes y después. Lo que no cuadra queda marcado.',
  },
  { size: 'medium', span: 4, icon: Inventory2, title: 'Stock bajo control', desc: 'Solo el dueño puede cambiar el stock directamente.' },
  {
    size: 'medium', span: 4, icon: HowToReg, title: 'Ajustes con aprobación', visual: ApprovalVisual,
    desc: 'Vendedores y administradores piden el ajuste con la cantidad real. Solo el dueño lo aprueba.',
  },
  { size: 'medium', span: 4, smFull: true, icon: QrCodeScanner, title: 'Traspasos seguros', desc: 'No puedes enviar más de lo que hay. La tienda confirma escaneando lo que recibe, y un producto sin traspaso pendiente se rechaza.' },
  { size: 'small', span: 3, icon: Lock, title: 'Caja protegida', desc: 'Solo el dueño edita o elimina entradas y salidas de dinero.' },
  { size: 'small', span: 3, icon: PriceCheck, title: 'Precios protegidos', desc: 'El costo y el mayoreo no pueden quedar arriba del precio de venta. Solo el dueño edita precios.' },
  { size: 'small', span: 3, icon: FactCheck, title: 'Distribución revisada', desc: 'Cada tienda revisa los productos antes de confirmar. El dueño puede corregir cantidades.' },
  { size: 'small', span: 3, icon: EditNote, title: 'Motivo obligatorio', desc: 'Toda cancelación o devolución guarda por qué se hizo.' },
];

const Inventory = () => (
  <Box sx={{ ...sectionPadding, bgcolor: '#ffffff' }} id="inventory">
    <Container maxWidth="lg">
      <motion.div {...fadeUp}>
        <Stack spacing={1.5} alignItems="center" textAlign="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto' }}>
          <Typography variant="overline" sx={{ color: BLUE, fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
            Inventario y traspasos
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Detalles que evitan pérdidas
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: '1rem', lineHeight: 1.7 }}>
            Controles que protegen tu inventario, tu caja y tus precios.
          </Typography>
        </Stack>
      </motion.div>

      <Box sx={{
        display: 'grid',
        gap: 2.5,
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(12, 1fr)' },
      }}>
        {cards.map((c, i) => {
          const Visual = c.visual;
          const large = c.size === 'large';
          return (
            <Box
              key={c.title}
              sx={{
                gridColumn: {
                  xs: 'auto',
                  sm: large || c.smFull ? 'span 2' : 'auto',
                  md: `span ${c.span}`,
                },
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 4) * 0.06, duration: 0.5 }}
                style={{ height: '100%' }}
              >
                <Box sx={{
                  p: large ? { xs: 2.5, md: 3 } : 2.5,
                  height: '100%', borderRadius: 3,
                  bgcolor: 'background.default',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
                  '&:hover': {
                    borderColor: BLUE,
                    transform: 'translateY(-4px)',
                    boxShadow: '0 12px 24px rgba(6, 90, 158, 0.12)',
                  },
                }}>
                  <Stack direction={large ? 'row' : 'column'} spacing={large ? 1.5 : 0} alignItems={large ? 'center' : 'flex-start'} sx={{ mb: large ? 1 : 0 }}>
                    <Box sx={{
                      width: large ? 44 : 40, height: large ? 44 : 40, borderRadius: 2, mb: large ? 0 : 1.5, flexShrink: 0,
                      bgcolor: BLUE_BG,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <c.icon sx={{ fontSize: large ? 24 : 22, color: BLUE }} />
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: large ? '1.2rem' : '1rem', color: 'text.primary', mb: large ? 0 : 0.75 }}>
                      {c.title}
                    </Typography>
                  </Stack>
                  <Typography sx={{ fontSize: large ? '0.95rem' : '0.9rem', color: 'text.secondary', lineHeight: 1.6 }}>
                    {c.desc}
                  </Typography>
                  {Visual && <Visual />}
                </Box>
              </motion.div>
            </Box>
          );
        })}
      </Box>
    </Container>
  </Box>
);

export default Inventory;
