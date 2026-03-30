import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Storefront, AccountTree, Warehouse,
} from '@mui/icons-material';

const audiences = [
  { icon: <Storefront />, title: 'Negocios minoristas', desc: 'Tiendas que operan con varias sucursales y necesitan control centralizado de su operación.' },
  { icon: <AccountTree />, title: 'Negocios mayoristas', desc: 'Empresas que distribuyen productos a múltiples puntos de venta y necesitan visibilidad en tiempo real.' },
  { icon: <Warehouse />, title: 'Operaciones con almacén', desc: 'Negocios que requieren coordinación entre almacenes centrales y puntos de venta.' },
];

const Industries = () => (
  <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.default' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              ¿Para quién es SmartVenta?
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Hecho para negocios como el tuyo
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, fontSize: '1.05rem' }}>
              Negocios minoristas y mayoristas que operan con varias tiendas y/o almacenes, y necesitan control centralizado de su operación sin depender de software costoso o complicado.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={4}>
          {audiences.map((a, i) => (
            <Grid size={{ xs: 12, md: 4 }} key={i}>
              <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ y: -6 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} style={{ height: '100%' }}>
                <Box sx={{
                  p: 4, height: '100%', borderRadius: 4, textAlign: 'center',
                  border: '1px solid', borderColor: 'divider', bgcolor: 'background.paper',
                  transition: 'all 0.3s ease',
                  '&:hover': { borderColor: 'primary.light', boxShadow: '0 12px 40px rgba(0,0,0,0.08)' },
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
      </Stack>
    </Container>
  </Box>
);

export default Industries;
