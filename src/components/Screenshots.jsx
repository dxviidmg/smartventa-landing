import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CategoryIcon from '@mui/icons-material/Category';

const screenshots = [
  { icon: DashboardIcon, title: 'Dashboard Principal', desc: 'Vista general con métricas clave y análisis en tiempo real' },
  { icon: ShoppingCartIcon, title: 'Pantalla de Ventas', desc: 'Interfaz intuitiva para procesar ventas rápidamente' },
  { icon: CategoryIcon, title: 'Gestión de Inventario', desc: 'Control completo de productos, stock y movimientos' },
];

export default function Screenshots() {
  return (
    <Box sx={{ py: 10, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '2rem', md: '3rem' } }}>
          Interfaz Moderna y Fácil de Usar
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" sx={{ mb: 6 }}>
          Diseñado pensando en la experiencia del usuario
        </Typography>
        <Grid container spacing={4}>
          {screenshots.map((screen, i) => (
            <Grid item xs={12} md={4} key={i}>
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper 
                  elevation={4}
                  sx={{ 
                    p: 3,
                    height: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: '#f8fafc',
                    border: '2px solid #e2e8f0'
                  }}
                >
                  <screen.icon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, textAlign: 'center' }}>
                    {screen.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="center">
                    {screen.desc}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
