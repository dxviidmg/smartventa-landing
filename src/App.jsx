import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './theme';
import { AppProvider } from './contexts/AppContext';
import { WhatsAppProvider } from './contexts/WhatsAppContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Industries = lazy(() => import('./components/Industries'));
const Benefits = lazy(() => import('./components/Benefits'));
const Features = lazy(() => import('./components/Features'));
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const DashboardPreview = lazy(() => import('./components/DashboardPreview'));
const Pricing = lazy(() => import('./components/Pricing'));
const FAQ = lazy(() => import('./components/FAQ'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

function App() {
  return (
    <AppProvider>
      <WhatsAppProvider>
        <ThemeProvider theme={lightTheme}>
          <CssBaseline />
          <div style={{ minHeight: '100vh' }}>
            <Navbar />
            <main role="main">
              <Hero />
              <Suspense fallback={null}>
                <div style={{ backgroundColor: '#CAD2DE' }}><Industries /></div>
                <Benefits />
                <div style={{ backgroundColor: '#CAD2DE' }}><Features /></div>
                <HowItWorks />
                <div style={{ backgroundColor: '#CAD2DE' }}><DashboardPreview /></div>
                <Pricing />
                <div style={{ backgroundColor: '#CAD2DE' }}><FAQ /></div>
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={null}>
              <WhatsAppButton />
              <Footer />
            </Suspense>
          </div>
        </ThemeProvider>
      </WhatsAppProvider>
    </AppProvider>
  );
}

export default App;
