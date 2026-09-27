'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack, Grid } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/icons-material/Badge';
import LocalOffer from '@mui/icons-material/LocalOffer';
import History from '@mui/icons-material/History';
import PriceChange from '@mui/icons-material/PriceChange';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SyncAlt from '@mui/icons-material/SyncAlt';
import Smartphone from '@mui/icons-material/Smartphone';
import Print from '@mui/icons-material/Print';
import Savings from '@mui/icons-material/Savings';
import Insights from '@mui/icons-material/Insights';
import TrendingDown from '@mui/icons-material/TrendingDown';
import Payments from '@mui/icons-material/Payments';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Sell from '@mui/icons-material/Sell';
import UploadFile from '@mui/icons-material/UploadFile';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Inventory2 from '@mui/icons-material/Inventory2';
import Scale from '@mui/icons-material/Scale';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import AssignmentReturn from '@mui/icons-material/AssignmentReturn';

import { sectionPadding, cardGridItem } from '../../constants';

const NAVY = '#1e3a6b';

const Window = ({ title, children }) => (
  <Box sx={{
    borderRadius: 3, overflow: 'hidden', bgcolor: '#ffffff',
    boxShadow: '0 24px 60px rgba(2,35,71,0.45), 0 0 0 1px rgba(255,255,255,0.08)',
  }}>
    <Stack direction="row" alignItems="center" spacing={0.75} sx={{ px: 2, py: 1.25, background: 'linear-gradient(90deg, #022347 0%, #04346b 100%)' }}>
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
      <Typography key={c} sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#ffffff', textAlign: i === 0 ? 'left' : 'right' }}>{c}</Typography>
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
  <Box component="span" sx={{ px: 0.9, py: 0.2, borderRadius: 1, fontSize: '0.65rem', fontWeight: 700, color, bgcolor: bg, whiteSpace: 'nowrap' }}>
    {children}
  </Box>
);

const SaleMockup = () => {
  const template = '2.2fr 0.8fr 1fr 1fr';
  return (
    <Window title="Tienda Centro · Venta">
      <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
        {['Venta 1 (3)', 'Venta 2 (1)', 'Venta 3 (2)'].map((t, i) => (
          <Box key={t} sx={{
            px: 1.25, py: 0.5, borderRadius: 1.5, fontSize: '0.72rem', fontWeight: 600,
            color: i === 0 ? '#ffffff' : '#475569', bgcolor: i === 0 ? '#04346b' : '#f1f5f9',
          }}>{t}</Box>
        ))}
        <Box sx={{ px: 1, py: 0.5, fontSize: '0.8rem', fontWeight: 700, color: '#475569' }}>+</Box>
      </Stack>
      <TableHead cols={['Producto', 'Cant.', 'Precio', 'Subtotal']} template={template} />
      <Row template={template} delay={0.1} cells={['Martillo Truper 16 oz', '1', '$189.00', '$189.00']} />
      <Row template={template} delay={0.2} cells={['Clavo 2" (kg)', '2.5 kg', '$45.00', '$112.50']} />
      <Row template={template} delay={0.3} cells={[
        <Stack key="p" direction="row" spacing={0.75} alignItems="center"><span>Cinta de aislar 3M</span><Chip color="#047857" bg="rgba(4,120,87,0.1)">Mayoreo</Chip></Stack>,
        '12', '$15.00', '$180.00',
      ]} />
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'stretch', sm: 'center' }} spacing={1.5} sx={{ mt: 2 }}>
        <Stack direction="row" spacing={1}>
          <Chip color="#04346b" bg="#e8f1fb">Efectivo $300.00</Chip>
          <Chip color="#04346b" bg="#e8f1fb">Tarjeta $181.50</Chip>
        </Stack>
        <Stack direction="row" spacing={1.5} alignItems="center" justifyContent="flex-end">
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', fontVariantNumeric: 'tabular-nums' }}>$481.50</Typography>
          <Box sx={{ px: 2, py: 0.75, borderRadius: 1.5, bgcolor: '#10b981', color: '#ffffff', fontSize: '0.8rem', fontWeight: 700 }}>Cobrar</Box>
        </Stack>
      </Stack>
    </Window>
  );
};

const CashMockup = () => {
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

const InventoryMockup = () => {
  const template = '1.1fr 1fr 0.7fr 0.7fr';
  const rows = [
    { type: 'Venta', color: '#04346b', bg: '#e8f1fb', user: 'Luis', before: 18, after: 16 },
    { type: 'Traspaso', color: '#7c3aed', bg: 'rgba(124,58,237,0.1)', user: 'Ana', before: 16, after: 22 },
    { type: 'Desempaque', color: '#b45309', bg: 'rgba(245,158,11,0.12)', user: 'Ana', before: 22, after: 42 },
    { type: 'Ajuste', color: '#dc2626', bg: 'rgba(220,38,38,0.1)', user: 'Dueño', before: 42, after: 41 },
  ];
  return (
    <Window title="Historial · Croquetas 20 kg">
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1.5 }}>
        <Typography sx={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Movimientos de hoy</Typography>
        <Chip color="#047857" bg="rgba(4,120,87,0.1)">Stock actual: 41 kg</Chip>
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

const BranchesMockup = () => {
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
                style={{ height: '100%', borderRadius: 5, background: 'linear-gradient(90deg, #04346b 0%, #065a9e 100%)' }}
              />
            </Box>
          </Box>
        ))}
        <Stack direction="row" spacing={1} sx={{ pt: 0.5 }} flexWrap="wrap" useFlexGap>
          <Chip color="#7c3aed" bg="rgba(124,58,237,0.1)">2 traspasos pendientes</Chip>
          <Chip color="#04346b" bg="#e8f1fb">1 distribución en camino</Chip>
        </Stack>
      </Stack>
    </Window>
  );
};

const tabs = [
  {
    key: 'vender', label: 'Vender', mockup: SaleMockup,
    features: [
      { icon: AddShoppingCart, title: 'Multiventa', desc: 'Abre una pestaña por cliente. Atiende a varios a la vez en hora pico sin mezclar sus productos.' },
      { icon: Payments, title: 'Cobro flexible', desc: 'Efectivo, tarjeta, transferencia o combinados en una misma venta. El cambio se calcula solo.' },
      { icon: Sell, title: 'Precio de mayoreo', desc: 'Define el precio de mayoreo y la cantidad mínima. Al llegar a esa cantidad, el precio cambia solo.' },
      { icon: Scale, title: 'Productos por unidad y a granel', desc: 'Cada producto tiene marca, departamento y unidad: pieza, kilo, costal, litro, metro o bote. En kilo o litro vende también por monto: "dame $20 de queso".' },
      { icon: Print, title: 'Compatible con escáner e impresora', desc: 'En computadora usa tu lector de código de barras e imprime tickets en impresora térmica.' },
      { icon: Smartphone, title: 'Compatible con celular', desc: 'Vende desde el celular o la tableta. Escanea códigos de barras con la cámara, sin necesidad de lector.' },
    ],
  },
  {
    key: 'caja', label: 'Caja y clientes', mockup: CashMockup,
    features: [
      { icon: PointOfSale, title: 'Corte de caja con entradas y salidas', desc: 'Ventas por forma de pago y cada entrada y salida de dinero con concepto y monto, todo en un solo resumen.' },
      { icon: Savings, title: 'Ganancia del día o del periodo', desc: 'Conoce el costo y la ganancia de tus ventas. Sabe cuánto ganaste hoy o en cualquier periodo.' },
      { icon: LocalOffer, title: 'Clientes y descuentos', desc: 'Guarda a tus clientes con su descuento. Al venderles, el descuento se aplica solo al cobrar.' },
      { icon: BookmarkAdded, title: 'Apartados con abonos', desc: 'Aparta con anticipo y registra abonos hasta liquidar. Lo apartado ya no se le vende a otro cliente.' },
      { icon: AssignmentReturn, title: 'Devoluciones y cancelaciones', desc: 'Devuelve parte de una venta o cancélala completa. Siempre queda registrado el motivo.' },
    ],
  },
  {
    key: 'inventario', label: 'Inventario y catálogo', mockup: InventoryMockup,
    features: [
      { icon: History, title: 'Historial de cambio de stock', desc: 'Cada movimiento registra quién lo hizo, cuándo y cuánto cambió. Revisa hasta 12 meses de cada producto.' },
      { icon: PriceChange, title: 'Cambio de precios masivo con historial', desc: 'Cambia costo, precio y mayoreo de varios productos a la vez, en 2 clics. Cada cambio queda registrado: antes, después, fecha y quién lo hizo.' },
      { icon: PhotoCamera, title: 'Catálogo con fotos', desc: 'Toma la foto con el celular. Al vender ves foto, precio y stock, y no confundes productos parecidos.' },
      { icon: Inventory2, title: 'Desempaque', desc: 'Un costal de 20 kg de comida para perro se convierte en 20 kg para vender a granel. Con un clic.' },
      { icon: UploadFile, title: 'Importa tu catálogo desde Excel', desc: 'El sistema revisa los errores antes de importar. Carga hasta 5,000 productos en segundos.' },
    ],
  },
  {
    key: 'sucursales', label: 'Sucursales y análisis', mockup: BranchesMockup,
    features: [
      { icon: SyncAlt, title: 'Traspaso entre tiendas', desc: 'Ve el stock de otras tiendas y pide mercancía con un botón. El traspaso se confirma al escanear los productos.' },
      { icon: LocalShipping, title: 'Distribución desde almacén', desc: 'El almacén arma los envíos viendo el stock de todas las tiendas. Cada tienda revisa y confirma lo que recibe.' },
      { icon: Insights, title: 'Tableros de ventas', desc: 'Gráficas de ventas, ganancia y ticket promedio. Descubre tu mejor tienda, día y hora, y compara tus sucursales.' },
      { icon: TrendingDown, title: 'Gráficas de cancelaciones y devoluciones', desc: 'Cuánto se cancela o devuelve, en qué tienda, qué días y horas, y por qué motivo.' },
      { icon: Badge, title: 'Vendedores y permisos', desc: 'Crea vendedores ilimitados en cada tienda y consulta cuánto vendió cada uno. Tres roles: dueño, administrador y vendedor.' },
    ],
  },
];

const ProductShowcase = () => {
  const [active, setActive] = useState(0);
  const tab = tabs[active];
  const Mockup = tab.mockup;

  useEffect(() => {
    const timer = setTimeout(() => setActive((prev) => (prev + 1) % tabs.length), 10000);
    return () => clearTimeout(timer);
  }, [active]);

  return (
    <Box sx={{ ...sectionPadding, background: 'radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px) 0 0 / 22px 22px, linear-gradient(145deg, #022347 0%, #04346b 50%, #065a9e 100%)' }} id="product">
      <Container maxWidth="lg">
        <motion.div {...cardGridItem} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
          <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 5 }}>
            <Typography variant="overline" sx={{ color: '#93c5fd', fontWeight: 700, letterSpacing: 2, fontSize: '0.78rem' }}>
              Punto de venta
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, color: '#ffffff' }}>
              Punto de venta poderoso
            </Typography>
            <Typography sx={{ color: '#e5e7eb', fontSize: '1.05rem', lineHeight: 1.6, maxWidth: 700 }}>
              Diseñado para vender más rápido, sin errores, y con control total del inventario.
            </Typography>
          </Stack>

          <Box sx={{ display: 'flex', justifyContent: { xs: 'flex-start', md: 'center' }, overflowX: 'auto', mb: 5, pb: 0.5 }}>
            <Stack direction="row" spacing={1} sx={{ p: 0.75, borderRadius: 999, bgcolor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', flexShrink: 0 }}>
              {tabs.map((t, i) => (
                <Box
                  key={t.key}
                  component="button"
                  onClick={() => setActive(i)}
                  sx={{
                    position: 'relative', border: 0, cursor: 'pointer', font: 'inherit',
                    px: { xs: 1.75, md: 2.5 }, py: 1, borderRadius: 999, whiteSpace: 'nowrap',
                    fontSize: '0.9rem', fontWeight: 600,
                    bgcolor: 'transparent',
                    color: i === active ? '#04346b' : 'rgba(255,255,255,0.75)',
                    transition: 'color 0.25s ease',
                    '&:hover': { color: i === active ? '#04346b' : '#ffffff' },
                  }}
                >
                  {i === active && (
                    <motion.div
                      layoutId="showcase-tab"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      style={{ position: 'absolute', inset: 0, borderRadius: 999, background: '#ffffff' }}
                    />
                  )}
                  <Box component="span" sx={{ position: 'relative' }}>{t.label}</Box>
                </Box>
              ))}
            </Stack>
          </Box>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab.key}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                <Grid size={{ xs: 12, md: 5 }}>
                  <Stack spacing={2.25}>
                    {tab.features.map((f) => (
                      <Stack key={f.title} direction="row" spacing={1.75} alignItems="flex-start">
                        <Box sx={{
                          width: 36, height: 36, borderRadius: 2, flexShrink: 0,
                          bgcolor: 'rgba(255,255,255,0.12)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          <f.icon sx={{ fontSize: 20, color: '#ffffff' }} />
                        </Box>
                        <Box>
                          <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', color: '#ffffff', mb: 0.25 }}>{f.title}</Typography>
                          <Typography sx={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.55 }}>{f.desc}</Typography>
                        </Box>
                      </Stack>
                    ))}
                  </Stack>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                  <Mockup />
                </Grid>
              </Grid>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Container>
    </Box>
  );
};

export default ProductShowcase;
