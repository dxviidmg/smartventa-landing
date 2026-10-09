'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack, Link, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { CONFIG } from '../../constants';

const POPPINS = '"Poppins", sans-serif';
const ACCENT = '#00E0D8';
const footerLinkSx = {
  color: 'rgba(255,255,255,0.82)', textDecoration: 'none', font: 'inherit', fontSize: 15, cursor: 'pointer', background: 'none', border: 0, p: 0, display: 'inline-flex', alignItems: 'center', minHeight: 44,
  '&:hover': { color: ACCENT }, '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 3, borderRadius: '4px' }, transition: 'color 0.25s',
};
const columnTitleSx = { fontFamily: POPPINS, fontWeight: 500, mb: 2, fontSize: '1.05rem', color: '#fff' };
const dialogPaper = { sx: { borderRadius: '24px' } };
const dialogTitleSx = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: POPPINS, fontWeight: 500, color: '#242F3E' };
const sectionTitleSx = { fontFamily: POPPINS, fontWeight: 500, mb: 1, fontSize: '1rem', color: '#242F3E' };

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <>
      <Box component="footer" sx={{ background: 'linear-gradient(134deg, #00269E 0%, #00103F 100%)', color: 'white', pt: { xs: 7, md: 9 }, pb: 4 }}>
        <Container maxWidth="lg">
          <Stack spacing={4}>
            <Box sx={{ display: 'grid', gap: { xs: 3, md: 6 }, gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: '1.4fr 1fr 1fr 1fr' } }}>
              <Box sx={{ gridColumn: { sm: '1 / -1', md: 'auto' } }}>
                <Box component="img" src="/logo-transparent.png" alt={CONFIG.company.name} width={120} height={41} sx={{ display: 'block', height: 41, width: 'auto', mb: 2 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.82)', lineHeight: 1.7, fontSize: 15, maxWidth: 300 }}>
                  Punto de venta en la nube para controlar tu negocio estés donde estés, con una o varias sucursales.
                </Typography>
              </Box>
              <Stack spacing={1}>
                <Typography variant="h6" component="p" sx={columnTitleSx}>
                  Producto
                </Typography>
                <Stack direction="column" spacing={0} component="nav" aria-label="Enlaces del sitio">
                  <Link href="#product" sx={footerLinkSx}>
                    Funciones
                  </Link>
                  <Link href="#pricing" sx={footerLinkSx}>
                    Precios
                  </Link>
                  <Link href="#faq" sx={footerLinkSx}>
                    Preguntas frecuentes
                  </Link>
                </Stack>
              </Stack>
              <Stack spacing={1} sx={{ alignItems: 'flex-start' }}>
                <Typography variant="h6" component="p" sx={columnTitleSx}>
                  Legal
                </Typography>
                <Stack direction="column" spacing={0}>
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
              <Stack spacing={1}>
                <Typography variant="h6" component="p" sx={columnTitleSx}>
                  Contacto
                </Typography>
                <Stack direction="column" spacing={0}>
                  <Link href={`https://wa.me/${CONFIG.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" sx={footerLinkSx}>
                    WhatsApp
                  </Link>
                </Stack>
              </Stack>
            </Box>
            <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', pt: 3 }}>
              <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', textAlign: { xs: 'center', md: 'left' } }}>
                  © {CURRENT_YEAR} {CONFIG.company.name}. Todos los derechos reservados.
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Modal Términos y Condiciones */}
      <Dialog open={openTerms} onClose={() => setOpenTerms(false)} maxWidth="md" fullWidth PaperProps={dialogPaper}>
        <DialogTitle sx={dialogTitleSx}>
          Términos y Condiciones
          <IconButton aria-label="Cerrar términos y condiciones" onClick={() => setOpenTerms(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Última actualización: Marzo 2026
            </Typography>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                1. Aceptación de términos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Al acceder y usar SmartVenta, aceptas estar sujeto a estos términos y condiciones.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                2. Uso del servicio
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                SmartVenta es un sistema de punto de venta diseñado para negocios multi-tienda. Te comprometes a usar el servicio de manera legal y apropiada.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                3. Cuenta demo
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                La cuenta demo es proporcionada únicamente con fines de evaluación. Los datos en la cuenta demo pueden ser reiniciados periódicamente.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                4. Limitación de responsabilidad
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                SmartVenta se proporciona "tal cual". No garantizamos que el servicio será ininterrumpido o libre de errores.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
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
      <Dialog open={openPrivacy} onClose={() => setOpenPrivacy(false)} maxWidth="md" fullWidth PaperProps={dialogPaper}>
        <DialogTitle sx={dialogTitleSx}>
          Política de Privacidad
          <IconButton aria-label="Cerrar política de privacidad" onClick={() => setOpenPrivacy(false)}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={3}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Última actualización: Marzo 2026
            </Typography>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                1. Información que recopilamos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Recopilamos información que nos proporcionas directamente cuando solicitas una demo o te contactas con nosotros, incluyendo nombre, correo electrónico, teléfono y nombre de tu negocio.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                2. Uso de la información
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Utilizamos tu información para: contactarte sobre tu solicitud de demo, enviarte información sobre SmartVenta, y mejorar nuestros servicios.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
                3. Protección de datos
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
                Implementamos medidas de seguridad para proteger tu información personal. No compartimos tus datos con terceros sin tu consentimiento.
              </Typography>
            </Box>

            <Box>
              <Typography variant="h6" component="p" sx={sectionTitleSx}>
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
