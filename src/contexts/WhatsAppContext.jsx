import { createContext, useContext, useCallback, useMemo } from 'react';
import { CONFIG } from '../constants';

const WhatsAppContext = createContext(null);

export const useWhatsApp = () => {
  const context = useContext(WhatsAppContext);
  if (!context) {
    throw new Error('useWhatsApp must be used within a WhatsAppProvider');
  }
  return context;
};

export const WhatsAppProvider = ({ children }) => {
  const openWhatsApp = useCallback((message = '') => {
    const phoneNumber = CONFIG.contact.phoneFormatted;
    const text = message || 'Hola, me interesa solicitar una demo de SmartVenta';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }, []);

  const value = useMemo(() => ({ openWhatsApp }), [openWhatsApp]);

  return (
    <WhatsAppContext.Provider value={value}>
      {children}
    </WhatsAppContext.Provider>
  );
};
