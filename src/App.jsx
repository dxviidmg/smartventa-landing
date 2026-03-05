import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

const theme = createTheme({
  palette: {
    primary: { main: '#04346b' },
    secondary: { main: '#0066cc' },
    background: { default: '#f1f5f9' },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Hero />
      <Features />
      <Benefits />
      <Screenshots />
      <Pricing />
      <Contact />
    </ThemeProvider>
  );
}

export default App;
