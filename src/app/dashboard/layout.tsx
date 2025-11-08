import React from 'react'

export const metadata = {
  title: 'Dashboard - ATPNE',
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-6 flex items-center justify-between">
          <div className="hidden md:block opacity-40">
            {/* subtle leaf background (kept for decoration only) */}
            <svg width="120" height="80" viewBox="0 0 120 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="bgLeaf" x1="0" x2="1">
                  <stop offset="0%" stopColor="#bbf7d0" />
                  <stop offset="100%" stopColor="#86efac" />
                </linearGradient>
              </defs>
              <path d="M30 60 C10 50 10 30 30 20 C50 10 80 10 100 20 C120 30 110 50 90 60 C70 70 40 70 30 60Z" fill="url(#bgLeaf)" opacity="0.65" />
            </svg>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  )
}
