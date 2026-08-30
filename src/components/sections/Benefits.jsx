import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import SectionHeader from '../ui/SectionHeader';
import { benefits } from '../../data/benefits';
import { sectionPadding } from '../../constants';

const Benefits = () => (
  <>
    <Box id="benefits" sx={{ ...sectionPadding, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <SectionHeader
          overline="¿Por qué SmartVenta?"
          title="Hecho para dueños que manejan más de una tienda"
          subtitle="Cada función está pensada para resolver un problema real: saber qué pasa en tus sucursales sin tener que estar ahí."
          sx={{ mb: 8 }}
        />

        <Grid container spacing={3}>
          {benefits.map((b, i) => (
            <Grid size={{ xs: 12, sm: 6 }} key={i}>
              <Stack
                direction="row"
                spacing={2.5}
                sx={{
                  p: 3.5, height: '100%', borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': {
                    borderColor: 'primary.light',
                    boxShadow: '0 4px 20px rgba(4,52,107,0.06)',
                  },
                }}
              >
                <Box sx={{
                  width: 48, height: 48, minWidth: 48, borderRadius: 2.5,
                  bgcolor: 'rgba(4,120,87,0.08)', color: '#047857',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  '& svg': { fontSize: 24 },
                }}>
                  {b.icon}
                </Box>
                <Box>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 0.5, fontSize: '1rem' }}>
                    {b.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {b.desc}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </>
);

export default Benefits;
