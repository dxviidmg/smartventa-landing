import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const sections = [
    { component: <Hero />, bg: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' },
    { component: <Benefits />, bg: '#CAD2DE' },
    { component: <Features />, bg: '#CAD2DE' },
    { component: <HowItWorks />, bg: 'white' },
    { component: <DashboardPreview />, bg: '#CAD2DE' },
    { component: <Industries />, bg: 'linear-gradient(145deg, #022347 0%, #04346b 100%)' },
    { component: <Pricing />, bg: 'white' },
    { component: <FAQ />, bg: '#CAD2DE' },
    { component: <Contact />, bg: 'white' },
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        {sections.map((section, index) => (
          <Box key={index} sx={{ bgcolor: section.bg }}>
            {section.component}
          </Box>
        ))}
        <WhatsAppButton />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
