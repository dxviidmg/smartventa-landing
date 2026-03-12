import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { ErrorOutline, CheckCircleOutline } from '@mui/icons-material';

const Problem = () => {
  const problems = [
    'Errores de inventario',
    'Falta de visibilidad del negocio',
    'Decisiones basadas en información incompleta',
  ];

  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: '#fff3e0',
                border: '2px solid #ffb74d',
              }}
            >
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <ErrorOutline sx={{ fontSize: 40, color: '#f57c00' }} />
                  <Typography variant="h4" sx={{ color: '#e65100' }}>
                    El Problema
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                  Muchos negocios con varias sucursales usan sistemas separados o procesos
                  manuales para controlar ventas e inventario.
                </Typography>
                <Stack spacing={1} sx={{ mt: 2 }}>
                  {problems.map((problem, index) => (
                    <Stack key={index} direction="row" spacing={1} alignItems="center">
                      <Box
                        sx={{
                          width: 6,
                          height: 6,
                          borderRadius: '50%',
                          bgcolor: '#f57c00',
                        }}
                      />
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {problem}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card
              sx={{
                bgcolor: '#e8f5e9',
                border: '2px solid #81c784',
              }}
            >
              <Stack spacing={2}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <CheckCircleOutline sx={{ fontSize: 40, color: '#388e3c' }} />
                  <Typography variant="h4" sx={{ color: '#2e7d32' }}>
                    La Solución
                  </Typography>
                </Stack>
                <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                  Smartventa centraliza todas tus tiendas en una sola plataforma.
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.primary', lineHeight: 1.7 }}>
                  Control total, visibilidad en tiempo real y decisiones basadas en datos
                  precisos.
                </Typography>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Problem;
