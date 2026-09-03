'use client';

import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};

export const AppProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth'});
      setDrawerOpen(false);
    }
  }, []);

  const value = useMemo(() => ({
    drawerOpen,
    setDrawerOpen,
    scrolled,
    setScrolled,
    scrollToSection,
  }), [drawerOpen, scrolled, scrollToSection]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
