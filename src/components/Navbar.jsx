import { useEffect, useRef } from 'react';
import {
  AppBar, Toolbar, Container, Button, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, Stack,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Close from '@mui/icons-material/Close';
import { useApp } from '../contexts/AppContext';
import { CONFIG } from '../config/constants';
import SEO from '../components/SEO';

const NAV_ITEMS = [
  { label: 'Industrias', id: 'industries' },
  { label: 'Beneficios', id: 'benefits' },
  { label: 'Características', id: 'features' },
  { label: 'Cómo funciona', id: 'how-it-works' },
  { label: 'Precios', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  const { drawerOpen, setDrawerOpen, scrolled, scrollToSection, setScrolled } = useApp();
  const rafId = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, [setScrolled]);

  const handleNav = (id) => { scrollToSection(id); setDrawerOpen(false); };

  return (
    <>
      <SEO
        title={CONFIG.company.name}
        description="El punto de venta inteligente para negocios multi-tienda."
      />
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#05346B',
          backdropFilter: 'blur(20px)',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64 } }}>
            <Box
              component="img"
              src="/logo.webp"
              alt={CONFIG.company.name}
              width={99}
              height={34}
              sx={{ height: 34, borderRadius: 0, cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onError={(e) => { e.target.src = '/logo.jpg'; }}
            />

            <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NAV_ITEMS.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => handleNav(id)}
                  sx={{
                    color: 'white',
                    fontWeight: 500, fontSize: '0.88rem',
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.1)' },
                  }}
                >
                  {label}
                </Button>
              ))}
              <Button
                onClick={() => window.open(CONFIG.urls.app, '_blank')}
                sx={{
                  ml: 1,
                  bgcolor: '#047857', color: '#fff',
                  '&:hover': { bgcolor: '#065f46' },
                  boxShadow: '0 2px 12px rgba(4,120,87,0.3)',
                }}
              >
                Iniciar Sesión
              </Button>
            </Stack>

            <IconButton
              aria-label="Abrir menú de navegación"
              onClick={() => setDrawerOpen(true)}
              sx={{ display: { xs: 'flex', md: 'none' }, color: scrolled ? 'text.primary' : 'white' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}><Close /></IconButton>
          </Box>
          <List>
            {NAV_ITEMS.map(({ label, id }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={() => handleNav(id)}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={() => window.open(CONFIG.urls.app, '_blank')}>
                <ListItemText primary="Iniciar Sesión" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton onClick={() => { setDrawerOpen(false); }}>
                <ListItemText primary="Solicitar Demo" primaryTypographyProps={{ color: 'secondary.main', fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
