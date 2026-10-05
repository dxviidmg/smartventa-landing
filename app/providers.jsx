'use client';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { MotionConfig } from 'framer-motion';
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
            <MotionConfig reducedMotion="user">{children}</MotionConfig>
          </ThemeProvider>
        </WhatsAppProvider>
      </AppProvider>
    </AppRouterCacheProvider>
  );
}
