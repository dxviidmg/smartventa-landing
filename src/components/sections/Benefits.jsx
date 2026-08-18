import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import SectionHeader from '../ui/SectionHeader';
import { benefits } from '../../data/benefits';
import { sectionPadding } from '../../constants';

const Benefits = () => (
  <>
    <Box id="benefits" sx={{ ...sectionPadding, background: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="Lo que Ganarás"
          title="Resultados desde el primer día"
          subtitle="Comienza a ver resultados inmediatos. Sin complicaciones, sin espera. Reducción de errores, ahorro de tiempo y visibilidad total."
          overlineSx={{ color: '#6ee7b7', fontSize: '0.75rem' }}
          titleSx={{ color: 'white', fontWeight: 800, fontSize: { xs: '2rem', md: '3rem' }, maxWidth: 600 }}
          subtitleSx={{ color: 'rgba(255,255,255,0.85)', maxWidth: 500, fontSize: '1.1rem', fontWeight: 500 }}
          sx={{ mb: 8 }}
        />

        <Grid container spacing={3}>
          {benefits.map((b, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <Box sx={{
                p: 4, height: '100%', borderRadius: 4,
                bgcolor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                animation: `fadeInUp 0.4s ${i * 0.1}s ease both`,
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease, border-color 0.3s ease',
                '&:hover': {
                  bgcolor: 'rgba(255,255,255,0.08)',
                  transform: 'translateY(-8px) scale(1.02)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                  borderColor: 'rgba(52,211,153,0.3)',
                },
              }}>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{ mb: 2.5 }}>
                  <Box sx={{
                    width: 56, height: 56, borderRadius: 3,
                    bgcolor: 'rgba(52,211,153,0.12)', color: '#34d399',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(52,211,153,0.2)',
                    transition: 'transform 0.3s ease',
                    '& svg': { fontSize: 28, transition: 'transform 0.3s ease' },
                    '&:hover svg': { transform: 'scale(1.2) rotate(5deg)' },
                  }}>
                    {b.icon}
                  </Box>
                  <Stack alignItems="flex-end">
                    <Typography sx={{ color: '#34d399', fontWeight: 900, fontSize: '1.75rem', lineHeight: 1 }}>
                      {b.metric}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>
                      {b.metricLabel}
                    </Typography>
                  </Stack>
                </Stack>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1, color: 'white', fontSize: '1.1rem' }}>
                  {b.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontWeight: 500 }}>
                  {b.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Benefits;
