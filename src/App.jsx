import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { ColorModeProvider, useColorMode } from './hooks/useColorMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Showcase from './components/Showcase';
import Differentiators from './components/Differentiators';
import Pricing from './components/Pricing';
import TargetAudience from './components/TargetAudience';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

const AppContent = () => {
  const { theme } = useColorMode();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh' }}>
        <Navbar />
        <Hero />
        <Benefits />
        <Features />
        <HowItWorks />
        <Showcase />
        <Differentiators />
        <Pricing />
        <TargetAudience />
        <FAQ />
        <CTA />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ColorModeProvider>
      <AppContent />
    </ColorModeProvider>
  );
}

export default App;
