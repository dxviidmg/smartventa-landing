import { useState } from 'react';
import {
  AppBar, Toolbar, Container, Button, Box, IconButton, Drawer,
  List, ListItem, ListItemButton, ListItemText, Stack,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { scrollToSection, openWhatsApp } from '../utils/helpers';
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
          bgcolor: 'primary.main',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
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
                  sx={{ color: 'rgba(255,255,255,0.8)', fontWeight: 500, fontSize: '0.9rem', '&:hover': { color: '#fff' } }}
                >
                  {label}
                </Button>
              ))}
              <Button
                variant="contained"
                onClick={() => openWhatsApp()}
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

            <IconButton onClick={() => setDrawerOpen(true)} sx={{ display: { xs: 'flex', md: 'none' }, color: '#fff' }}>
              <MenuIcon />
            </IconButton>
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
