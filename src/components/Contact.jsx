import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Card,
  Alert,
  MenuItem,
} from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    sucursales: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ nombre: '', email: '', telefono: '', sucursales: '' });
    }, 3000);
  };

  const sucursalesOptions = [
    { value: '2-3', label: '2-3 sucursales' },
    { value: '4-6', label: '4-6 sucursales' },
    { value: '7-10', label: '7-10 sucursales' },
    { value: '10+', label: 'Más de 10 sucursales' },
  ];

  return (
    <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="md">
        <Stack spacing={4}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
              Solicita acceso a la demo
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', maxWidth: '600px', fontSize: '1.1rem' }}
            >
              Completa el formulario y te daremos acceso a una cuenta demo para que explores
              Smartventa
            </Typography>
          </Stack>

          <Card sx={{ bgcolor: 'white' }}>
            <Box component="form" onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Nombre completo"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  label="Teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  variant="outlined"
                />
                <TextField
                  fullWidth
                  select
                  label="Número de sucursales"
                  name="sucursales"
                  value={formData.sucursales}
                  onChange={handleChange}
                  required
                  variant="outlined"
                >
                  {sucursalesOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {submitted && (
                  <Alert severity="success">
                    ¡Gracias! Nos pondremos en contacto contigo pronto para darte acceso a la demo.
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  fullWidth
                  sx={{
                    py: 1.5,
                    fontSize: '1.1rem',
                    textTransform: 'none',
                  }}
                >
                  Solicitar demo
                </Button>
              </Stack>
            </Box>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
