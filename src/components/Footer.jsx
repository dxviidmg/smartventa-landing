import { Box, Container, Typography, Grid, Stack, Link, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { PhoneOutlined, Close } from '@mui/icons-material';
import { useState } from 'react';

const Footer = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <>
      <Box sx={{ py: 6, bgcolor: 'primary.main', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Smartventa</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                El punto de venta inteligente para negocios multi-tienda
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Contacto</Typography>
              <Stack spacing={1}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PhoneOutlined sx={{ fontSize: 20 }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    +52 55 6165 2599
                  </Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Legal</Typography>
              <Stack spacing={1}>
                <Link 
                  component="button" 
                  onClick={() => setOpenPrivacy(true)} 
                  sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', textAlign: 'left', '&:hover': { color: 'white' } }}
                >
                  Política de Privacidad
                </Link>
                <Link 
                  component="button" 
                  onClick={() => setOpenTerms(true)} 
                  sx={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', textAlign: 'left', '&:hover': { color: 'white' } }}
                >
                  Términos y Condiciones
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mt: 6, pt: 3, borderTop: '1px solid rgba(255,255,255,0.2)', textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              © {new Date().getFullYear()} Smartventa. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Modal Política de Privacidad */}
      <Dialog open={openPrivacy} onClose={() => setOpenPrivacy(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Política de Privacidad
          <IconButton onClick={() => setOpenPrivacy(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Última actualización: Marzo 2026
            </Typography>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                1. Información que recopilamos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Recopilamos información que nos proporcionas directamente cuando solicitas una demo o te contactas con nosotros, incluyendo nombre, correo electrónico, teléfono y nombre de tu negocio.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                2. Uso de la información
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Utilizamos tu información para: contactarte sobre tu solicitud de demo, enviarte información sobre Smartventa, y mejorar nuestros servicios.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                3. Protección de datos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Implementamos medidas de seguridad para proteger tu información personal. No compartimos tus datos con terceros sin tu consentimiento.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                4. Contacto
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Si tienes preguntas sobre esta política, contáctanos al: +52 55 6165 2599
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>

      {/* Modal Términos y Condiciones */}
      <Dialog open={openTerms} onClose={() => setOpenTerms(false)} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Términos y Condiciones
          <IconButton onClick={() => setOpenTerms(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Última actualización: Marzo 2026
            </Typography>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                1. Aceptación de términos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Al acceder y usar Smartventa, aceptas estar sujeto a estos términos y condiciones.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                2. Uso del servicio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Smartventa es un sistema de punto de venta diseñado para negocios multi-tienda. Te comprometes a usar el servicio de manera legal y apropiada.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                3. Cuenta demo
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                La cuenta demo es proporcionada únicamente con fines de evaluación. Los datos en la cuenta demo pueden ser reiniciados periódicamente.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                4. Limitación de responsabilidad
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Smartventa se proporciona "tal cual". No garantizamos que el servicio será ininterrumpido o libre de errores.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                5. Contacto
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Para preguntas sobre estos términos, contáctanos al: +52 55 6165 2599
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
