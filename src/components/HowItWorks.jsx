import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Settings, Storefront, PointOfSale, Insights } from '@mui/icons-material';
import { sectionHeader, stepItem } from '../constants';
import SEO from '../components/SEO';

const steps = [
  { icon: <Settings />, num: '01', title: 'Configura tu catálogo', desc: 'Sube tus productos desde Excel o agrégalos uno a uno. ¿No tienes catálogo? No importa, puedes crear productos sobre la marcha mientras vendes.' },
  { icon: <Storefront />, num: '02', title: 'Actualiza stock en tus tiendas', desc: 'Decide qué productos van a cada sucursal o da de alta stock manualmente en cada sucursal. Tú controlas quién tiene qué.' },
  { icon: <PointOfSale />, num: '03', title: 'Vende con agilidad', desc: 'Tu equipo atiende clientes sin fricciones. Tú ves las ventas de todas tus tiendas mientras ocurren.' },
  { icon: <Insights />, num: '04', title: 'Analiza y optimiza', desc: 'Sabes cuánto dinero hay en cada tienda, qué movimientos hubo, cuánto tienes en caja y en tu cuenta bancaria. Vive más tranquilo, decide con datos.' },
];

const HowItWorks = () => (
  <>
    <SEO
      title="Cómo Funciona"
      description="Empieza en 4 pasos sencillos. Configura, distribuye, vende y analiza con SmartVenta."
    />
    <Box id="how-it-works" sx={{ py: { xs: 8, md: 12 }, background: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' }}>
      <Container maxWidth="md">
        <Stack spacing={8}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div {...sectionHeader.overline}>
              <Typography variant="overline" sx={{ color: '#34d399', fontWeight: 700, letterSpacing: 2, fontSize: '0.75rem' }}>
                Cómo funciona
              </Typography>
            </motion.div>
            <motion.div {...sectionHeader.title}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: 'white', fontWeight: 800 }}>
                Cómo Empiezas en 4 Pasos
              </Typography>
            </motion.div>
          </Stack>

          <Stack spacing={0}>
            {steps.map((s, i) => (
              <motion.div
                key={i}
                {...stepItem}
                transition={{ delay: i * 0.15 }}
              >
                <Stack
                  direction="row"
                  spacing={3}
                  alignItems="flex-start"
                  sx={{
                    py: 4,
                    borderBottom: i < steps.length - 1 ? '1px solid' : 'none',
                    borderColor: 'rgba(255,255,255,0.1)',
                  }}
                >
                  <Box sx={{
                    minWidth: 56, height: 56, borderRadius: 3,
                    bgcolor: '#34d399', color: '#022347',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(52,211,153,0.3)',
                    '& svg': { fontSize: 26 },
                  }}>
                    {s.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>
                      Paso {s.num}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: 'white' }}>
                      {s.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
                      {s.desc}
                    </Typography>
                  </Box>
                </Stack>
              </motion.div>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  </>
);

export default HowItWorks;
