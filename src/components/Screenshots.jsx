import { Box, Container, Typography, Grid, Paper, Stack, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

const screenshots = [
  { 
    icon: DashboardIcon, 
    title: 'Dashboard Principal', 
    desc: 'Vista general con métricas clave y análisis en tiempo real',
    color: '#3b82f6',
    stats: ['Ventas en tiempo real', 'Gráficos interactivos', 'KPIs personalizables']
  },
  { 
    icon: ShoppingCartIcon, 
    title: 'Pantalla de Ventas', 
    desc: 'Interfaz intuitiva para procesar ventas rápidamente',
    color: '#10b981',
    stats: ['Búsqueda rápida', 'Múltiples pagos', 'Descuentos automáticos']
  },
  { 
    icon: CategoryIcon, 
    title: 'Gestión de Inventario', 
    desc: 'Control completo de productos, stock y movimientos',
    color: '#8b5cf6',
    stats: ['Alertas de stock', 'Códigos de barras', 'Categorización']
  },
];

export default function Screenshots() {
  return (
    <Box sx={{ 
      py: 12, 
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative elements */}
      <Box sx={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />
      <Box sx={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Chip 
              label="INTERFAZ" 
              sx={{ 
                mb: 2,
                bgcolor: '#f0f9ff',
                color: '#0066cc',
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
              Interfaz Moderna y Fácil de Usar
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
              Diseñado pensando en la experiencia del usuario
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {screenshots.map((screen, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 40, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -15,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 0,
                    height: 400,
                    borderRadius: 4,
                    overflow: 'hidden',
                    position: 'relative',
                    background: `linear-gradient(135deg, ${screen.color}15 0%, ${screen.color}05 100%)`,
                    border: `2px solid ${screen.color}30`,
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      borderColor: screen.color,
                      boxShadow: `0 25px 70px ${screen.color}30`,
                      '& .screen-icon-bg': {
                        transform: 'scale(1.2) rotate(10deg)',
                        opacity: 0.3,
                      },
                      '& .screen-content': {
                        transform: 'translateY(-5px)',
                      }
                    }
                  }}
                >
                  {/* Background icon */}
                  <Box
                    className="screen-icon-bg"
                    sx={{
                      position: 'absolute',
                      top: -40,
                      right: -40,
                      width: 200,
                      height: 200,
                      opacity: 0.1,
                      transition: 'all 0.6s ease',
                    }}
                  >
                    <screen.icon sx={{ fontSize: 200, color: screen.color }} />
                  </Box>

                  {/* Content */}
                  <Box 
                    className="screen-content"
                    sx={{ 
                      p: 4, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'relative',
                      zIndex: 1,
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '20px',
                        background: `linear-gradient(135deg, ${screen.color}, ${screen.color}dd)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        boxShadow: `0 10px 30px ${screen.color}40`,
                      }}
                    >
                      <screen.icon sx={{ fontSize: 40, color: 'white' }} />
                    </Box>

                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                      {screen.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                      {screen.desc}
                    </Typography>

                    <Stack spacing={1.5} sx={{ mt: 'auto' }}>
                      {screen.stats.map((stat, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 + j * 0.1 + 0.3 }}
                          viewport={{ once: true }}
                        >
                          <Stack direction="row" spacing={1} alignItems="center">
                            <Box 
                              sx={{ 
                                width: 6, 
                                height: 6, 
                                borderRadius: '50%', 
                                bgcolor: screen.color 
                              }} 
                            />
                            <Typography variant="body2" sx={{ fontWeight: 500, fontSize: '0.9rem' }}>
                              {stat}
                            </Typography>
                          </Stack>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
