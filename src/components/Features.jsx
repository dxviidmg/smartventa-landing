import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Storefront, Inventory, PointOfSale,
  Assessment, People, SwapHoriz,
} from '@mui/icons-material';

const features = [
  {
    icon: <Storefront />, title: 'Multi-sucursal real',
    desc: 'Administra todas tus tiendas y almacenes desde un panel centralizado. Cambia entre sucursales al instante.',
    color: '#3b82f6',
  },
  {
    icon: <Inventory />, title: 'Inventario inteligente',
    desc: 'Stock unificado en tiempo real. Reservas automáticas entre carritos para evitar ventas duplicadas.',
    color: '#8b5cf6',
  },
  {
    icon: <PointOfSale />, title: 'Punto de venta ágil',
    desc: 'Búsqueda instantánea, múltiples carritos, atajos de teclado y precios dinámicos. Vende más rápido.',
    color: '#10b981',
  },
  {
    icon: <Assessment />, title: 'Reportes y analytics',
    desc: 'KPIs, heatmaps de ventas, tendencias y top de productos. Datos reales para decisiones inteligentes.',
    color: '#f59e0b',
  },
  {
    icon: <People />, title: 'Roles y permisos',
    desc: 'Tres niveles de acceso: Dueño, Administrador y Vendedor. Cada quien ve solo lo que necesita.',
    color: '#ec4899',
  },
  {
    icon: <SwapHoriz />, title: 'Traspasos y distribuciones',
    desc: 'Mueve mercancía entre tiendas con trazabilidad completa. Confirmación obligatoria en cada recepción.',
    color: '#06b6d4',
  },
];

const Features = () => (
  <Box id="features" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Características
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
            Todo lo que tu negocio necesita para crecer
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
            Herramientas diseñadas para dueños de negocio que quieren control total sin complicaciones técnicas.
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3}>
        {features.map((f, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
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
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: f.color,
                    boxShadow: `0 8px 30px ${f.color}15`,
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{
                  width: 48, height: 48, borderRadius: 3,
                  bgcolor: `${f.color}12`, color: f.color,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, '& svg': { fontSize: 24 },
                }}>
                  {f.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.05rem' }}>
                  {f.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                  {f.desc}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Features;
