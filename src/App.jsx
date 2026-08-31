import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './theme';
import { AppProvider } from './contexts/AppContext';
import { WhatsAppProvider } from './contexts/WhatsAppContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

const PainPoints = lazy(() => import('./components/sections/PainPoints'));
const ProductShowcase = lazy(() => import('./components/sections/ProductShowcase'));
const Features = lazy(() => import('./components/sections/Features'));
const HowItWorks = lazy(() => import('./components/sections/HowItWorks'));
const Pricing = lazy(() => import('./components/sections/Pricing'));
const FAQ = lazy(() => import('./components/sections/FAQ'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));
const WhatsAppButton = lazy(() => import('./components/ui/WhatsAppButton'));

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
                <PainPoints />
                <ProductShowcase />
                <Features />
                <HowItWorks />
                <Pricing />
                <FAQ />
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
