import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Benefits from './components/Benefits';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Navbar />
        <Hero />
        <Features />
        <Dashboard />
        <Benefits />
        <CTA />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
