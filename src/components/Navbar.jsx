import { useState, useEffect } from 'react';
import { Box, Container, Typography, Stack, Button, IconButton } from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { openWhatsApp } from '../utils/helpers';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Características', href: '#features' },
    { name: 'Cómo funciona', href: '#how-it-works' },
    { name: 'Precios', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        py: 2,
        transition: 'all 0.3s ease',
        bgcolor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
      }}
    >
      <Container maxWidth="lg">
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              fontSize: '1.5rem',
              color: scrolled ? 'primary.main' : 'white',
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            SmartVenta
          </Typography>

          <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 4 }} sx={{ display: { xs: isOpen ? 'flex' : 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <Typography
                key={link.name}
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: scrolled ? 'text.primary' : 'rgba(255,255,255,0.9)',
                  cursor: 'pointer',
                  '&:hover': { color: 'primary.main' },
                }}
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = link.href;
                }}
              >
                {link.name}
              </Typography>
            ))}
            <Button
              variant="contained"
              size="small"
              onClick={() => openWhatsApp()}
              sx={{
                bgcolor: 'secondary.main',
                color: '#fff',
                '&:hover': { bgcolor: '#059669' },
                display: { xs: 'none', md: 'inline-flex' },
              }}
            >
              Probar el sistema
            </Button>
          </Stack>

          <IconButton
            sx={{ color: scrolled ? 'text.primary' : 'white' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <Close /> : <Menu />}
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
