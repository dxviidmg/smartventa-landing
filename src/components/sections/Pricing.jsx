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

/**
 * Pricing table indexed by total units (stores + warehouses).
 * Not exposed in the UI — only used by the calculator.
 */
const PRICE_TABLE = {
  1: 400,
  2: 800,
  3: 1200,
  4: 1500,
  5: 1800,
  6: 2150,
  7: 2500,
};

const MAX_UNITS_WITH_PRICE = 7;
const MIN_TOTAL_UNITS = 1;

const formatPrice = (amount) =>
  `$${amount.toLocaleString('es-MX')} MXN`;

const CounterControl = ({ label, icon: Icon, value, onIncrement, onDecrement, min = 0 }) => (
  <Stack spacing={1.5} alignItems="center" sx={{ flex: 1, minWidth: 160 }}>
    <Box sx={{
      width: 56, height: 56, borderRadius: '50%',
      bgcolor: 'rgba(4,52,107,0.06)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <Icon sx={{ color: 'primary.main', fontSize: 28 }} />
    </Box>
    <Typography sx={{ fontWeight: 700, fontSize: '1.1rem', color: 'text.primary' }}>
      {label}
    </Typography>
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <IconButton
        onClick={onDecrement}
        disabled={value <= min}
        aria-label={`Reducir ${label.toLowerCase()}`}
        sx={{
          width: 48, height: 48,
          border: '2px solid',
          borderColor: value <= min ? 'divider' : 'primary.light',
          color: value <= min ? 'text.disabled' : 'primary.main',
          transition: 'all 0.2s ease',
          '&:hover:not(:disabled)': { bgcolor: 'rgba(4,52,107,0.08)', borderColor: 'primary.main' },
        }}
      >
        <Remove />
      </IconButton>
      <Typography
        sx={{
          fontWeight: 800, fontSize: '2rem', minWidth: 48,
          textAlign: 'center', color: 'text.primary',
          userSelect: 'none',
        }}
      >
        {value}
      </Typography>
      <IconButton
        onClick={onIncrement}
        aria-label={`Agregar ${label.toLowerCase()}`}
        sx={{
          width: 48, height: 48,
          border: '2px solid',
          borderColor: 'primary.light',
          color: 'primary.main',
          transition: 'all 0.2s ease',
          '&:hover': { bgcolor: 'rgba(4,52,107,0.08)', borderColor: 'primary.main' },
        }}
      >
        <Add />
      </IconButton>
    </Stack>
  </Stack>
);

const Pricing = () => {
  const { openWhatsApp } = useWhatsApp();
  const [stores, setStores] = useState(1);
  const [warehouses, setWarehouses] = useState(0);

  const totalUnits = stores + warehouses;

  const needsQuote = totalUnits > MAX_UNITS_WITH_PRICE;
  const price = useMemo(() => PRICE_TABLE[totalUnits] ?? null, [totalUnits]);

  // Ensure at least 1 total unit
  const handleDecrementStore = () => {
    if (stores > 0 && (stores - 1 + warehouses) >= MIN_TOTAL_UNITS) {
      setStores(stores - 1);
    }
  };

  const handleDecrementWarehouse = () => {
    if (warehouses > 0) setWarehouses(warehouses - 1);
  };

  const ctaMessage = needsQuote
    ? `Hola, me interesa SmartVenta para ${stores} tienda${stores !== 1 ? 's' : ''} y ${warehouses} almacén${warehouses !== 1 ? 'es' : ''} (${totalUnits} ubicaciones). Quisiera una cotización.`
    : `Hola, me interesa SmartVenta para ${stores} tienda${stores !== 1 ? 's' : ''} y ${warehouses} almacén${warehouses !== 1 ? 'es' : ''}. Quiero comenzar.`;

  return (
    <Box id="pricing" sx={{ ...sectionPadding, bgcolor: 'background.paper', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md">
        <SectionHeader
          overline="Precios"
          title="Desde $400 al mes"
          subtitle="Administra tus tiendas y almacenes desde una sola plataforma. El precio se adapta al número de ubicaciones de tu negocio."
          titleSx={{ fontSize: { xs: '2.4rem', md: '3.2rem' } }}
          subtitleSx={{ fontSize: '1.15rem', maxWidth: 600 }}
          sx={{ mb: 8 }}
        />

        <motion.div {...cardGridItem} transition={{ delay: 0.15 }}>
          <Box sx={{
            p: { xs: 4, sm: 5, md: 6 },
            borderRadius: 4,
            border: '2px solid',
            borderColor: 'primary.main',
            position: 'relative',
            overflow: 'hidden',
            maxWidth: 640,
            mx: 'auto',
            boxShadow: '0 8px 32px rgba(4,52,107,0.08)',
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'translateY(-6px)',
              boxShadow: '0 24px 60px rgba(4,52,107,0.15)',
            },
          }}>
            {/* Top accent bar */}
            <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 5, bgcolor: 'secondary.main' }} />

            {/* Calculator title */}
            <Typography variant="h5" component="h3" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', fontSize: { xs: '1.3rem', sm: '1.5rem' } }}>
              Calcula tu precio
            </Typography>

            {/* Counters */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 4, sm: 6 }}
              justifyContent="center"
              alignItems="center"
              sx={{ mb: 4 }}
            >
              <CounterControl
                label="Tiendas"
                icon={StorefrontOutlined}
                value={stores}
                onIncrement={() => setStores(stores + 1)}
                onDecrement={handleDecrementStore}
                min={0}
              />
              <CounterControl
                label="Almacenes"
                icon={WarehouseOutlined}
                value={warehouses}
                onIncrement={() => setWarehouses(warehouses + 1)}
                onDecrement={handleDecrementWarehouse}
                min={0}
              />
            </Stack>

            {/* Total units */}
            <Typography sx={{ textAlign: 'center', color: 'text.secondary', mb: 3, fontSize: '1rem' }}>
              {totalUnits} {totalUnits === 1 ? 'ubicación' : 'ubicaciones'} en total
            </Typography>

            {/* Price display */}
            <Box sx={{
              textAlign: 'center', py: 3, px: 3, mb: 4,
              bgcolor: 'rgba(4,52,107,0.04)', borderRadius: 3,
            }}>
              {needsQuote ? (
                <>
                  <Typography sx={{ fontWeight: 700, fontSize: '1.4rem', color: 'primary.main', mb: 0.5 }}>
                    Precio especial por volumen
                  </Typography>
                  <Typography sx={{ color: 'text.secondary', fontSize: '1rem' }}>
                    Contáctanos para recibir tu cotización personalizada
                  </Typography>
                </>
              ) : (
                <>
                  <Typography sx={{ color: 'text.secondary', mb: 1, fontSize: '1rem' }}>
                    Tu precio mensual
                  </Typography>
                  <Stack direction="row" alignItems="baseline" justifyContent="center" spacing={0.5}>
                    <Typography sx={{ fontWeight: 800, fontSize: { xs: '2.8rem', sm: '3.5rem' }, lineHeight: 1, color: 'primary.main' }}>
                      {formatPrice(price)}
                    </Typography>
                    <Typography sx={{ color: 'text.secondary', fontSize: '1.1rem' }}>
                      /mes
                    </Typography>
                  </Stack>
                </>
              )}
            </Box>

            {/* CTA */}
            <Button
              variant="contained"
              size="large"
              fullWidth
              endIcon={<ArrowForward />}
              onClick={() => openWhatsApp(ctaMessage)}
              sx={{
                ...ctaButtonSx,
                py: 1.8,
                fontSize: '1.05rem',
              }}
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
