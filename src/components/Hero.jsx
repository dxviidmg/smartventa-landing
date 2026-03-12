import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp, Inventory, Store } from '@mui/icons-material';

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const floatingIcons = [
    { Icon: TrendingUp, delay: 0, x: -100, y: -50 },
    { Icon: Inventory, delay: 0.3, x: 100, y: -30 },
    { Icon: Store, delay: 0.6, x: -80, y: 50 },
  ];

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0d47a1 0%, #01579b 100%)', pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 }, color: 'white', overflow: 'hidden', position: 'relative' }}>
      {/* Elementos flotantes decorativos */}
      {floatingIcons.map(({ Icon, delay, x, y }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            x: [0, x, 0],
            y: [0, y, 0],
          }}
          transition={{ 
            duration: 8,
            delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: `${30 + i * 20}%`,
            left: `${10 + i * 30}%`,
            display: { xs: 'none', md: 'block' }
          }}
        >
          <motion.div
            animate={{
              color: ['rgba(255,255,255,0.15)', 'rgba(66,165,245,0.3)', 'rgba(255,255,255,0.15)'],
            }}
            transition={{
              duration: 6,
              delay: delay + 1,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Icon sx={{ fontSize: 80 }} />
          </motion.div>
        </motion.div>
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <Typography variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' }, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
              El{' '}
              <motion.span
                animate={{ 
                  color: ['#ffffff', '#04346b', '#ffffff'],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ display: 'inline-block', fontSize: '1.2em', fontWeight: 800 }}
              >
                punto de venta
              </motion.span>
              {' '}inteligente para negocios{' '}
              <motion.span
                animate={{ 
                  color: ['#ffffff', '#04346b', '#ffffff'],
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2.5, ease: "easeInOut" }}
                style={{ display: 'inline-block', fontSize: '1.2em', fontWeight: 800 }}
              >
                multi-tienda
              </motion.span>
            </Typography>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography variant="h5" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, color: 'rgba(255,255,255,0.9)', maxWidth: '1000px' }}>
              Controla inventario, ventas y operaciones de todas tus tiendas y almacenes desde una sola plataforma
            </Typography>
          </motion.div>

          {/* Stats animados */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Stack direction="row" spacing={{ xs: 2, md: 4 }} sx={{ mt: 2 }}>
              {[
                { value: '100%', label: 'En tiempo real' },
                { value: '∞', label: 'Sucursales' },
                { value: '24/7', label: 'Disponible' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box sx={{ px: 2 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                </motion.div>
              ))}
            </Stack>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="contained" size="large" onClick={() => scrollTo('contact')} sx={{ px: 4, py: 1.5, fontSize: '1.1rem', bgcolor: 'white', color: 'primary.main', '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }, boxShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                  Solicitar demo
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outlined" size="large" onClick={() => scrollTo('features')} sx={{ px: 4, py: 1.5, fontSize: '1.1rem', borderColor: 'white', color: 'white', '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } }}>
                  Ver características
                </Button>
              </motion.div>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
