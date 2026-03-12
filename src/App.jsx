import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Industries from './components/Industries';
import Comparison from './components/Comparison';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
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
        <Industries />
        <Comparison />
        <Features />
        <HowItWorks />
        <Benefits />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
