import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  StorefrontOutlined, AccountTreeOutlined, WarehouseOutlined,
  ShoppingCart, Construction, MenuBook, Spa, Pets, Toys, Store,
} from '@mui/icons-material';

const audiences = [
  { icon: <StorefrontOutlined />, title: 'Tiendas retail', desc: 'Negocios de venta al público que necesitan un punto de venta ágil y control de inventario.' },
  { icon: <AccountTreeOutlined />, title: 'Negocios multi-sucursal', desc: 'Cadenas de tiendas que necesitan control centralizado de todas sus operaciones.' },
  { icon: <WarehouseOutlined />, title: 'Operaciones con almacén', desc: 'Negocios que distribuyen productos desde almacenes centrales a sus puntos de venta.' },
];

const industries = [
  { icon: <ShoppingCart />, label: 'Abarrotes' },
  { icon: <Construction />, label: 'Ferreterías' },
  { icon: <Store />, label: 'Mini Súpers' },
  { icon: <MenuBook />, label: 'Papelerías' },
  { icon: <Spa />, label: 'Cosméticos' },
  { icon: <Pets />, label: 'Mascotas' },
  { icon: <Toys />, label: 'Jugueterías' },
  { icon: <Store />, label: 'Y más...' },
];

const TargetAudience = () => (
  <Box sx={{ py: { xs: 10, md: 14 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              ¿Para quién es?
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Hecho para negocios como el tuyo
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          {audiences.map((a, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ height: '100%' }}>
                <Box sx={{
                  p: 4, height: '100%', borderRadius: 4, textAlign: 'center',
                  border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: 'primary.light', transform: 'translateY(-4px)', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' },
                }}>
                  <Box sx={{
                    width: 56, height: 56, borderRadius: 3, mx: 'auto',
                    bgcolor: 'primary.main', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2.5, '& svg': { fontSize: 28 },
                  }}>
                    {a.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>{a.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>{a.desc}</Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Industries */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Typography variant="subtitle1" sx={{ textAlign: 'center', fontWeight: 600, mb: 3 }}>
            Ideal para tu tipo de negocio
          </Typography>
        </motion.div>
        <Grid container spacing={2} justifyContent="center">
          {industries.map((ind, i) => (
            <Grid size={{ xs: 6, sm: 3, md: 1.5 }} key={i}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Stack alignItems="center" spacing={1} sx={{
                  py: 2, px: 1, borderRadius: 3,
                  border: '1px solid', borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: 'primary.light', transform: 'translateY(-2px)' },
                }}>
                  <Box sx={{ color: 'primary.main', '& svg': { fontSize: 28 } }}>{ind.icon}</Box>
                  <Typography variant="caption" sx={{ fontWeight: 600, textAlign: 'center' }}>{ind.label}</Typography>
                </Stack>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default TargetAudience;
