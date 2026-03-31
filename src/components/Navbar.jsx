import { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Container, Button, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, Stack,
} from '@mui/material';
import { Menu as MenuIcon, Close } from '@mui/icons-material';
import { scrollToSection, openWhatsApp } from '../utils/helpers';
import { CONFIG } from '../config/constants';

const NAV_ITEMS = [
  { label: 'Beneficios', id: 'benefits' },
  { label: 'Características', id: 'features' },
  { label: 'Precios', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => { scrollToSection(id); setDrawerOpen(false); };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.06)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: { xs: 64 } }}>
            <Box
              component="img"
              src="/logo.jpg"
              alt={CONFIG.company.name}
              sx={{ height: 34, borderRadius: 1, cursor: 'pointer' }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onError={(e) => { e.target.style.display = 'none'; }}
            />

            <Stack direction="row" spacing={0.5} alignItems="center" sx={{ display: { xs: 'none', md: 'flex' } }}>
              {NAV_ITEMS.map(({ label, id }) => (
                <Button
                  key={id}
                  onClick={() => handleNav(id)}
                  sx={{
                    color: scrolled ? 'text.primary' : 'white',
                    fontWeight: 500, fontSize: '0.88rem',
                    '&:hover': { bgcolor: scrolled ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.1)' },
                  }}
                >
                  {label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => openWhatsApp()}
                sx={{
                  ml: 1, bgcolor: '#10b981', color: '#fff',
                  '&:hover': { bgcolor: '#059669' },
                  boxShadow: '0 2px 12px rgba(16,185,129,0.3)',
                }}
              >
                Solicitar demo
              </Button>
            </Stack>

            <IconButton
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
              <ListItemButton onClick={() => { openWhatsApp(); setDrawerOpen(false); }}>
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
