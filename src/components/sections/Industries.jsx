import { Box, Container, Typography, Stack } from '@mui/material';
import { industries } from '../../data/industries';
import { sectionPadding } from '../../constants';

const Industries = () => (
  <div id="industries">
    <Box sx={{ ...sectionPadding, py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          sx={{
            textAlign: 'center', color: 'text.secondary',
            fontSize: '1rem', fontWeight: 500, mb: 4,
          }}
        >
          Usado por tiendas de
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={1.5}
        >
          {industries.map((industry, i) => (
            <Stack
              key={i}
              direction="row"
              spacing={0.75}
              alignItems="center"
              sx={{
                py: 1.25, px: 2.5,
                borderRadius: 2,
                border: '1px solid', borderColor: 'divider',
                bgcolor: 'background.paper',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
                '&:hover': {
                  borderColor: 'primary.light',
                  bgcolor: 'rgba(4,52,107,0.03)',
                },
              }}
            >
              <Box sx={{ display: 'flex', '& svg': { fontSize: 18, color: 'text.secondary' } }}>
                {industry.icon}
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.primary', whiteSpace: 'nowrap' }}>
                {industry.title}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Box>
  </div>
);

export default Industries;
