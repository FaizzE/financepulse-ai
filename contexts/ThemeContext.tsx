'use client'

import React, { createContext, useContext } from 'react'

type Theme = 'light'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider ({ children }: { children: React.ReactNode }) {
  // Permanently locked to light mode to prevent any dark mode hydration or state errors
  const theme: Theme = 'light'
  const toggleTheme = () => {
    // No-op since dark mode is disabled permanently
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme () {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    // Fallback object instead of hard crashing the entire application post-signin
    return { theme: 'light' as Theme, toggleTheme: () => {} }
  }
  return context
}
