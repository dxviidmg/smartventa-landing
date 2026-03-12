import { AppBar, Toolbar, Container, Button, Box } from '@mui/material';
import { scrollToSection } from '../utils/helpers';
import { CONFIG } from '../config/constants';

const NAV_ITEMS = [
  { label: 'Características', id: 'features' },
  { label: 'Cómo funciona', id: 'how-it-works' },
  { label: 'Beneficios', id: 'benefits' },
  { label: 'Precios', id: 'pricing' },
  { label: 'FAQ', id: 'faq' },
];

const Navbar = () => {
  return (
    <AppBar position="fixed" elevation={3} sx={{ bgcolor: 'primary.main', borderBottom: '2px solid rgba(255,255,255,0.1)' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box 
            component="img" 
            src="/src/assets/logo.jpg" 
            alt={CONFIG.company.name}
            sx={{ height: 40, borderRadius: 1, cursor: 'pointer' }} 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            onError={(e) => e.target.style.display = 'none'} 
          />
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            {NAV_ITEMS.map(({ label, id }) => (
              <Button 
                key={id}
                onClick={() => scrollToSection(id)} 
                sx={{ 
                  textTransform: 'none', 
                  color: 'white', 
                  fontWeight: 500, 
                  display: { xs: 'none', md: 'block' } 
                }}
              >
                {label}
              </Button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="contained" 
              sx={{ 
                textTransform: 'none', 
                fontWeight: 500, 
                bgcolor: '#10b981', 
                color: 'white', 
                '&:hover': { bgcolor: '#059669' } 
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
