import { Box, Container, Typography, Grid } from '@mui/material';
import SectionHeader from '../ui/SectionHeader';
import { industries } from '../../data/industries';
import { sectionPadding } from '../../constants';

const Industries = () => (
  <div id="industries">
    <Box sx={{ ...sectionPadding, bgcolor: 'surface.alt' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="Para qué sirve"
          title="Ideal para tu negocio"
          sx={{ mb: 8 }}
        />

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
                  transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, color 0.3s ease',
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
