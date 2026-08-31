'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack, Link, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { CONFIG } from '../../constants';

const footerLinkSx = { color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' }, transition: 'color 0.25s' };

const Footer = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <>
      <Box sx={{ bgcolor: '#022347', color: 'white', py: 6 }}>
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }}>
              <Box sx={{ flex: { xs: '0 0 auto', md: 1 }, minWidth: { xs: '100%', md: '200px' } }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
                  {CONFIG.company.name}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  El punto de venta inteligente para negocios multi-tienda.
                </Typography>
              </Box>
              <Stack spacing={2} sx={{ flex: { xs: '0 0 auto', md: 1 }, minWidth: { xs: '100%', md: '150px' } }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
                  Producto
                </Typography>
                <Stack direction="column" spacing={1.5} component="nav" aria-label="Enlaces del sitio">
                  <Link href="#product" sx={footerLinkSx}>
                    Producto
                  </Link>
                  <Link href="#multi-store" sx={footerLinkSx}>
                    Multi-sucursal
                  </Link>
                  <Link href="#features" sx={footerLinkSx}>
                    Funcionalidades
                  </Link>
                  <Link href="#pricing" sx={footerLinkSx}>
                    Precios
                  </Link>
                  <Link href="#faq" sx={footerLinkSx}>
                    Preguntas frecuentes
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ flex: { xs: '0 0 auto', md: 1 }, minWidth: { xs: '100%', md: '150px' }, alignItems: 'flex-start' }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
                  Legal
                </Typography>
                <Stack direction="column" spacing={1.5}>
                  <Link
                    component="button"
                    onClick={() => setOpenTerms(true)}
                    sx={{ ...footerLinkSx, textAlign: 'left' }}
                  >
                    Términos y Condiciones
                  </Link>
                  <Link
                    component="button"
                    onClick={() => setOpenPrivacy(true)}
                    sx={{ ...footerLinkSx, textAlign: 'left' }}
                  >
                    Política de Privacidad
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing={2} sx={{ flex: { xs: '0 0 auto', md: 1 }, minWidth: { xs: '100%', md: '200px' } }}>
                <Typography variant="h6" component="p" sx={{ fontWeight: 800, mb: 2, fontSize: '1.1rem' }}>
                  Contacto
                </Typography>
                <Stack direction="column" spacing={1.5}>
                  <Link href={`https://wa.me/${CONFIG.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" sx={footerLinkSx}>
                    WhatsApp
                  </Link>
                </Stack>
              </Stack>
            </Stack>
            <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', textAlign: { xs: 'center', md: 'left' } }}>
                  © {new Date().getFullYear()} {CONFIG.company.name}. Todos los derechos reservados.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

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
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                1. Aceptación de términos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Al acceder y usar Smartventa, aceptas estar sujeto a estos términos y condiciones.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                2. Uso del servicio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Smartventa es un sistema de punto de venta diseñado para negocios multi-tienda. Te comprometes a usar el servicio de manera legal y apropiada.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                3. Cuenta demo
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                La cuenta demo es proporcionada únicamente con fines de evaluación. Los datos en la cuenta demo pueden ser reiniciados periódicamente.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                4. Limitación de responsabilidad
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Smartventa se proporciona "tal cual". No garantizamos que el servicio será ininterrumpido o libre de errores.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                5. Contacto
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Para preguntas sobre estos términos, contáctanos al: {CONFIG.contact.phone}
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>

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
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                1. Información que recopilamos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Recopilamos información que nos proporcionas directamente cuando solicitas una demo o te contactas con nosotros, incluyendo nombre, correo electrónico, teléfono y nombre de tu negocio.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                2. Uso de la información
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Utilizamos tu información para: contactarte sobre tu solicitud de demo, enviarte información sobre Smartventa, y mejorar nuestros servicios.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                3. Protección de datos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Implementamos medidas de seguridad para proteger tu información personal. No compartimos tus datos con terceros sin tu consentimiento.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={{ fontWeight: 600, mb: 1 }}>
                4. Contacto
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Si tienes preguntas sobre esta política, contáctanos al: {CONFIG.contact.phone}
              </Typography>
            </Box>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Footer;
