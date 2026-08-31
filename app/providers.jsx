'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { lightTheme } from '@/theme';
import { AppProvider } from '@/contexts/AppContext';
import { WhatsAppProvider } from '@/contexts/WhatsAppContext';

export default function Providers({ children }) {
  return (
    <AppRouterCacheProvider options={{ key: 'mui' }}>
      <AppProvider>
        <WhatsAppProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </WhatsAppProvider>
      </AppProvider>
    </AppRouterCacheProvider>
  );
}
