'use client';

import { useRef, useState, useCallback, useEffect } from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { sectionPadding, fadeUp } from '../../constants';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

import Transform from '@mui/icons-material/Transform';
import Scale from '@mui/icons-material/Scale';
import PointOfSale from '@mui/icons-material/PointOfSale';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Payment from '@mui/icons-material/Payment';
import AccountBalance from '@mui/icons-material/AccountBalance';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import UploadFile from '@mui/icons-material/UploadFile';
import Assessment from '@mui/icons-material/Assessment';
import TrendingUp from '@mui/icons-material/TrendingUp';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import People from '@mui/icons-material/People';
import Badge from '@mui/icons-material/Badge';
import Security from '@mui/icons-material/Security';
import History from '@mui/icons-material/History';
import Print from '@mui/icons-material/Print';

const features = [
  { icon: <Transform />, title: 'Conversión de unidades', desc: 'Cajas a piezas, costales a kilos. Configura la equivalencia una vez y convierte con un clic.', accent: '#ec4899' },
  { icon: <Scale />, title: 'Venta a granel', desc: 'Vende por kilo, fracción o "20 pesos de…" y el sistema calcula lo proporcional.', accent: '#f97316' },
  { icon: <PointOfSale />, title: 'Crear productos al vender', desc: 'Si no existe en el catálogo, lo creas directo desde la venta sin interrumpir al cliente.', accent: '#22c55e' },
  { icon: <AttachMoney />, title: 'Cambio masivo de precios', desc: 'Actualiza costo, precio unitario y mayoreo de múltiples productos a la vez.', accent: '#eab308' },
  { icon: <BookmarkAdded />, title: 'Apartados', desc: 'Reserva productos para un cliente sin cobrar el total. El stock se descuenta automáticamente.', accent: '#0891b2' },
  { icon: <Payment />, title: 'Pagos mixtos', desc: 'Una misma venta puede pagarse con efectivo, tarjeta y transferencia combinados.', accent: '#6366f1' },
  { icon: <AccountBalance />, title: 'Corte de caja', desc: 'Resumen por método de pago, movimientos de entrada/salida y exportación a Excel.', accent: '#10b981' },
  { icon: <Assessment />, title: 'Dashboard de ventas', desc: 'KPIs, productos destacados, rendimiento por tienda y vendedor.', accent: '#8b5cf6' },
  { icon: <TrendingUp />, title: 'Rentabilidad', desc: 'Consulta la utilidad de tus operaciones y cuánto tienes invertido en mercancía.', accent: '#f59e0b' },
  { icon: <History />, title: 'Kardex de inventario', desc: 'Historial completo de cada producto: ventas, traspasos, distribuciones y ajustes.', accent: '#14b8a6' },
  { icon: <People />, title: 'Clientes y descuentos', desc: 'Historial de compras y descuentos personalizados por cliente.', accent: '#a855f7' },
  { icon: <Badge />, title: 'Vendedores', desc: 'Asigna vendedores a tiendas y consulta sus ventas individuales.', accent: '#f97316' },
  { icon: <UploadFile />, title: 'Importación desde Excel', desc: 'Sube tu catálogo completo con plantillas y validación previa.', accent: '#0ea5e9' },
  { icon: <Security />, title: 'Roles y permisos', desc: 'Dueño, administrador y vendedor — cada quien ve lo que necesita.', accent: '#d946ef' },
  { icon: <QrCodeScanner />, title: 'Código de barras', desc: 'Compatible con lectores USB y Bluetooth.', accent: '#22c55e' },
  { icon: <Print />, title: 'Tickets e impresión', desc: 'Compatible con impresoras térmicas estándar.', accent: '#6366f1' },
];

const CARD_GAP = 16;

const Features = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, [checkScroll]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.querySelector('[data-card]');
    if (!cardEl) return;
    el.scrollBy({ left: dir * (cardEl.offsetWidth + CARD_GAP), behavior: 'smooth' });
  };

  return (
    <div id="features">
      <Box sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between" alignItems={{ xs: 'flex-start', sm: 'flex-end' }} sx={{ mb: 5 }}>
            <motion.div {...fadeUp}>
              <Stack spacing={1}>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
                  Todo incluido
                </Typography>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' } }}>
                  Todo incluido desde el primer día
                </Typography>
                <Typography sx={{ color: 'text.secondary', fontSize: '1rem', maxWidth: 480 }}>
                  Sin módulos extra ni funciones bloqueadas.
                </Typography>
              </Stack>
            </motion.div>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', sm: 'flex' }, mt: { xs: 2, sm: 0 } }}>
              <IconButton
                onClick={() => scroll(-1)}
                disabled={!canScrollLeft}
                aria-label="Anterior"
                sx={{
                  width: 44, height: 44,
                  border: '1.5px solid',
                  borderColor: canScrollLeft ? 'primary.light' : 'divider',
                  color: canScrollLeft ? 'primary.main' : 'text.disabled',
                  '&:hover:not(:disabled)': { bgcolor: 'rgba(4,52,107,0.06)' },
                }}
              >
                <ChevronLeft />
              </IconButton>
              <IconButton
                onClick={() => scroll(1)}
                disabled={!canScrollRight}
                aria-label="Siguiente"
                sx={{
                  width: 44, height: 44,
                  border: '1.5px solid',
                  borderColor: canScrollRight ? 'primary.light' : 'divider',
                  color: canScrollRight ? 'primary.main' : 'text.disabled',
                  '&:hover:not(:disabled)': { bgcolor: 'rgba(4,52,107,0.06)' },
                }}
              >
                <ChevronRight />
              </IconButton>
            </Stack>
          </Stack>

          {/* Carousel inside Container */}
          <Box
            ref={scrollRef}
            role="region"
            aria-label="Funcionalidades de SmartVenta"
            tabIndex={0}
            sx={{
              display: 'flex',
              gap: `${CARD_GAP}px`,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              scrollBehavior: 'smooth',
              pb: 1,
              scrollbarWidth: 'none',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {features.map((f, i) => (
              <Box
                key={i}
                data-card
                sx={{
                  minWidth: { xs: '80vw', sm: `calc((100% - ${CARD_GAP * 2}px) / 3)` },
                  maxWidth: { xs: '80vw', sm: `calc((100% - ${CARD_GAP * 2}px) / 3)` },
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                }}
              >
                <Stack
                  spacing={1.5}
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid',
                    borderColor: 'divider',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                    '&:hover': {
                      borderColor: f.accent,
                      boxShadow: `0 4px 20px ${f.accent}12`,
                    },
                  }}
                >
                  <Box sx={{
                    width: 40, height: 40, borderRadius: 2.5,
                    bgcolor: `${f.accent}10`, color: f.accent,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    '& svg': { fontSize: 20 },
                  }}>
                    {f.icon}
                  </Box>
                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.65, fontSize: '0.85rem' }}>
                    {f.desc}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default Features;
