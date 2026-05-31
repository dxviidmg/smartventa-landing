import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import Checkroom from '@mui/icons-material/Checkroom';
import LocalGroceryStore from '@mui/icons-material/LocalGroceryStore';
import LocalPharmacy from '@mui/icons-material/LocalPharmacy';
import Build from '@mui/icons-material/Build';
import Store from '@mui/icons-material/Store';
import AutoStories from '@mui/icons-material/AutoStories';
import Spa from '@mui/icons-material/Spa';
import PetsOutlined from '@mui/icons-material/PetsOutlined';
import SportsSoccer from '@mui/icons-material/SportsSoccer';
import Business from '@mui/icons-material/Business';
import SEO from '../components/SEO';

const industries = [
  { icon: <Checkroom />, title: 'Ropa' },
  { icon: <LocalGroceryStore />, title: 'Abarrotes' },
  { icon: <LocalPharmacy />, title: 'Farmacias' },
  { icon: <Build />, title: 'Ferreterías' },
  { icon: <Store />, title: 'Mini Súpers' },
  { icon: <AutoStories />, title: 'Papelerías' },
  { icon: <Spa />, title: 'Cosméticos' },
  { icon: <PetsOutlined />, title: 'Mascotas' },
  { icon: <SportsSoccer />, title: 'Jugueterías' },
  { icon: <Business />, title: 'Y más...' },
];

const Industries = () => (
  <div id="industries">
    <SEO
      title="Para qué sirve SmartVenta"
      description="El sistema que unifica tus tiendas y almacenes en un solo lugar. Ideal para tu negocio."
    />
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#CAD2DE' }}>
      <Container maxWidth="lg">
        <Stack spacing={2} alignItems="center" textAlign="center" sx={{ mb: 8 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2, animation: 'fadeInUp 0.5s ease both' }}>
            Para qué sirve
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 650, animation: 'fadeInUp 0.5s 0.1s ease both' }}>
            Ideal para tu negocio
          </Typography>
        </Stack>

        <Grid container spacing={2} justifyContent="center" sx={{ mb: 10 }}>
          {industries.map((industry, i) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={i}>
              <Box
                sx={{
                  py: 2.5, px: 3,
                  borderRadius: 3,
                  bgcolor: 'rgba(4,52,107,0.08)',
                  textAlign: 'center',
                  animation: `fadeInUp 0.4s ${i * 0.05}s ease both`,
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
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </div>
);

export default Industries;
