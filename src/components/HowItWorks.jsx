import { Box, Container, Typography, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { SettingsOutlined, PointOfSaleOutlined, InsightsOutlined } from '@mui/icons-material';

const steps = [
  { icon: <SettingsOutlined />, num: '01', title: 'Configura tus tiendas y productos', desc: 'Agrega tus sucursales, almacenes y catálogo de productos. Importa masivamente desde Excel.' },
  { icon: <PointOfSaleOutlined />, num: '02', title: 'Empieza a vender desde cualquier ubicación', desc: 'Usa el punto de venta en cualquier tienda. El inventario se actualiza automáticamente.' },
  { icon: <InsightsOutlined />, num: '03', title: 'Monitorea todo en tiempo real', desc: 'Revisa ventas, inventario y rendimiento de todas tus sucursales desde el dashboard.' },
];

const HowItWorks = () => (
  <Box id="how-it-works" sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
    <Container maxWidth="md">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Cómo funciona
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' } }}>
              Tres pasos para empezar
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
                  borderBottom: i < steps.length - 1 ? '1px solid' : 'none',
                  borderColor: 'divider',
                }}
              >
                <Box sx={{
                  minWidth: 56, height: 56, borderRadius: 3,
                  bgcolor: 'primary.main', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 26 },
                }}>
                  {s.icon}
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="overline" sx={{ color: 'text.secondary', fontSize: '0.7rem' }}>
                    Paso {s.num}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {s.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
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
