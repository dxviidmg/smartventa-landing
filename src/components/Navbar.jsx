import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { AppBar, Toolbar, Container, Button, IconButton, Stack } from '@mui/material';
import { useApp } from '../contexts/AppContext';
import { CONFIG } from '../config/constants';

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"/>
  </svg>
);

const LazyDrawer = lazy(() => import('./NavDrawer'));

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
  const [drawerLoaded, setDrawerLoaded] = useState(false);

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

  const handleOpenDrawer = () => {
    setDrawerLoaded(true);
    setDrawerOpen(true);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{ bgcolor: '#05346B', backdropFilter: 'blur(20px)' }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64 } }}>
            <img
              src="/logo.webp"
              alt={CONFIG.company.name}
              width={99}
              height={34}
              style={{ height: 34, cursor: 'pointer' }}
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
                onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}
                sx={{
                  ml: 1,
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.5)',
                  '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' },
                }}
                variant="outlined"
              >
                Registrarme
              </Button>
              <Button
                onClick={() => window.open(CONFIG.urls.app, '_blank')}
                sx={{
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
              onClick={handleOpenDrawer}
              sx={{ display: { xs: 'flex', md: 'none' }, color: scrolled ? 'text.primary' : 'white' }}
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
