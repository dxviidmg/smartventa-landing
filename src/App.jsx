import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { lightTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
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
        <ProblemSolution />
        <Features />
        <DashboardPreview />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
