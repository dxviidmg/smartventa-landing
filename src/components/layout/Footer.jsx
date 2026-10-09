'use client';

import { useState } from 'react';
import { Box, Container, Typography, Stack, Link } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { CONFIG, POPPINS, ACCENT } from '../../constants';
import LegalDialog from './LegalDialog';
import { legalDocuments } from '../../data/legal';

const footerLinkSx = {
  color: 'rgba(255,255,255,0.82)', textDecoration: 'none', font: 'inherit', fontSize: 15, cursor: 'pointer', background: 'none', border: 0, p: 0, display: 'inline-flex', alignItems: 'center', minHeight: 44,
  '&:hover': { color: ACCENT }, '&:focus-visible': { outline: '2px solid #fff', outlineOffset: 3, borderRadius: '4px' }, transition: 'color 0.25s',
};
const columnTitleSx = { fontFamily: POPPINS, fontWeight: 500, mb: 2, fontSize: '1.05rem', color: '#fff' };

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
                <Box component="img" src="/logo-white.svg" alt={CONFIG.company.name} width={190} height={40} sx={{ display: 'block', height: 40, width: 'auto', mb: 2 }} />
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

      <LegalDialog open={openTerms} onClose={() => setOpenTerms(false)} document={legalDocuments.terms} />
      <LegalDialog open={openPrivacy} onClose={() => setOpenPrivacy(false)} document={legalDocuments.privacy} />
    </>
  );
};

export default Footer;
