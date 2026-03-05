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
  { icon: StoreIcon, title: 'Multi-tienda', desc: 'Gestiona múltiples sucursales desde una sola plataforma centralizada', color: '#3b82f6' },
  { icon: InventoryIcon, title: 'Gestión de Inventario', desc: 'Control completo de stock, productos, marcas y departamentos', color: '#8b5cf6' },
  { icon: PointOfSaleIcon, title: 'Ventas y Cobros', desc: 'Sistema de ventas con múltiples métodos de pago integrados', color: '#10b981' },
  { icon: PeopleIcon, title: 'Clientes', desc: 'Administración de clientes con descuentos personalizados', color: '#f59e0b' },
  { icon: SwapHorizIcon, title: 'Traspasos', desc: 'Movimiento eficiente de productos entre tiendas', color: '#06b6d4' },
  { icon: AssessmentIcon, title: 'Reportes', desc: 'Dashboard con métricas en tiempo real y logs de auditoría', color: '#ec4899' },
  { icon: PrintIcon, title: 'Impresión de Tickets', desc: 'Integración directa con impresoras para tickets de venta', color: '#6366f1' },
  { icon: BookmarkIcon, title: 'Apartados', desc: 'Sistema completo de reservas y apartados de productos', color: '#14b8a6' },
];

export default function Features() {
  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150%',
        height: '100%',
        background: 'radial-gradient(circle, rgba(4, 52, 107, 0.03) 0%, transparent 70%)',
      }
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="overline" 
              sx={{ 
                color: '#04346b',
                fontWeight: 700,
                fontSize: '0.9rem',
                letterSpacing: 2
              }}
            >
              CARACTERÍSTICAS
            </Typography>
            <Typography 
              variant="h2" 
              sx={{ 
                mt: 2,
                mb: 2, 
                fontWeight: 800, 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #04346b 0%, #0066cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Todo lo que necesitas
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 700, mx: 'auto', fontSize: '1.2rem' }}>
              Herramientas poderosas diseñadas para hacer crecer tu negocio
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -12 }}
              >
                <Card 
                  sx={{ 
                    height: '100%',
                    background: 'white',
                    borderRadius: 4,
                    border: '1px solid #e2e8f0',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { 
                      boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
                      borderColor: feature.color,
                      '& .feature-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                        background: feature.color,
                      },
                      '&::before': {
                        opacity: 1,
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: `linear-gradient(90deg, ${feature.color}, transparent)`,
                      opacity: 0,
                      transition: 'opacity 0.4s ease',
                    }
                  }}
                >
                  <CardContent sx={{ textAlign: 'center', p: 4 }}>
                    <Box
                      className="feature-icon"
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}30)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <feature.icon sx={{ fontSize: 40, color: feature.color }} />
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700, fontSize: '1.1rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
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
