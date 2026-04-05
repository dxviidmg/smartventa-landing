import { lazy, Suspense } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme } from './theme';
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
  const sections = [
    { component: <Hero />, bg: 'transparent' },
    { component: <Industries />, bg: '#CAD2DE' },
    { component: <Benefits />, bg: 'transparent' },
    { component: <Features />, bg: '#CAD2DE' },
    { component: <HowItWorks />, bg: 'transparent' },
    { component: <DashboardPreview />, bg: '#CAD2DE' },
    { component: <Pricing />, bg: 'transparent' },
    { component: <FAQ />, bg: '#CAD2DE' },
    { component: <Contact />, bg: 'transparent' },
  ];

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        <main role="main">
          {sections.map((section, index) => (
            <Box key={index} sx={{ bgcolor: section.bg }}>
              {section.component}
            </Box>
          ))}
        </main>
        <WhatsAppButton />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
