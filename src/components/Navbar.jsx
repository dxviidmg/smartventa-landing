import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';

const Navbar = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <AppBar position="fixed" elevation={3} sx={{ bgcolor: 'primary.main', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box component="img" src="/src/assets/logo.jpg" alt="Smartventa" sx={{ height: 40, borderRadius: 1, cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} onError={(e) => e.target.style.display = 'none'} />
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Button onClick={() => scrollTo('features')} sx={{ textTransform: 'none', color: 'white', fontWeight: 500, display: { xs: 'none', md: 'block' } }}>Características</Button>
            <Button onClick={() => scrollTo('how-it-works')} sx={{ textTransform: 'none', color: 'white', fontWeight: 500, display: { xs: 'none', md: 'block' } }}>Cómo funciona</Button>
            <Button onClick={() => scrollTo('benefits')} sx={{ textTransform: 'none', color: 'white', fontWeight: 500, display: { xs: 'none', md: 'block' } }}>Beneficios</Button>
            <Button onClick={() => scrollTo('pricing')} sx={{ textTransform: 'none', color: 'white', fontWeight: 500, display: { xs: 'none', md: 'block' } }}>Precios</Button>
            <Button onClick={() => scrollTo('faq')} sx={{ textTransform: 'none', color: 'white', fontWeight: 500, display: { xs: 'none', md: 'block' } }}>FAQ</Button>
            <Button onClick={() => scrollTo('contact')} variant="contained" sx={{ textTransform: 'none', fontWeight: 500, bgcolor: '#10b981', color: 'white', '&:hover': { bgcolor: '#059669' } }}>Solicitar demo</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
