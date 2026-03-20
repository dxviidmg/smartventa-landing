import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  CloudOutlined, InventoryOutlined, ShoppingCartOutlined,
  SpeedOutlined, SecurityOutlined,
} from '@mui/icons-material';

const items = [
  { icon: <CloudOutlined />, title: 'Arquitectura multi-tenant', desc: 'Diseñado desde cero para manejar múltiples negocios y sucursales de forma aislada y segura.' },
  { icon: <InventoryOutlined />, title: 'Consistencia de stock en tiempo real', desc: 'Previene stock negativo y mantiene el inventario sincronizado entre todas las ubicaciones.' },
  { icon: <ShoppingCartOutlined />, title: 'POS multi-carrito', desc: 'Atiende varios clientes simultáneamente con múltiples carritos abiertos en el punto de venta.' },
  { icon: <SpeedOutlined />, title: 'Optimizado para velocidad', desc: 'Interfaz diseñada para teclado y código de barras. Procesa ventas en segundos.' },
  { icon: <SecurityOutlined />, title: 'Sistema de auditoría integrado', desc: 'Detecta discrepancias de inventario automáticamente con auditorías periódicas y reportes.' },
];

const Differentiators = () => (
  <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              ¿Por qué SmartVenta?
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Lo que nos hace diferentes
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={3}>
          {items.map((item, i) => (
            <Grid item xs={12} sm={6} md={i < 3 ? 4 : 6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 4, height: '100%', borderRadius: 4,
                    background: (theme) =>
                      theme.palette.mode === 'dark'
                        ? 'linear-gradient(135deg, rgba(30,41,59,0.8), rgba(15,23,42,0.8))'
                        : 'linear-gradient(135deg, #04346b, #0d47a1)',
                    color: '#fff',
                    transition: 'all 0.3s ease',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 48px rgba(4,52,107,0.3)' },
                  }}
                >
                  <Box sx={{
                    width: 44, height: 44, borderRadius: 2.5,
                    bgcolor: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, '& svg': { fontSize: 22 },
                  }}>
                    {item.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, fontSize: '1.05rem' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                    {item.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default Differentiators;
