import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import { Storefront, LocalPharmacy, Build, ShoppingBag, Cake, PetsOutlined } from '@mui/icons-material';

const industries = [
  { icon: <Storefront />, name: 'Tiendas de Ropa', desc: 'Control de inventario por talla y color' },
  { icon: <LocalPharmacy />, name: 'Farmacias', desc: 'Gestión de medicamentos y lotes' },
  { icon: <Build />, name: 'Ferreterías', desc: 'Inventario de herramientas y materiales' },
  { icon: <ShoppingBag />, name: 'Abarrotes', desc: 'Control de productos perecederos' },
  { icon: <Cake />, name: 'Panaderías', desc: 'Gestión de producción y ventas' },
  { icon: <PetsOutlined />, name: 'Tiendas de Mascotas', desc: 'Inventario de alimentos y accesorios' },
];

const Industries = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            Industrias
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
            Hecho para cualquier tipo de negocio
          </Typography>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <Typography sx={{ color: 'text.secondary', maxWidth: 550, fontSize: '1.05rem' }}>
            Desde tiendas pequeñas hasta cadenas grandes, SmartVenta se adapta a tu negocio.
          </Typography>
        </motion.div>
      </Stack>

      <Grid container spacing={3}>
        {industries.map((ind, i) => (
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
                    borderColor: 'primary.main',
                    boxShadow: '0 8px 30px rgba(4,52,107,0.1)',
                    transform: 'translateY(-4px)',
                  },
                  textAlign: 'center',
                }}
              >
                <Box sx={{
                  width: 56, height: 56, borderRadius: 3,
                  bgcolor: 'rgba(4,52,107,0.1)', color: 'primary.main',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  mb: 2.5, mx: 'auto', '& svg': { fontSize: 28 },
                }}>
                  {ind.icon}
                </Box>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {ind.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {ind.desc}
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
