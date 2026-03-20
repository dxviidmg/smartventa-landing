import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { SettingsOutlined, StorefrontOutlined, PointOfSaleOutlined, InsightsOutlined } from '@mui/icons-material';

const steps = [
  { icon: <SettingsOutlined />, num: '01', title: 'Configura tu catálogo', desc: 'Agrega tus productos con precios, categorías y códigos de barras. Importa masivamente desde Excel.' },
  { icon: <StorefrontOutlined />, num: '02', title: 'Distribuye a tus tiendas', desc: 'Asigna inventario a cada sucursal y almacén. Realiza transferencias entre ubicaciones fácilmente.' },
  { icon: <PointOfSaleOutlined />, num: '03', title: 'Vende con agilidad', desc: 'Procesa ventas rápidamente con el punto de venta. El inventario se actualiza al instante.' },
  { icon: <InsightsOutlined />, num: '04', title: 'Analiza y optimiza', desc: 'Revisa reportes y métricas para tomar decisiones informadas y hacer crecer tu negocio.' },
];

const HowItWorks = () => (
  <Box id="how-it-works" sx={{ py: { xs: 6, md: 8 }, bgcolor: '#04346b', color: '#fff' }}>
    <Container maxWidth="md">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: '#34d399', fontWeight: 700, letterSpacing: 2 }}>
              Cómo funciona
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, color: '#fff' }}>
              Cuatro pasos para empezar
            </Typography>
          </motion.div>
        </Stack>

        <Stack spacing={0}>
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Stack
                direction="row"
                spacing={3}
                alignItems="flex-start"
                sx={{
                  py: 4,
                  borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                }}
              >
                <Box sx={{
                  minWidth: 56, height: 56, borderRadius: 3,
                  bgcolor: 'rgba(255,255,255,0.1)', color: '#34d399',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 26 },
                }}>
                  {s.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.7rem' }}>
                    Paso {s.num}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, color: '#fff' }}>
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
);

export default HowItWorks;
