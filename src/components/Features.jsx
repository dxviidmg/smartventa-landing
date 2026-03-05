import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';
import StoreIcon from '@mui/icons-material/Store';
import InventoryIcon from '@mui/icons-material/Inventory';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PeopleIcon from '@mui/icons-material/People';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PrintIcon from '@mui/icons-material/Print';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const features = [
  { icon: StoreIcon, title: 'Multi-tienda', desc: 'Gestiona múltiples sucursales desde una sola plataforma centralizada' },
  { icon: InventoryIcon, title: 'Gestión de Inventario', desc: 'Control completo de stock, productos, marcas y departamentos' },
  { icon: PointOfSaleIcon, title: 'Ventas y Cobros', desc: 'Sistema de ventas con múltiples métodos de pago integrados' },
  { icon: PeopleIcon, title: 'Clientes', desc: 'Administración de clientes con descuentos personalizados' },
  { icon: SwapHorizIcon, title: 'Traspasos', desc: 'Movimiento eficiente de productos entre tiendas' },
  { icon: AssessmentIcon, title: 'Reportes', desc: 'Dashboard con métricas en tiempo real y logs de auditoría' },
  { icon: PrintIcon, title: 'Impresión de Tickets', desc: 'Integración directa con impresoras para tickets de venta' },
  { icon: BookmarkIcon, title: 'Apartados', desc: 'Sistema completo de reservas y apartados de productos' },
];

export default function Features() {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
          Características Principales
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}>
          Todo lo que necesitas para gestionar tu negocio de manera profesional
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', '&:hover': { transform: 'translateY(-8px)', transition: '0.3s' } }}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <feature.icon sx={{ fontSize: 48, color: 'primary.main', mb: 2 }} />
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
