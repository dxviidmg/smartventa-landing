import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './theme';
import { AppProvider } from './contexts/AppContext';
import { WhatsAppProvider } from './contexts/WhatsAppContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SEO from './components/layout/SEO';

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
            <SEO
              title="Punto de Venta en la Nube para Múltiples Sucursales"
              description="Sistema punto de venta en la nube para negocios con múltiples sucursales en México. Controla inventario, ventas y transferencias en tiempo real. Sin instalación."
              keywords="punto de venta, pos, multi-tienda, inventario, ventas, retail, smartventa, méxico, sucursales"
            />
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
