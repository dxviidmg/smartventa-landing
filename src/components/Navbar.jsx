import { useState } from 'react';
import {
  AppBar, Toolbar, Container, Button, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, Stack,
} from '@mui/material';
import { Menu as MenuIcon, DarkMode, LightMode } from '@mui/icons-material';
import { scrollToSection } from '../utils/helpers';
import { useColorMode } from '../hooks/useColorMode';
import { CONFIG } from '../config/constants';

const NAV_ITEMS = [
  { label: 'Beneficios', id: 'benefits' },
  { label: 'Características', id: 'features' },
  { label: 'Cómo funciona', id: 'how-it-works' },
  { label: 'Precios', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { mode, toggle } = useColorMode();

  const handleNav = (id) => {
    scrollToSection(id);
    setDrawerOpen(false);
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(15,23,42,0.8)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid',
          borderColor: mode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.06)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64 } }}>
            <Box
              component="img"
              src="/logo.jpg"
              alt={CONFIG.company.name}
              sx={{ height: 36, borderRadius: 1, cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onError={(e) => { e.target.style.display = 'none'; }}
            />

            <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NAV_ITEMS.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => handleNav(id)}
                  sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: 'primary.main' } }}
                >
                  {label}
                </Button>
              ))}
              <IconButton onClick={toggle} size="small" sx={{ ml: 1 }}>
                {mode === 'light' ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}
              </IconButton>
              <Button
                variant="contained"
                onClick={() => handleNav('cta')}
                sx={{
                  ml: 1,
                  bgcolor: 'secondary.main',
                  color: '#fff',
                  '&:hover': { bgcolor: '#059669' },
                  boxShadow: '0 2px 12px rgba(16,185,129,0.3)',
                }}
              >
                Solicitar demo
              </Button>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton onClick={toggle} size="small">
                {mode === 'light' ? <DarkMode fontSize="small" /> : <LightMode fontSize="small" />}
              </IconButton>
              <IconButton onClick={() => setDrawerOpen(true)}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, pt: 2 }}>
          <List>
            {NAV_ITEMS.map(({ label, id }) => (
              <ListItem key={id} disablePadding>
                <ListItemButton onClick={() => handleNav(id)}>
                  <ListItemText primary={label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton onClick={() => handleNav('cta')}>
                <ListItemText primary="Solicitar demo" primaryTypographyProps={{ color: 'secondary.main', fontWeight: 600 }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
