import { Box, Container, Typography, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BusinessIcon from '@mui/icons-material/Business';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const benefits = [
  {
    icon: StorefrontIcon,
    title: 'Para Tiendas Pequeñas',
    subtitle: 'Comienza rápido y crece sin límites',
    items: ['Fácil de usar', 'Sin complicaciones', 'Precio accesible', 'Soporte dedicado'],
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)'
  },
  {
    icon: BusinessIcon,
    title: 'Para Cadenas de Tiendas',
    subtitle: 'Control total desde un solo lugar',
    items: ['Control centralizado', 'Múltiples sucursales', 'Reportes consolidados', 'Escalable'],
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)'
  },
  {
    icon: WarehouseIcon,
    title: 'Para Almacenes',
    subtitle: 'Optimiza tu logística',
    items: ['Gestión de inventario', 'Control de stock', 'Traspasos eficientes', 'Auditoría completa'],
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
  },
];

export default function Benefits() {
  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="SOLUCIONES" 
              sx={{ 
                mb: 2,
                bgcolor: '#eff6ff',
                color: '#04346b',
                fontWeight: 700,
                fontSize: '0.85rem'
              }}
            />
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 2,
                fontWeight: 800, 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                background: 'linear-gradient(135deg, #04346b 0%, #0066cc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Diseñado para tu Negocio
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
              Sin importar el tamaño, tenemos la solución perfecta
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {benefits.map((benefit, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    borderRadius: 4,
                    background: 'white',
                    border: '2px solid #e2e8f0',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: benefit.color,
                      boxShadow: `0 20px 60px ${benefit.color}20`,
                      '& .benefit-icon-wrapper': {
                        background: benefit.gradient,
                        transform: 'scale(1.1) rotate(-5deg)',
                      },
                      '& .benefit-icon': {
                        color: 'white',
                      },
                      '&::before': {
                        transform: 'translateY(0)',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '6px',
                      background: benefit.gradient,
                      transform: 'translateY(-6px)',
                      transition: 'transform 0.4s ease',
                    }
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Box
                      className="benefit-icon-wrapper"
                      sx={{
                        width: 100,
                        height: 100,
                        borderRadius: '24px',
                        background: `${benefit.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      }}
                    >
                      <benefit.icon 
                        className="benefit-icon"
                        sx={{ 
                          fontSize: 56, 
                          color: benefit.color,
                          transition: 'color 0.4s ease',
                        }} 
                      />
                    </Box>
                    <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.95rem' }}>
                      {benefit.subtitle}
                    </Typography>
                  </Box>
                  <Stack spacing={2}>
                    {benefit.items.map((item, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 + j * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Stack direction="row" spacing={1.5} alignItems="center">
                          <CheckCircleIcon sx={{ color: benefit.color, fontSize: 22 }} />
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {item}
                          </Typography>
                        </Stack>
                      </motion.div>
                    ))}
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
