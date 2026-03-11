import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';

const Navbar = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        bgcolor: 'white',
        color: 'text.primary',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box
            component="img"
            src="/src/assets/logo.jpg"
            alt="Smartventa"
            sx={{
              height: 40,
              width: 'auto',
              borderRadius: 1,
              cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />

          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              onClick={() => scrollToSection('features')}
              sx={{
                textTransform: 'none',
                color: 'text.primary',
                fontWeight: 500,
              }}
            >
              Características
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="contained"
              sx={{
                textTransform: 'none',
                fontWeight: 500,
              }}
            >
              Solicitar demo
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
