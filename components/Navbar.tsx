'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Navbar () {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className='sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-xl'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5 lg:px-8'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 font-semibold tracking-tight transition hover:opacity-90'
          onClick={closeMobileMenu}
        >
          <span className='grid size-8 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm'>
            <svg
              className='size-4'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z' />
              <path d='M5 3v4' />
              <path d='M19 17v4' />
              <path d='M3 5h4' />
              <path d='M17 19h4' />
            </svg>
          </span>
          <span className='text-base sm:text-lg font-bold'>
            FinancePulse <span className='text-primary'>AI</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex items-center gap-7 text-sm font-medium text-muted-foreground'>
          <Link href='/' className='transition hover:text-foreground'>
            Home
          </Link>
          <Link href='/about' className='transition hover:text-foreground'>
            About
          </Link>
          <Link href='/contact' className='transition hover:text-foreground'>
            Contact
          </Link>
        </nav>

        {/* Right Section: Clerk Auth & Mobile Menu Toggle */}
        <div className='flex items-center gap-3'>
          {/* Desktop Authentication */}
          <div className='hidden sm:block'>
            ;<SignedOut>
  <SignInButton mode='modal'>
    <button className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:shadow-md cursor-pointer'>
      <span>Sign In</span>
      <svg
        className='size-3.5'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M5 12h14' />
        <path d='m12 5 7 7-7 7' />
      </svg>
    </button>
  </SignInButton>
</SignedOut>


            <SignedIn>
              <div className='flex items-center justify-center rounded-lg p-0.5 border border-border bg-card'>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox:
                        'w-7 h-7 sm:w-8 sm:h-8 hover:scale-105 transition-transform',
                      userButtonBox: 'flex items-center justify-center'
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='rounded-lg border border-border p-2 text-muted-foreground hover:text-foreground hover:bg-muted md:hidden transition cursor-pointer'
            aria-label='Toggle menu'
          >
            {isMobileMenuOpen ? (
              <svg
                className='size-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            ) : (
              <svg
                className='size-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='4' x2='20' y1='12' y2='12' />
                <line x1='4' x2='20' y1='6' y2='6' />
                <line x1='4' x2='20' y1='18' y2='18' />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className='border-b border-border bg-card p-5 md:hidden shadow-xl'>
          <nav className='flex flex-col gap-3 text-sm font-medium text-muted-foreground'>
            <Link
              href='/'
              onClick={closeMobileMenu}
              className='px-2 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition'
            >
              Home
            </Link>
            <Link
              href='/about'
              onClick={closeMobileMenu}
              className='px-2 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition'
            >
              About
            </Link>
            <Link
              href='/contact'
              onClick={closeMobileMenu}
              className='px-2 py-1.5 rounded-md hover:bg-muted hover:text-foreground transition'
            >
              Contact
            </Link>

            {/* Mobile Auth */}
            <div className='pt-3 mt-1 border-t border-border'>
              <SignedOut>
                <SignInButton mode='modal'>
                  <button
                    onClick={closeMobileMenu}
                    className='w-full inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition cursor-pointer'
                  >
                    <span>Sign In</span>
                    <svg
                      className='size-4'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      strokeWidth='2.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    >
                      <path d='M5 12h14' />
                      <path d='m12 5 7 7-7 7' />
                    </svg>
                  </button>
                </SignInButton>
              </SignedOut>

              <SignedIn>
                <div className='flex items-center justify-between px-2 py-1'>
                  <span className='text-xs font-semibold text-muted-foreground'>
                    Your Account
                  </span>
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: 'w-8 h-8'
                      }
                    }}
                  />
                </div>
              </SignedIn>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
