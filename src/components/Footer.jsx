import { Box, Container, Typography, Stack, Link } from '@mui/material';
import { openWhatsApp } from '../utils/helpers';
import { CONFIG } from '../config/constants';

const Footer = () => (
  <Box sx={{ bgcolor: '#022347', color: 'white', py: 8 }}>
    <Container maxWidth="lg">
      <Stack spacing={4}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 8 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 800, mb: 2 }}>
              SmartVenta
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              El punto de venta inteligente para negocios multi-tienda.
            </Typography>
          </Box>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Enlaces
            </Typography>
            <Stack direction="column" spacing={1}>
              <Link href="#features" sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Características
              </Link>
              <Link href="#how-it-works" sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Cómo funciona
              </Link>
              <Link href="#pricing" sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Precios
              </Link>
              <Link href="#faq" sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                FAQ
              </Link>
            </Stack>
          </Stack>
          <Stack spacing={2}>
            <Typography variant="h6" sx={{ fontWeight: 800 }}>
              Contacto
            </Typography>
            <Stack direction="column" spacing={1}>
              <Link
                href={`https://wa.me/${CONFIG.contact.phoneFormatted}`}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}
              >
                WhatsApp: {CONFIG.contact.phone}
              </Link>
              <Link
                href="mailto:contacto@smartventa.com"
                sx={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', '&:hover': { color: 'white' } }}
              >
                contacto@smartventa.com
              </Link>
            </Stack>
          </Stack>
        </Stack>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', pt: 4 }}>
          <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={2}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
              © {new Date().getFullYear()} SmartVenta. Todos los derechos reservados.
            </Typography>
            <Stack direction="row" spacing={3}>
              <Link href="/privacy" sx={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Privacidad
              </Link>
              <Link href="/terms" sx={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', '&:hover': { color: 'white' } }}>
                Términos
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Container>
  </Box>
);

export default Footer;
