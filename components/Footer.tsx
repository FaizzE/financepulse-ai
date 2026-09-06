'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Footer () {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail('')
    }
  }

  return (
    <footer className='w-full border-t border-slate-200 bg-white px-6 pt-12 text-sm text-slate-500 md:px-16 lg:px-24 xl:px-32'>
      <div className='mx-auto grid max-w-6xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3'>
        {/* Column 1: Brand & Description */}
        <div className='sm:col-span-2 lg:col-span-1'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 font-semibold tracking-tight'
          >
            <span className='grid size-8 place-items-center rounded-xl bg-emerald-600 text-white shadow-sm shadow-emerald-600/20'>
              <svg
                className='size-4'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2.5'
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
            <span className='text-xl font-bold tracking-tight text-slate-900'>
              FinancePulse <span className='text-emerald-600'>AI</span>
            </span>
          </Link>
          <p className='mt-5 max-w-sm text-sm/7 text-slate-600'>
            Intelligent financial clarity without bank syncing. Turn natural
            language memos into structured ledgers, audit logs, and actionable
            spending insights.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className='flex flex-col lg:items-center lg:justify-center'>
          <div className='flex flex-col space-y-2.5 text-sm'>
            <h2 className='mb-4 font-semibold text-slate-900'>Company</h2>
            <Link href='/about' className='transition hover:text-slate-900'>
              About us
            </Link>
            <Link href='/#product' className='transition hover:text-slate-900'>
              Product Overview
            </Link>
            <Link href='/contact' className='transition hover:text-slate-900'>
              Contact us
            </Link>
            <Link
              href='/#security'
              className='inline-flex items-center gap-2 transition hover:text-slate-900'
            >
              <span>Security</span>
              <span className='rounded-md bg-emerald-100 px-2 py-0.5 text-xs font-medium text-emerald-800'>
                Zero Sync
              </span>
            </Link>
            <Link href='/#faq' className='transition hover:text-slate-900'>
              FAQ
            </Link>
          </div>
        </div>

        {/* Column 3: Newsletter Box */}
        <div>
          <h2 className='mb-4 font-semibold text-slate-900'>
            Subscribe to updates
          </h2>
          <div className='max-w-sm space-y-4 text-sm'>
            <p className='text-slate-600'>
              The latest platform features, financial breakdowns, and security
              announcements sent to your inbox.
            </p>
            {subscribed ? (
              <div className='rounded-lg border border-emerald-200 bg-emerald-50 p-3 text-xs font-medium text-emerald-800'>
                ✓ Thank you for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className='flex items-center gap-2 rounded-lg bg-emerald-50/80 p-1.5 border border-emerald-100'
              >
                <input
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  required
                  className='w-full rounded bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-1 ring-slate-200 focus:ring-2 focus:ring-emerald-600 placeholder:text-slate-400'
                />
                <button
                  type='submit'
                  className='rounded bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 cursor-pointer shrink-0'
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-10 border-t border-slate-200 py-5 text-center text-xs text-slate-500'>
        <p>
          Copyright {new Date().getFullYear()} ©{' '}
          <span className='font-semibold text-slate-700'>FinancePulse AI</span>.
          All Rights Reserved. · Engineered by Faizul I.
        </p>
      </div>
    </footer>
  )
}
