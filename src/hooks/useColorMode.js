import { useState, useMemo, createContext, useContext, createElement } from 'react';
import { lightTheme, darkTheme } from '../theme';

const ColorModeContext = createContext();

export const useColorMode = () => useContext(ColorModeContext);

export const ColorModeProvider = ({ children }) => {
  const [mode, setMode] = useState('light');
  const toggle = () => setMode(prev => (prev === 'light' ? 'dark' : 'light'));
  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);
  return createElement(ColorModeContext.Provider, { value: { mode, toggle, theme } }, children);
};
