import { createTheme } from '@mui/material/styles';

const DISPLAY = '"Rubik", -apple-system, BlinkMacSystemFont, sans-serif';

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Rubik", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontFamily: DISPLAY, fontWeight: 600, letterSpacing: '-0.025em', lineHeight: 1.08 },
    h2: { fontFamily: DISPLAY, fontWeight: 600, letterSpacing: '-0.02em', lineHeight: 1.12 },
    h3: { fontFamily: DISPLAY, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 },
    h4: { fontFamily: DISPLAY, fontWeight: 700, letterSpacing: '-0.015em' },
    h5: { fontFamily: DISPLAY, fontWeight: 700 },
    h6: { fontFamily: DISPLAY, fontWeight: 700 },
    body1: { fontWeight: 400, lineHeight: 1.7 },
    body2: { fontWeight: 400, lineHeight: 1.7 },
  },
  shape: { borderRadius: 16 },
  palette: {
    primary: { main: '#2563EB', dark: '#1D4ED8', light: '#3B82F6', contrastText: '#ffffff' },
    secondary: { main: '#7C3AED' },
    surface: { alt: '#E9EFF8' },
    background: { default: '#ffffff', paper: '#ffffff' },
    text: { primary: '#0F172A', secondary: '#475569' },
    divider: '#E2E8F0',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: 0,
          padding: '10px 24px',
          minHeight: 44,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          boxShadow: '0 10px 30px rgba(37,99,235,0.08)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
  },
});
