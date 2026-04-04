import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Store,
  Spa,
  ContentCut,
  PetsOutlined,
  Build,
  Hardware,
  PhoneIphone,
  Computer,
  Tv,
  DirectionsCar,
  SportsSoccer,
  Diamond,
  Warehouse,
  ShoppingCart
} from '@mui/icons-material';

const businessTypes = [
  { icon: <ShoppingCart />, title: 'Tiendas retail', desc: 'Negocios de venta al público que necesitan un punto de venta ágil y control de inventario.' },
  { icon: <Store />, title: 'Negocios multi-sucursal', desc: 'Cadenas de tiendas que requieren visibilidad y coordinación entre todas sus ubicaciones.' },
  { icon: <Warehouse />, title: 'Operaciones con almacén', desc: 'Negocios que distribuyen productos desde almacenes centrales a sus puntos de venta.' },
];

const industries = [
  { icon: <Store />, name: 'Abarrotes', desc: 'Control de productos de consumo diario' },
  { icon: <Build />, name: 'Ferreterías', desc: 'Inventario de herramientas y materiales' },
  { icon: <Store />, name: 'Mini Súpers', desc: 'Gestión de inventario diversificado' },
  { icon: <ContentCut />, name: 'Papelerías', desc: 'Control de artículos de papelería' },
  { icon: <Spa />, name: 'Cosméticos', desc: 'Gestión de productos de belleza' },
  { icon: <PetsOutlined />, name: 'Mascotas', desc: 'Control de productos y accesorios' },
  { icon: <SportsSoccer />, name: 'Jugueterías', desc: 'Inventario de artículos para niños' },
  { icon: <Diamond />, name: 'Joyerías', desc: 'Control de inventarios valiosos' },
  { icon: <ContentCut />, name: 'Salones', desc: 'Gestión de servicios y productos' },
  { icon: <Store />, name: 'Y más...', desc: 'Compatible con cualquier negocio' },
];

const Industries = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#CAD2DE' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            ¿Para quién es?
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
            Hecho para negocios como el tuyo
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3} sx={{ mb: 10 }}>
        {businessTypes.map((type, i) => (
          <Grid size={{ xs: 12, md: 4 }} key={i}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ height: '100%' }}
            >
              <Box
                sx={{
                  p: 4, height: '100%', borderRadius: 4,
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 30px rgba(4,52,107,0.1)',
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <Box sx={{
                  width: 56, height: 56, borderRadius: 3,
                  bgcolor: 'rgba(4,52,107,0.1)', color: 'primary.main',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, '& svg': { fontSize: 28 },
                }}>
                  {type.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {type.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {type.desc}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700 }}>
            Ideal para tu tipo de negocio
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={2} justifyContent="center">
        {['Abarrotes', 'Ferreterías', 'Mini Súpers', 'Papelerías', 'Cosméticos', 'Mascotas', 'Jugueterías', 'Y más...'].map((name, i) => (
          <Grid size={{ xs: 6, sm: 4, md: 3 }} key={i}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Box
                sx={{
                  py: 2.5, px: 3,
                  borderRadius: 3,
                  bgcolor: 'rgba(4,52,107,0.08)',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {name}
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default Industries;
