'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { AppBar, Box, Toolbar, Container, Button, IconButton, Stack } from '@mui/material';
import { useApp } from '../../contexts/AppContext';
import { CONFIG, ACCENT, POPPINS, NAV_BG } from '../../constants';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>
  </svg>
);

const LazyDrawer = lazy(() => import('./NavDrawer'));

const NAV_ITEMS = [
  { label: 'Industrias', id: 'industries' },
  { label: 'Funciones', id: 'product' },
  { label: 'Precios', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  const { drawerOpen, setDrawerOpen, scrollToSection } = useApp();
  const [drawerLoaded, setDrawerLoaded] = useState(false);
  // Transparent at the very top, solid blue once the page scrolls
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
          backgroundColor: 'transparent',
          backgroundImage: 'none',
          boxShadow: scrolled ? '0 6px 24px rgba(0,10,50,0.28)' : 'none',
          py: '15px',
          transition: 'box-shadow 0.4s ease',
          '@media (prefers-reduced-motion: reduce)': { transition: 'none' },
        }}
      >
        {/* The gradient sits on its own layer so its opacity can fade in (a gradient cannot be transitioned directly) */}
        <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, background: NAV_BG, opacity: scrolled ? 1 : 0, transition: 'opacity 0.4s ease', '@media (prefers-reduced-motion: reduce)': { transition: 'none' } }} />
        <Container maxWidth="lg" sx={{ position: 'relative' }}>
          <Toolbar disableGutters sx={{ minHeight: 'auto !important' }}>
            <a
              href="/"
              aria-label={`${CONFIG.company.name} — ir al inicio`}
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              style={{ display: 'flex', alignItems: 'center', minHeight: 44 }}
            >
              {/* Icono + letra desde sm; solo el icono en celulares angostos */}
              <Box
                component="img"
                src="/logo-white.svg"
                alt={CONFIG.company.name}
                width={171}
                height={36}
                sx={{ display: { xs: 'none', sm: 'block' }, height: 36, width: 'auto' }}
              />
              <Box
                component="img"
                src="/icon-white.svg"
                alt={CONFIG.company.name}
                width={40}
                height={40}
                sx={{ display: { xs: 'block', sm: 'none' }, height: 40, width: 40 }}
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
              sx={{ display: { xs: 'flex', md: 'none' }, color: 'white', ml: 'auto', width: 44, height: 44 }}
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
