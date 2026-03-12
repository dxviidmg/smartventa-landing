import { Box, Container, Typography, Stack } from '@mui/material';
import { FadeInView } from './AnimatedComponents';

// Componente reutilizable para encabezados de sección
export const SectionHeader = ({ title, subtitle, align = 'center', color = 'text.primary' }) => {
  return (
    <Stack spacing={2} alignItems={align} textAlign={align}>
      <FadeInView>
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color }}
        >
          {title}
        </Typography>
      </FadeInView>
      {subtitle && (
        <FadeInView delay={0.1}>
          <Typography
            variant="body1"
            sx={{
              color: color === 'white' ? 'rgba(255,255,255,0.9)' : 'text.secondary',
              maxWidth: '700px',
              fontSize: '1.1rem',
            }}
          >
            {subtitle}
          </Typography>
        </FadeInView>
      )}
    </Stack>
  );
};

// Componente wrapper para secciones
export const Section = ({ id, bgcolor = '#ffffff', py = { xs: 8, md: 12 }, children }) => {
  return (
    <Box id={id} sx={{ py, bgcolor }}>
      <Container maxWidth="lg">
        {children}
      </Container>
    </Box>
  );
};
