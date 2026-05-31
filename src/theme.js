import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Inter", "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.15 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    body1: { fontWeight: 400 },
  },
  shape: { borderRadius: 12 },
  palette: {
    primary: { main: '#04346b', dark: '#022347', light: '#065a9e' },
    secondary: { main: '#047857' },
    background: { default: '#f8fafc', paper: '#ffffff' },
    text: { primary: '#0f172a', secondary: '#64748b' },
    divider: '#e2e8f0',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.01em',
          padding: '10px 24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: { root: { borderRadius: 16, transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' } },
    },
    MuiContainer: {
      styleOverrides: { root: { paddingLeft: 0, paddingRight: 0 } },
    },
  },
});
