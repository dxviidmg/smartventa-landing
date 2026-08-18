import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from './theme';
import { AppProvider } from './contexts/AppContext';
import { WhatsAppProvider } from './contexts/WhatsAppContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import SEO from './components/layout/SEO';

const Industries = lazy(() => import('./components/sections/Industries'));
const Benefits = lazy(() => import('./components/sections/Benefits'));
const Features = lazy(() => import('./components/sections/Features'));
const HowItWorks = lazy(() => import('./components/sections/HowItWorks'));
const DashboardPreview = lazy(() => import('./components/sections/DashboardPreview'));
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
                <div style={{ backgroundColor: lightTheme.palette.surface.alt }}><Industries /></div>
                <Benefits />
                <div style={{ backgroundColor: lightTheme.palette.surface.alt }}><Features /></div>
                <HowItWorks />
                <div style={{ backgroundColor: lightTheme.palette.surface.alt }}><DashboardPreview /></div>
                <Pricing />
                <div style={{ backgroundColor: lightTheme.palette.surface.alt }}><FAQ /></div>
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
