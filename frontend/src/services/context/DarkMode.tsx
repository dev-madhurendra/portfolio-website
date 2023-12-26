import React, { ReactNode, createContext, useState } from 'react';
import { DarkModeContextProps } from '../../interfaces/types';

export const DarkModeContext = createContext<DarkModeContextProps | undefined>(undefined);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(localStorage.getItem('darkMode') === 'true');

  const toggleMode = () => {
    setIsDark((prevIsDark) => {
      const newIsDark = !prevIsDark;
      localStorage.setItem('darkMode', newIsDark ? 'true' : 'false');
      return newIsDark;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDark, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
