import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const AppContext = createContext(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    
    // Detect active section
    const sections = ['features', 'benefits', 'pricing', 'faq'];
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= 300) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setDrawerOpen(false);
    }
  }, []);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const value = useMemo(() => ({
    drawerOpen,
    setDrawerOpen,
    scrolled,
    setScrolled,
    activeSection,
    handleScroll,
    scrollToSection,
    openDrawer,
    closeDrawer,
  }), [drawerOpen, scrolled, activeSection, handleScroll, scrollToSection]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
