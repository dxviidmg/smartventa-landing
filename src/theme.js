import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#04346b',
      dark: '#03294d',
    },
    background: {
      default: '#f1f5f9',
      paper: '#f8fafc',
    },
    text: {
      primary: '#1e293b',
      secondary: '#334155',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      'Segoe UI',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
    body1: {
      fontWeight: 500,
    },
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)',
    '0 2px 4px rgba(0,0,0,0.08), 0 2px 3px rgba(0,0,0,0.04)',
    '0 4px 6px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)',
    '0 6px 8px rgba(0,0,0,0.08), 0 3px 5px rgba(0,0,0,0.04)',
    '0 8px 10px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)',
    '0 10px 12px rgba(0,0,0,0.08), 0 5px 7px rgba(0,0,0,0.04)',
    '0 12px 14px rgba(0,0,0,0.08), 0 6px 8px rgba(0,0,0,0.04)',
    '0 14px 16px rgba(0,0,0,0.08), 0 7px 9px rgba(0,0,0,0.04)',
    '0 16px 18px rgba(0,0,0,0.08), 0 8px 10px rgba(0,0,0,0.04)',
    '0 18px 20px rgba(0,0,0,0.08), 0 9px 11px rgba(0,0,0,0.04)',
    '0 20px 22px rgba(0,0,0,0.08), 0 10px 12px rgba(0,0,0,0.04)',
    '0 22px 24px rgba(0,0,0,0.08), 0 11px 13px rgba(0,0,0,0.04)',
    '0 24px 26px rgba(0,0,0,0.08), 0 12px 14px rgba(0,0,0,0.04)',
    '0 26px 28px rgba(0,0,0,0.08), 0 13px 15px rgba(0,0,0,0.04)',
    '0 28px 30px rgba(0,0,0,0.08), 0 14px 16px rgba(0,0,0,0.04)',
    '0 30px 32px rgba(0,0,0,0.08), 0 15px 17px rgba(0,0,0,0.04)',
    '0 32px 34px rgba(0,0,0,0.08), 0 16px 18px rgba(0,0,0,0.04)',
    '0 34px 36px rgba(0,0,0,0.08), 0 17px 19px rgba(0,0,0,0.04)',
    '0 36px 38px rgba(0,0,0,0.08), 0 18px 20px rgba(0,0,0,0.04)',
    '0 38px 40px rgba(0,0,0,0.08), 0 19px 21px rgba(0,0,0,0.04)',
    '0 40px 42px rgba(0,0,0,0.08), 0 20px 22px rgba(0,0,0,0.04)',
    '0 42px 44px rgba(0,0,0,0.08), 0 21px 23px rgba(0,0,0,0.04)',
    '0 44px 46px rgba(0,0,0,0.08), 0 22px 24px rgba(0,0,0,0.04)',
    '0 46px 48px rgba(0,0,0,0.08), 0 23px 25px rgba(0,0,0,0.04)',
  ],
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '1.5rem',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 8px 10px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.04)',
          },
        },
      },
    },
  },
});
