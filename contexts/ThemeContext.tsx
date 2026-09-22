'use client';

import React, { createContext, useContext } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Permanently locked to light mode, but typed to allow 'dark' for compatibility
  const theme: Theme = 'light';
  const toggleTheme = () => {
    // No-op since dark mode is disabled permanently
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    return { theme: 'light' as Theme, toggleTheme: () => {} };
  }
  return context;
}