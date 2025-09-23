import React, { ReactNode, createContext, useState, useEffect } from 'react';
import { DarkModeContextProps } from '../../interfaces/types';

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storedMode = localStorage.getItem('dark');
    if (storedMode) return storedMode === 'false';
    return false; 
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDark ? 'true' : 'false');
    document.body.dataset.theme = isDark ? 'dark' : 'light';
  }, [isDark]);

  const toggleMode = () => setIsDark(prev => !prev);

  return (
    <DarkModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
