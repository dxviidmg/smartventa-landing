import { createTheme } from '@mui/material/styles';

const DISPLAY = '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif';

export const lightTheme = createTheme({
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    h1: { fontFamily: DISPLAY, fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.08 },
    h2: { fontFamily: DISPLAY, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.12 },
    h3: { fontFamily: DISPLAY, fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.2 },
    h4: { fontFamily: DISPLAY, fontWeight: 700, letterSpacing: '-0.015em' },
    h5: { fontFamily: DISPLAY, fontWeight: 700 },
    h6: { fontFamily: DISPLAY, fontWeight: 700 },
    body1: { fontWeight: 400, lineHeight: 1.7 },
    body2: { fontWeight: 400, lineHeight: 1.7 },
  },
  shape: { borderRadius: 12 },
  palette: {
    primary: { main: '#04346b', dark: '#022347', light: '#065a9e' },
    secondary: { main: '#047857' },
    surface: { alt: '#CAD2DE' },
    background: { default: '#f0f4f8', paper: '#ffffff' },
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
      styleOverrides: { root: { borderRadius: 16, transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)' } },
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
