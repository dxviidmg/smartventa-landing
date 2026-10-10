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

  // The drawer is a modal that locks page scroll while it is open (and during its exit animation),
  // so close it first and scroll once the lock is released.
  const scrollToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const go = () => el.scrollIntoView({ behavior: 'smooth' });
    if (drawerOpen) {
      setDrawerOpen(false);
      setTimeout(go, 350);
    } else {
      go();
    }
  }, [drawerOpen]);

  const value = useMemo(() => ({
    drawerOpen,
    setDrawerOpen,
    scrollToSection,
  }), [drawerOpen, scrollToSection]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
