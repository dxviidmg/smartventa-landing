import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme } from './theme';
import { AppProvider } from './contexts/AppContext';
import { WhatsAppProvider } from './contexts/WhatsAppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const DashboardPreview = lazy(() => import('./components/DashboardPreview'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  return (
    <AppProvider>
      <WhatsAppProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <Box sx={{ minHeight: '100vh' }}>
            <Navbar />
            <main role="main">
              <Hero />
              <Box sx={{ bgcolor: '#CAD2DE' }}><Industries /></Box>
              <Benefits />
              <Suspense fallback={null}>
                <Box sx={{ bgcolor: '#CAD2DE' }}><Features /></Box>
                <HowItWorks />
                <Box sx={{ bgcolor: '#CAD2DE' }}><DashboardPreview /></Box>
                <Pricing />
                <Box sx={{ bgcolor: '#CAD2DE' }}><FAQ /></Box>
              </Suspense>
              <Contact />
            </main>
            <WhatsAppButton />
            <Footer />
          </Box>
        </ThemeProvider>
      </WhatsAppProvider>
    </AppProvider>
  );
}

export default App;
