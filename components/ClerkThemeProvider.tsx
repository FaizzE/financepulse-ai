'use client'

import { ClerkProvider } from '@clerk/nextjs'

interface ClerkThemeProviderProps {
  children: React.ReactNode
}

export default function ClerkThemeProvider ({
  children
}: ClerkThemeProviderProps) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#059669', // emerald-600
          colorBackground: '#ffffff',
          colorInputBackground: '#f9fafb',
          colorInputText: '#1f2937',
          borderRadius: '0.75rem'
        },
        elements: {
          formButtonPrimary: {
            backgroundColor: '#059669',
            '&:hover': {
              backgroundColor: '#047857'
            }
          },
          card: {
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(229, 231, 235, 0.3)'
          },
          headerTitle: {
            color: '#1f2937'
          },
          headerSubtitle: {
            color: '#6b7280'
          },
          socialButtonsBlockButton: {
            border: '1px solid rgba(229, 231, 235, 0.3)',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(8px)'
          },
          dividerLine: {
            backgroundColor: 'rgba(229, 231, 235, 0.3)'
          },
          formFieldInput: {
            backgroundColor: 'rgba(249, 250, 251, 0.8)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(229, 231, 235, 0.3)'
          }
        }
      }}
    >
      {children}
    </ClerkProvider>
  )
}
