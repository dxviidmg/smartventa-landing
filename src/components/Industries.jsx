import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  LocalGroceryStore, Build, Store, AutoStories, Spa, PetsOutlined, SportsSoccer, Business
} from '@mui/icons-material';
import { sectionHeader } from '../constants';
import SEO from '../components/SEO';

const industries = [
  { icon: <LocalGroceryStore />, title: 'Abarrotes' },
  { icon: <Build />, title: 'Ferreterías' },
  { icon: <Store />, title: 'Mini Súpers' },
  { icon: <AutoStories />, title: 'Papelerías' },
  { icon: <Spa />, title: 'Cosméticos' },
  { icon: <PetsOutlined />, title: 'Mascotas' },
  { icon: <SportsSoccer />, title: 'Jugueterías' },
  { icon: <Business />, title: 'Y más...' },
];

const Industries = () => (
  <>
    <SEO
      title="Para qué sirve SmartVenta"
      description="El sistema que unifica tus tiendas y almacenes en un solo lugar. Ideal para tu negocio."
    />
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#CAD2DE' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <motion.div {...sectionHeader.overline}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Para qué sirve
            </Typography>
          </motion.div>
          <motion.div {...sectionHeader.title}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650 }}>
              El sistema que unifica tus tiendas y almacenes en un solo lugar
            </Typography>
          </motion.div>
        </Stack>

        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 6 }}>
          <motion.div {...sectionHeader.overline}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700 }}>
              Ideal para tu negocio
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 10 }}>
          {industries.map((industry, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={i}>
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
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: 'white',
                      transform: 'translateY(-4px) scale(1.02)',
                      boxShadow: '0 8px 30px rgba(4,52,107,0.25)',
                    },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, '& svg': { fontSize: 24 } }}>
                    {industry.icon}
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {industry.title}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Industries;
