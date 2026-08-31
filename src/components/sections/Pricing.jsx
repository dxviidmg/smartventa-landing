'use client';

import { useState, useMemo } from 'react';
import { Box, Container, Typography, Stack, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import WarehouseOutlined from '@mui/icons-material/WarehouseOutlined';
import { useWhatsApp } from '../../contexts/WhatsAppContext';
import { cardGridItem, ctaButtonSx, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';

const PRICE_TABLE = { 1: 399, 2: 799, 3: 1199, 4: 1499, 5: 1799, 6: 2199, 7: 2499, 8: 2799, 9: 3099, 10: 3399 };
const MAX_UNITS_WITH_PRICE = 10;
const MIN_TOTAL_UNITS = 1;

const formatPrice = (amount) => `$${amount.toLocaleString('es-MX')}`;

const CounterControl = ({ label, icon: Icon, value, onIncrement, onDecrement, min = 0 }) => (
  <Stack direction="row" spacing={1.5} alignItems="center" sx={{ justifyContent: 'center' }}>
    <Icon sx={{ color: 'primary.main', fontSize: 20 }} />
    <Typography sx={{ fontWeight: 600, fontSize: '0.9rem', color: 'text.primary', minWidth: 75 }}>
      {label}
    </Typography>
    <IconButton
      onClick={onDecrement}
      disabled={value <= min}
      aria-label={`Reducir ${label.toLowerCase()}`}
      sx={{
        width: 36, height: 36,
        border: '1.5px solid',
        borderColor: value <= min ? 'divider' : 'primary.light',
        color: value <= min ? 'text.disabled' : 'primary.main',
        '&:hover:not(:disabled)': { bgcolor: 'rgba(4,52,107,0.06)' },
      }}
    >
      <Remove sx={{ fontSize: 18 }} />
    </IconButton>
    <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', minWidth: 28, textAlign: 'center', userSelect: 'none' }}>
      {value}
    </Typography>
    <IconButton
      onClick={onIncrement}
      aria-label={`Agregar ${label.toLowerCase()}`}
      sx={{
        width: 36, height: 36,
        border: '1.5px solid',
        borderColor: 'primary.light',
        color: 'primary.main',
        '&:hover': { bgcolor: 'rgba(4,52,107,0.06)' },
      }}
    >
      <Add sx={{ fontSize: 18 }} />
    </IconButton>
  </Stack>
);

const Pricing = () => {
  const { openWhatsApp } = useWhatsApp();
  const [stores, setStores] = useState(1);
  const [warehouses, setWarehouses] = useState(0);

  const totalUnits = stores + warehouses;
  const needsQuote = totalUnits > MAX_UNITS_WITH_PRICE;
  const price = useMemo(() => PRICE_TABLE[totalUnits] ?? null, [totalUnits]);

  const pricePerUnit = price && totalUnits > 0 ? Math.round(price / totalUnits) : null;
  const hasDiscount = totalUnits > 3 && pricePerUnit;

  const handleDecrementStore = () => {
    if (stores > 0 && (stores - 1 + warehouses) >= MIN_TOTAL_UNITS) setStores(stores - 1);
  };
  const handleDecrementWarehouse = () => {
    if (warehouses > 0) setWarehouses(warehouses - 1);
  };

  const ctaMessage = needsQuote
    ? `Hola, me interesa SmartVenta para ${stores} tienda${stores !== 1 ? 's' : ''} y ${warehouses} almacén${warehouses !== 1 ? 'es' : ''} (${totalUnits} ubicaciones). Quisiera una cotización.`
    : `Hola, me interesa SmartVenta para ${stores} tienda${stores !== 1 ? 's' : ''} y ${warehouses} almacén${warehouses !== 1 ? 'es' : ''}. Quiero comenzar.`;

  return (
    <Box id="pricing" sx={{ ...sectionPadding, bgcolor: 'background.paper' }}>
      <Container maxWidth="sm">
        <SectionHeader
          overline="Precios"
          title="Sencillo y transparente"
          subtitle="Desde $399/mes con una tienda. El precio crece con tu negocio."
          sx={{ mb: 5 }}
        />

        <motion.div {...cardGridItem} transition={{ delay: 0.15 }}>
          <Box sx={{
            p: { xs: 3, sm: 4 },
            borderRadius: 3,
            bgcolor: 'background.default',
            border: '1px solid', borderColor: 'divider',
            maxWidth: 480,
            mx: 'auto',
          }}>
            {/* Counters */}
            <Stack spacing={2} sx={{ mb: 3 }}>
              <CounterControl label="Tiendas" icon={StorefrontOutlined} value={stores} onIncrement={() => setStores(stores + 1)} onDecrement={handleDecrementStore} min={0} />
              <CounterControl label="Almacenes" icon={WarehouseOutlined} value={warehouses} onIncrement={() => setWarehouses(warehouses + 1)} onDecrement={handleDecrementWarehouse} min={0} />
            </Stack>

            {/* Price display */}
            <Box sx={{ textAlign: 'center', py: 2.5, mb: 3, bgcolor: 'background.paper', borderRadius: 2.5, border: '1px solid', borderColor: 'divider' }}>
              {needsQuote ? (
                <>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'primary.main' }}>
                    Precio especial por volumen
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mt: 0.25 }}>
                    Contáctanos para tu cotización
                  </Typography>
                </>
              ) : (
                <>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1 }}>
                    {totalUnits} {totalUnits === 1 ? 'ubicación' : 'ubicaciones'}
                  </Typography>
                  <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                    <Typography sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', sm: '2.8rem' }, lineHeight: 1, color: 'primary.main' }}>
                      {formatPrice(price)}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '1rem', fontWeight: 500 }}>/mes</Typography>
                  </Stack>
                  {hasDiscount && (
                    <Typography sx={{ color: '#047857', fontSize: '0.85rem', fontWeight: 600, mt: 1 }}>
                      {formatPrice(pricePerUnit)} por ubicación · Ahorro por volumen
                    </Typography>
                  )}
                </>
              )}
            </Box>

            {/* Includes */}
            <Stack spacing={1} sx={{ mb: 3 }}>
              {['Todos los módulos incluidos', 'Sin contrato, cancela cuando quieras', 'Soporte por WhatsApp'].map((text) => (
                <Stack key={text} direction="row" spacing={1} alignItems="center">
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: '#047857', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>
                    {text}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            {/* CTA */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp(ctaMessage)}
              sx={ctaButtonSx}
            >
              {needsQuote ? 'Solicitar cotización' : 'Comenzar ahora'}
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Pricing;
