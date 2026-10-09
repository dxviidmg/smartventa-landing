'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { AppBar, Toolbar, Container, Button, IconButton, Stack } from '@mui/material';
import { useApp } from '../../contexts/AppContext';
import { CONFIG } from '../../constants';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>
  </svg>
);

const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';
const ACCENT = '#00E0D8';
const POPPINS = '"Poppins", sans-serif';

const LazyDrawer = lazy(() => import('./NavDrawer'));

const NAV_ITEMS = [
  { label: 'Sucursales', id: 'multilocal' },
  { label: 'Funciones', id: 'product' },
  { label: 'Inventario', id: 'inventory' },
  { label: 'Precios', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  const { drawerOpen, setDrawerOpen, scrollToSection } = useApp();
  const [drawerLoaded, setDrawerLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => { scrollToSection(id); setDrawerOpen(false); };

  const handleOpenDrawer = () => {
    setDrawerLoaded(true);
    setDrawerOpen(true);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: { xs: GRADIENT, md: scrolled ? GRADIENT : 'transparent' },
          py: { xs: '15px', md: scrolled ? '15px' : '45px' },
          transition: 'padding 0.3s ease, background 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 'auto !important' }}>
            <a
              href="/"
              aria-label={`${CONFIG.company.name} — ir al inicio`}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ display: 'flex' }}
            >
              <img
                src="/logo-transparent.png"
                alt={CONFIG.company.name}
                width={105}
                height={36}
                style={{ height: 36, width: 'auto' }}
                onError={(e) => { e.target.src = '/logo.webp'; }}
              />
            </a>

            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ display: { xs: 'none', md: 'flex' }, flex: 1 }}>
              {NAV_ITEMS.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => handleNav(id)}
                  disableRipple
                  sx={{
                    color: '#fff', fontFamily: POPPINS, fontWeight: 500, fontSize: 16,
                    px: { md: '15px', lg: '22px' }, py: '20px', borderRadius: 0, minHeight: 0,
                    '&:hover': { bgcolor: 'transparent', color: ACCENT },
                    '&:focus-visible': { outline: '2px solid #fff', outlineOffset: -4 },
                  }}
                >
                  {label}
                </Button>
              ))}
            </Stack>

            <Button
              variant="outlined"
              href={`${CONFIG.urls.app}/registrarme`}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                position: 'relative', overflow: 'hidden', zIndex: 0,
                fontFamily: POPPINS, fontWeight: 500, fontSize: 16, borderRadius: '45px',
                px: '30px', py: '10px', color: '#fff', border: `2px solid ${ACCENT}`, whiteSpace: 'nowrap',
                '&::after': {
                  content: '""', position: 'absolute', top: 0, left: '-102%', width: '102%', height: '100%', zIndex: -1,
                  background: 'linear-gradient(45deg, rgb(0,168,244) 0%, rgb(2,209,161) 100%)', transition: 'left 0.3s ease',
                },
                '&:hover': { borderColor: ACCENT, bgcolor: 'transparent' },
                '&:hover::after': { left: 0 },
              }}
            >
              Probar SmartVenta
            </Button>

            <IconButton
              aria-label="Abrir menú de navegación"
              onClick={handleOpenDrawer}
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', ml: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {drawerLoaded && (
        <Suspense fallback={null}>
          <LazyDrawer
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            navItems={NAV_ITEMS}
            onNav={handleNav}
          />
        </Suspense>
      )}
    </>
  );
};

export default Navbar;
