'use client'

import { useState } from 'react'
import { SignInButton } from '@clerk/nextjs'

const presets = [
  "Dinner with team at Nando's $48.50",
  'Shell gas station petrol refill $62.00',
  'Home internet and Wi-Fi bill $115.00'
]

const faqs = [
  [
    'Does FinancePulse AI connect to my bank?',
    "No. FinancePulse AI operates on a privacy-first, zero-credential model. You don't link real bank logins or share credentials. You simply type or paste transaction memos directly."
  ],
  [
    'How does automated categorization work?',
    'When you log an expense, the server processes the description with Google Gemini using strict schemas. It extracts the numerical amount and classifies it into standard categories like Food, Transport, Bills, or Shopping.'
  ],
  [
    'Where is my expense data stored?',
    'All records are persisted to an isolated, serverless PostgreSQL database hosted on Neon. Every database read and write is authenticated and scoped by your unique Clerk user ID via Prisma ORM.'
  ],
  [
    'What kind of analytics and insights will I receive?',
    'The dashboard calculates your rolling average daily spend, visualizes historical distributions through dynamic charts, and surfaces AI-backed observations when spending trends deviate from normal baselines.'
  ]
]

function DashboardMockup () {
  return (
    <div className='overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-emerald-500/5'>
      {/* Browser Bar */}
      <div className='flex items-center justify-between border-b border-slate-200 dark:border-slate-800 px-4 py-3'>
        <div className='flex items-center gap-2'>
          <span className='size-2 rounded-full bg-rose-400' />
          <span className='size-2 rounded-full bg-amber-400' />
          <span className='size-2 rounded-full bg-emerald-400' />
          <span className='ml-3 font-mono text-xs text-slate-500 dark:text-slate-400'>
            app.financepulse.ai / overview
          </span>
        </div>
        <span className='rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400'>
          LIVE DEMO
        </span>
      </div>

      <div className='p-5 sm:p-7'>
        <div className='flex items-start justify-between'>
          <div>
            <p className='text-xs text-slate-500 dark:text-slate-400'>
              Monday, September 6, 2026
            </p>
            <h3 className='mt-1 text-lg font-semibold text-slate-900 dark:text-white'>
              Welcome Back, Faizul
            </h3>
          </div>
          <span className='hidden rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 sm:block'>
            September 2026
          </span>
        </div>

        {/* Metric Summary Cards */}
        <div className='mt-6 grid gap-3 sm:grid-cols-3'>
          <div className='rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4'>
            <p className='text-[11px] text-slate-500 dark:text-slate-400'>
              Total spent (MTD)
            </p>
            <p className='mt-2 text-xl font-semibold text-slate-900 dark:text-white'>
              $1,840.50
            </p>
            <p className='mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400'>
              ↓ 8.2% vs last month
            </p>
          </div>
          <div className='rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4'>
            <p className='text-[11px] text-slate-500 dark:text-slate-400'>
              Daily average spend
            </p>
            <p className='mt-2 text-xl font-semibold text-slate-900 dark:text-white'>
              $80.00
            </p>
            <p className='mt-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400'>
              Based on active days
            </p>
          </div>
          <div className='rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 p-4'>
            <p className='text-[11px] text-slate-500 dark:text-slate-400'>
              Top category
            </p>
            <p className='mt-2 text-xl font-semibold text-slate-900 dark:text-white'>
              Food &amp; Dining
            </p>
            <p className='mt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400'>
              38% of total outflow
            </p>
          </div>
        </div>

        {/* Chart and Insights Split */}
        <div className='mt-5 grid gap-4 lg:grid-cols-[1.35fr_1fr]'>
         {
  /* Revenue / Expense Performance Chart Card */
}
<div className='rounded-xl border border-slate-200 dark:border-slate-800 p-4 bg-slate-50/50 dark:bg-slate-950/40'>
  <div className='flex items-center justify-between'>
    <div>
      <p className='text-sm font-semibold text-slate-900 dark:text-white'>
        Revenue performance
      </p>
      <p className='text-[11px] text-slate-500 dark:text-slate-400'>
        Jan — Jun 2024
      </p>
    </div>
    <span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400'>
      +18.6%
    </span>
  </div>

  <div className='mt-4 w-full overflow-hidden'>
    <svg
      className='h-36 w-full text-emerald-500'
      viewBox='0 0 520 150'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M0 125 C35 118 55 100 90 107 S145 103 175 86 S225 93 260 68 S315 70 350 54 S415 57 455 34 S495 43 520 18'
        stroke='currentColor'
        strokeWidth='3.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  </div>
</div>


          {/* AI Insights Card */}
          <div className='rounded-xl border border-slate-200 dark:border-slate-800 p-4'>
            <p className='text-sm font-semibold text-slate-900 dark:text-white'>
              AI insights
            </p>
            <div className='mt-4 space-y-3'>
              <div className='rounded-lg bg-emerald-500/10 p-3 text-[11px] leading-5 text-emerald-900 dark:text-emerald-200'>
                Your transportation spending decreased by 12% following
                optimized transit routes.
              </div>
              <div className='rounded-lg bg-slate-100 dark:bg-slate-800 p-3 text-[11px] leading-5 text-slate-700 dark:text-slate-300'>
                Dining out accounts for 62% of food expenditure this week.
              </div>
              <div className='pt-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400'>
                Personalized budget tips active →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Guest () {
  const [prompt, setPrompt] = useState(presets[0])
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className='w-full bg-slate-50/50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 font-sans transition-colors duration-300'>
      {/* ─── HERO SECTION ─── */}
      <section className='relative border-b border-slate-200 dark:border-slate-800'>
        {/* Clean Radial Glow */}
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.14),transparent_48%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_48%)]' />

        <div className='relative mx-auto grid max-w-6xl gap-12 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pb-28 lg:pt-24'>
          <div>
            <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-600/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400'>
              <span className='size-1.5 rounded-full bg-emerald-500 animate-pulse' />
              Financial clarity, automated
            </div>

            <h1 className='max-w-3xl text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl'>
              Your expenses,{' '}
              <span className='text-emerald-600 dark:text-emerald-400'>
                finally clear.
              </span>
            </h1>

            <p className='mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg'>
              FinancePulse AI turns messy financial memos into structured
              categorization, actionable insights, and balanced ledgers — in
              seconds.
            </p>

            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <SignInButton mode='modal'>
                <button className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/20 cursor-pointer'>
                  Start tracking free →
                </button>
              </SignInButton>
              <a
                href='#how-it-works'
                className='inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-700 dark:text-slate-300 transition hover:-translate-y-0.5 hover:bg-slate-50 dark:hover:bg-slate-800'
              >
                See how it works
              </a>
            </div>

            <p className='mt-4 text-xs text-slate-500 dark:text-slate-400'>
              No bank credentials required · 100% free workspace
            </p>
          </div>

          {/* Interactive Input Mockup */}
          <div className='rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 p-4 sm:p-6 shadow-xl shadow-emerald-500/5 backdrop-blur-sm'>
            <div className='mb-3 flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400'>
              <span className='size-2 rounded-full bg-emerald-500' />
              Log an Expense
            </div>

            <div className='rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 p-4'>
              <textarea
                value={prompt}
                onChange={e => setPrompt(e.target.value)}
                rows={2}
                className='w-full resize-none bg-transparent text-sm leading-6 outline-none text-slate-900 dark:text-slate-100 placeholder:text-slate-400 font-sans'
                placeholder='Type an expense description...'
              />

              <div className='mt-4 flex flex-wrap gap-2'>
                {presets.map(preset => (
                  <button
                    key={preset}
                    onClick={() => setPrompt(preset)}
                    className={`rounded-full border px-3 py-1 text-xs transition cursor-pointer ${
                      prompt === preset
                        ? 'border-emerald-500/40 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium'
                        : 'border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-700'
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>

              <div className='mt-4 flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-3'>
                <span className='text-[11px] text-slate-500 dark:text-slate-400'>
                  Instant Gemini Schema Parse
                </span>
                <SignInButton mode='modal'>
                  <button className='grid size-9 place-items-center rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition hover:scale-105 cursor-pointer'>
                    →
                  </button>
                </SignInButton>
              </div>
            </div>

            <div className='mt-4 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400'>
              <span className='text-emerald-600 dark:text-emerald-400 font-bold'>
                ✓
              </span>
              Zero bank syncing required. Your records stay encrypted in
              PostgreSQL.
            </div>
          </div>
        </div>
      </section>

      {/* ─── METRIC TICKER STRIP ─── */}
      <section className='border-b border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-900/30'>
        <div className='mx-auto grid max-w-6xl grid-cols-2 gap-5 px-5 py-10 sm:grid-cols-4 lg:px-8'>
          <div>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl'>
              &lt; 100ms
            </p>
            <p className='mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400'>
              AI categorization latency
            </p>
          </div>
          <div>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl'>
              7 Core
            </p>
            <p className='mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400'>
              Standardized taxonomy buckets
            </p>
          </div>
          <div>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl'>
              100%
            </p>
            <p className='mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400'>
              Isolated database storage
            </p>
          </div>
          <div>
            <p className='text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl'>
              0 Logins
            </p>
            <p className='mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400'>
              No bank credential exposure
            </p>
          </div>
        </div>
      </section>

      {/* ─── DASHBOARD SHOWCASE ─── */}
      <section
        id='product'
        className='mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28'
      >
        <div className='mx-auto max-w-2xl text-center'>
          <p className='text-sm font-semibold text-emerald-600 dark:text-emerald-400'>
            One view. Every expense.
          </p>
          <h2 className='mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl'>
            A financial command center for modern builders.
          </h2>
          <p className='mt-5 text-pretty leading-7 text-slate-600 dark:text-slate-400'>
            Stop stitching together manual spreadsheets and forgotten receipts.
            FinancePulse brings your spending history into sharp focus.
          </p>
        </div>

        <div className='mt-12'>
          <DashboardMockup />
        </div>
      </section>

      {/* ─── HOW IT WORKS (4 STEPS) ─── */}
      <section
        id='how-it-works'
        className='border-y border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-900/30'
      >
        <div className='mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28'>
          <div className='max-w-xl'>
            <p className='text-sm font-semibold text-emerald-600 dark:text-emerald-400'>
              How it works
            </p>
            <h2 className='mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl'>
              From raw note to clean ledger insight.
            </h2>
          </div>

          <div className='mt-12 grid gap-5 md:grid-cols-4'>
            {[
              [
                '01',
                'Log',
                'Type or paste transaction memos without touching dropdowns.'
              ],
              [
                '02',
                'Extract',
                'Gemini isolates numbers, merchants, and dates via JSON schemas.'
              ],
              [
                '03',
                'Classify',
                'Transactions map directly to preset categories with offline fallbacks.'
              ],
              [
                '04',
                'Audit',
                'Next.js Server Actions write records to your isolated Neon database.'
              ]
            ].map(([num, title, copy]) => (
              <div
                key={num}
                className='relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm'
              >
                <div className='flex items-center justify-between'>
                  <span className='grid size-9 place-items-center rounded-xl bg-emerald-500/10 text-xs font-bold text-emerald-600 dark:text-emerald-400'>
                    {num}
                  </span>
                  <span className='font-mono text-xs text-slate-400'>
                    Phase
                  </span>
                </div>
                <h3 className='mt-6 font-bold text-slate-900 dark:text-white'>
                  {title}
                </h3>
                <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400'>
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SECURITY & COMPARISON ─── */}
      <section
        id='security'
        className='mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28'
      >
        <div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start'>
          <div>
            <p className='text-sm font-semibold text-emerald-600 dark:text-emerald-400'>
              Built for privacy
            </p>
            <h2 className='mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl'>
              The manual spreadsheet isn&apos;t working anymore.
            </h2>
            <p className='mt-5 leading-7 text-slate-600 dark:text-slate-400'>
              Eliminate formula errors and painful cell inputs while keeping
              your financial records isolated and encrypted.
            </p>
            <div className='mt-7 flex items-center gap-2.5 text-sm font-semibold text-slate-900 dark:text-white'>
              <span className='text-emerald-600 dark:text-emerald-400 font-bold'>
                ✓
              </span>
              Encrypted at rest in PostgreSQL &amp; isolated per user
            </div>
          </div>

          <div className='overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm'>
            <div className='grid grid-cols-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 px-5 py-4 text-xs font-semibold text-slate-700 dark:text-slate-300'>
              <span>Capability</span>
              <span className='text-emerald-600 dark:text-emerald-400'>
                FinancePulse AI
              </span>
              <span className='text-slate-400'>Manual Sheets</span>
            </div>

            {[
              ['Instant natural language logging', true, false],
              ['Automated category assignment', true, false],
              ['Real-time dynamic spending charts', true, false],
              ['Zero bank passwords required', true, false],
              ['Zero formulas or cell maintenance', true, false]
            ].map(([label, yes, no]) => (
              <div
                key={String(label)}
                className='grid grid-cols-3 items-center border-b border-slate-200 dark:border-slate-800 px-5 py-4 text-sm last:border-0'
              >
                <span className='text-slate-800 dark:text-slate-200 text-xs sm:text-sm font-medium'>
                  {String(label)}
                </span>
                <span className='text-emerald-600 dark:text-emerald-400 font-bold'>
                  ✓
                </span>
                <span className='text-slate-400 text-xs'>✕</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section
        id='faq'
        className='border-y border-slate-200 dark:border-slate-800 bg-slate-100/40 dark:bg-slate-900/30'
      >
        <div className='mx-auto max-w-3xl px-5 py-20 lg:py-28'>
          <div className='text-center'>
            <p className='text-sm font-semibold text-emerald-600 dark:text-emerald-400'>
              FAQ
            </p>
            <h2 className='mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl'>
              Questions, answered.
            </h2>
          </div>

          <div className='mt-10 divide-y divide-slate-200 dark:divide-slate-800 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm'>
            {faqs.map(([question, answer], index) => (
              <div key={question} className='px-5'>
                <button
                  type='button'
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                  className='flex w-full items-center justify-between gap-4 py-5 text-left text-sm font-semibold text-slate-900 dark:text-white cursor-pointer'
                >
                  <span>{question}</span>
                  <span
                    className={`text-slate-400 transition-transform duration-200 ${
                      openFaq === index
                        ? 'rotate-180 text-emerald-600 dark:text-emerald-400'
                        : ''
                    }`}
                  >
                    ↓
                  </span>
                </button>
                {openFaq === index && (
                  <p className='max-w-2xl pb-5 text-sm leading-6 text-slate-600 dark:text-slate-400'>
                    {answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className='relative overflow-hidden py-24 text-center lg:py-32'>
        <div className='pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.12),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_100%,rgba(16,185,129,0.1),transparent_50%)]' />
        <div className='relative mx-auto flex max-w-3xl flex-col items-center px-5'>
          <h2 className='text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl'>
            Make your next financial decision with confidence.
          </h2>
          <p className='mt-5 max-w-xl text-pretty text-slate-600 dark:text-slate-400 leading-7'>
            Your clearest personal financial view is one prompt away.
          </p>
          <div className='mt-8'>
            <SignInButton mode='modal'>
              <button className='inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/20 cursor-pointer'>
                Start tracking free →
              </button>
            </SignInButton>
          </div>
        </div>
      </section>
    </div>
  )
}
