import { Box, Container, Typography, Grid, Stack, Link, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { PhoneOutlined, EmailOutlined, Close } from '@mui/icons-material';
import { useModal } from '../hooks/useModal';
import { CONFIG } from '../config/constants';

const Footer = () => {
  const privacyModal = useModal();
  const termsModal = useModal();

  return (
    <>
      <Box sx={{ py: 6, bgcolor: (t) => t.palette.mode === 'dark' ? '#0b1120' : '#04346b', color: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{CONFIG.company.name}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                {CONFIG.company.tagline}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>Contacto</Typography>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneOutlined sx={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>{CONFIG.contact.phone}</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailOutlined sx={{ fontSize: 16, color: 'rgba(255,255,255,0.5)' }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>{CONFIG.contact.email}</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1.5 }}>Legal</Typography>
              <Stack spacing={1}>
                <Link component="button" onClick={privacyModal.open} sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', textAlign: 'left', fontSize: '0.875rem', '&:hover': { color: 'white' } }}>
                  Política de Privacidad
                </Link>
                <Link component="button" onClick={termsModal.open} sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', textAlign: 'left', fontSize: '0.875rem', '&:hover': { color: 'white' } }}>
                  Términos y Condiciones
                </Link>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>
              © {new Date().getFullYear()} {CONFIG.company.name}. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Privacy Modal */}
      <Dialog open={privacyModal.isOpen} onClose={privacyModal.close} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Política de Privacidad
          <IconButton onClick={privacyModal.close}><Close /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Última actualización: Marzo 2026</Typography>
            {[
              { t: '1. Información que recopilamos', d: 'Recopilamos información que nos proporcionas directamente cuando solicitas una demo o te contactas con nosotros, incluyendo nombre, correo electrónico, teléfono y nombre de tu negocio.' },
              { t: '2. Uso de la información', d: 'Utilizamos tu información para contactarte sobre tu solicitud de demo, enviarte información sobre SmartVenta y mejorar nuestros servicios.' },
              { t: '3. Protección de datos', d: 'Implementamos medidas de seguridad para proteger tu información personal. No compartimos tus datos con terceros sin tu consentimiento.' },
              { t: '4. Contacto', d: `Si tienes preguntas sobre esta política, contáctanos al: ${CONFIG.contact.phone}` },
            ].map((s, i) => (
              <Box key={i}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1rem' }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{s.d}</Typography>
              </Box>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>

      {/* Terms Modal */}
      <Dialog open={termsModal.isOpen} onClose={termsModal.close} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          Términos y Condiciones
          <IconButton onClick={termsModal.close}><Close /></IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>Última actualización: Marzo 2026</Typography>
            {[
              { t: '1. Aceptación de términos', d: 'Al acceder y usar SmartVenta, aceptas estar sujeto a estos términos y condiciones.' },
              { t: '2. Uso del servicio', d: 'SmartVenta es un sistema de punto de venta diseñado para negocios multi-tienda. Te comprometes a usar el servicio de manera legal y apropiada.' },
              { t: '3. Cuenta demo', d: 'La cuenta demo es proporcionada únicamente con fines de evaluación. Los datos en la cuenta demo pueden ser reiniciados periódicamente.' },
              { t: '4. Limitación de responsabilidad', d: 'SmartVenta se proporciona "tal cual". No garantizamos que el servicio será ininterrumpido o libre de errores.' },
              { t: '5. Contacto', d: `Para preguntas sobre estos términos, contáctanos al: ${CONFIG.contact.phone}` },
            ].map((s, i) => (
              <Box key={i}>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1rem' }}>{s.t}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{s.d}</Typography>
              </Box>
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
