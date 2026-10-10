'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CheckCircle from '@mui/icons-material/CheckCircle';

import { POPPINS, GRADIENT, BLUE_BG, SURFACE_MUTED, pillSx, amberSx, NAVY, PRIMARY, SURFACE, BORDER } from '../../constants';
import SectionHeading from '../ui/SectionHeading';
import { usePricing, formatPriceDecimals, MAX_UNITS_WITH_PRICE } from '../../hooks/usePricing';

const INCLUDED = [
  'Punto de venta, caja e inventario',
  'Traspasos y distribuciones entre sucursales',
  'Tableros de ventas, auditoría y cambios masivos de precios',
  'Vendedores ilimitados sin costo',
  'Catálogo cargado por nosotros sin costo',
  'Soporte directo por WhatsApp',
  'Mes a mes, listo para usar desde el navegador',
];

const pillBtn = () => ({ ...pillSx, ...amberSx, px: '40px', py: '13px' });

const PriceBlock = ({ p, dark, size = 56 }) =>
  p.needsQuote ? (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 20, color: dark ? '#fff' : PRIMARY, lineHeight: 1.4 }}>¿Tienes más de 10 sucursales?</Typography>
      <Typography sx={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.9)' : '#475569', mt: 0.5 }}>Contáctanos para obtener un precio personalizado.</Typography>
    </Box>
  ) : (
    <Box sx={{ textAlign: 'center' }}>
      <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.75}>
        <Typography sx={{ fontFamily: POPPINS, fontWeight: 600, fontSize: { xs: size * 0.75, md: size }, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums', ...(dark ? { color: '#fff' } : { background: GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }) }}>
          {formatPriceDecimals(p.price)}
        </Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 500, color: dark ? 'rgba(255,255,255,0.9)' : '#475569' }}>/mes MXN</Typography>
      </Stack>
      <Typography sx={{ fontSize: 13, mt: 0.25, color: dark ? 'rgba(255,255,255,0.85)' : '#64748B' }}>Precio final</Typography>
      {p.pricePerUnit && (
        <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 0.5, color: dark ? '#BBF7D0' : '#047857' }}>
          {p.stores === 1 ? 'Empieza hoy y vende desde el navegador' : `${formatPriceDecimals(p.pricePerUnit)} por sucursal`}
        </Typography>
      )}
    </Box>
  );

const Included = ({ dark, columns }) => (
  <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 1.75, gridTemplateColumns: columns ? { xs: '1fr', sm: 'repeat(2, 1fr)' } : '1fr' }}>
    {INCLUDED.map((t) => (
      <Stack component="li" key={t} direction="row" spacing={1.25} alignItems="flex-start">
        <CheckCircle aria-hidden="true" sx={{ color: dark ? '#BAE6FD' : PRIMARY, fontSize: 20, flexShrink: 0, mt: '1px' }} />
        <Typography sx={{ fontSize: 15, color: dark ? '#fff' : '#475569' }}>{t}</Typography>
      </Stack>
    ))}
  </Box>
);

const Pricing = () => {
  const p = usePricing();
  const sliderValue = Math.min(p.stores, MAX_UNITS_WITH_PRICE + 1);

  return (
    <Box component="section" id="pricing" aria-labelledby="pricing-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: SURFACE_MUTED, scrollMarginTop: '80px' }}>
      <Container maxWidth="md">
        <SectionHeading id="pricing-title" eyebrow="Precios transparentes" title="Un precio por sucursal que baja al crecer" subtitle="Elige cuántas sucursales tienes y ve cuánto pagarías al mes. Entre más sucursales, menos pagas por cada una." maxWidth={680} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, borderRadius: '28px', border: `1px solid ${BORDER}`, overflow: 'hidden', boxShadow: '0 20px 44px rgba(15,23,42,0.14)', maxWidth: 880, mx: 'auto' }}>
          <Box sx={{ p: { xs: 3, sm: 4.5 }, bgcolor: SURFACE }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography component="label" htmlFor="pricing-range" sx={{ display: 'block', fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: '#0F172A' }}>
                ¿Cuántas sucursales tienes? <Box component="span" sx={{ display: 'block', fontFamily: 'inherit', fontWeight: 400, fontSize: 14, color: '#475569', mt: 0.5 }}>Cada tienda y cada almacén cuenta como una sucursal.</Box>
              </Typography>
            </Box>
            <Box
              component="input"
              id="pricing-range"
              type="range"
              min={1}
              max={MAX_UNITS_WITH_PRICE + 1}
              value={sliderValue}
              onChange={(e) => p.setStores(Number(e.target.value))}
              aria-valuetext={p.needsQuote ? 'Más de 10 sucursales' : `${p.stores} sucursal${p.stores > 1 ? 'es' : ''}`}
              sx={{ width: '100%', height: 44, accentColor: NAVY, cursor: 'pointer', display: 'block' }}
            />
            <Stack direction="row" justifyContent="space-between" aria-hidden="true" sx={{ px: 0.5, mb: 2.5 }}>
              {Array.from({ length: MAX_UNITS_WITH_PRICE + 1 }, (_, i) => (
                <Typography key={i} sx={{ fontSize: 12, color: sliderValue === i + 1 ? PRIMARY : '#94A3B8', fontWeight: sliderValue === i + 1 ? 700 : 400 }}>
                  {i + 1 > MAX_UNITS_WITH_PRICE ? '10+' : i + 1}
                </Typography>
              ))}
            </Stack>
            <Box sx={{ py: 2.5, mb: 2.5, borderRadius: '20px', bgcolor: SURFACE_MUTED, border: `1px solid ${BORDER}` }}>
              <PriceBlock p={p} size={48} />
            </Box>
            <Button variant="contained" fullWidth endIcon={<ArrowForward />} onClick={p.cta} sx={pillBtn()}>{p.ctaLabel}</Button>
          </Box>
          <Box sx={{ p: { xs: 3, sm: 4.5 }, background: BLUE_BG, color: '#fff' }}>
            <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 18, mb: 3 }}>Qué incluye cada plan</Typography>
            <Included dark />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;
