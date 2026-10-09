'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CheckCircle from '@mui/icons-material/CheckCircle';

import { POPPINS, GRADIENT, BLUE_BG, pillSx, amberSx } from '../../constants';
import SectionHeading from '../ui/SectionHeading';
import { usePricing, formatPrice, formatPriceDecimals, MAX_UNITS_WITH_PRICE } from '../../hooks/usePricing';

const INCLUDED = [
  'Punto de venta, inventario y traspasos',
  'Distribuciones entre sucursales',
  'Cambios masivos de precios',
  'Soporte directo por WhatsApp',
  'Mes a mes, listo para usar desde el navegador',
];

const pillBtn = () => ({ ...pillSx, ...amberSx, px: '40px', py: '13px' });

const PriceBlock = ({ p, dark, size = 56 }) =>
  p.needsQuote ? (
    <Box sx={{ textAlign: 'center' }}>
      <Typography sx={{ fontFamily: POPPINS, fontWeight: 500, fontSize: 20, color: dark ? '#fff' : '#0030AB', lineHeight: 1.4 }}>¿Tienes más de 10 sucursales?</Typography>
      <Typography sx={{ fontSize: 14, color: dark ? 'rgba(255,255,255,0.9)' : '#5B6472', mt: 0.5 }}>Contáctanos para obtener un precio personalizado.</Typography>
    </Box>
  ) : (
    <Box sx={{ textAlign: 'center' }}>
      <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.75}>
        <Typography sx={{ fontFamily: POPPINS, fontWeight: 600, fontSize: { xs: size * 0.75, md: size }, lineHeight: 1.1, fontVariantNumeric: 'tabular-nums', ...(dark ? { color: '#fff' } : { background: GRADIENT, WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }) }}>
          {formatPrice(p.price)}
        </Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 500, color: dark ? 'rgba(255,255,255,0.9)' : '#5B6472' }}>/mes MXN</Typography>
      </Stack>
      {p.hasDiscount && (
        <Typography sx={{ fontSize: 14, fontWeight: 600, mt: 0.5, color: dark ? '#BBF7D0' : '#047857' }}>{formatPriceDecimals(p.pricePerUnit)} por sucursal</Typography>
      )}
    </Box>
  );

const Included = ({ dark, columns }) => (
  <Box component="ul" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 1.75, gridTemplateColumns: columns ? { xs: '1fr', sm: 'repeat(2, 1fr)' } : '1fr' }}>
    {INCLUDED.map((t) => (
      <Stack component="li" key={t} direction="row" spacing={1.25} alignItems="flex-start">
        <CheckCircle aria-hidden="true" sx={{ color: dark ? '#BAE6FD' : '#0030AB', fontSize: 20, flexShrink: 0, mt: '1px' }} />
        <Typography sx={{ fontSize: 15, color: dark ? '#fff' : '#475569' }}>{t}</Typography>
      </Stack>
    ))}
  </Box>
);

const Pricing = () => {
  const p = usePricing();
  const sliderValue = Math.min(p.stores, MAX_UNITS_WITH_PRICE + 1);

  return (
    <Box component="section" id="pricing" aria-labelledby="pricing-title" sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff', scrollMarginTop: '80px' }}>
      <Container maxWidth="md">
        <SectionHeading id="pricing-title" eyebrow="Precios transparentes" title="Paga solo por lo que usas" subtitle="Un precio claro que baja por sucursal conforme creces." maxWidth={680} />
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, borderRadius: '28px', border: '1px solid #DBEAFE', overflow: 'hidden', boxShadow: '0 20px 44px rgba(0,60,180,0.10)', maxWidth: 880, mx: 'auto' }}>
          <Box sx={{ p: { xs: 3, sm: 4.5 }, bgcolor: '#fff' }}>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              <Typography component="label" htmlFor="pricing-range" sx={{ display: 'block', fontFamily: POPPINS, fontWeight: 500, fontSize: 18, color: '#242F3E' }}>
                ¿Cuántas sucursales tienes?
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
              sx={{ width: '100%', height: 44, accentColor: '#0030AB', cursor: 'pointer', display: 'block' }}
            />
            <Stack direction="row" justifyContent="space-between" aria-hidden="true" sx={{ px: 0.5, mb: 2.5 }}>
              {Array.from({ length: MAX_UNITS_WITH_PRICE + 1 }, (_, i) => (
                <Typography key={i} sx={{ fontSize: 12, color: sliderValue === i + 1 ? '#0030AB' : '#94A3B8', fontWeight: sliderValue === i + 1 ? 700 : 400 }}>
                  {i + 1 > MAX_UNITS_WITH_PRICE ? '10+' : i + 1}
                </Typography>
              ))}
            </Stack>
            <Box sx={{ py: 2.5, mb: 2.5, borderRadius: '20px', bgcolor: '#F5F9FF', border: '1px solid #E6EDF5' }}>
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
