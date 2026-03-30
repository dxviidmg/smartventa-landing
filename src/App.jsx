import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Industries from './components/Industries';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <Industries />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
