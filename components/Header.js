'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">Vezeeta</span>
            <span className="text-xs bg-yellow-400 text-yellow-900 px-2 py-0.5 rounded-full font-medium">
              TEST
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-gray-600 hover:text-primary-600 font-medium">
              Home
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-primary-600 font-medium">
              Doctor Dashboard
            </Link>
            <Link href="/settings" className="text-gray-600 hover:text-primary-600 font-medium">
              Webhook Settings
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-2 flex flex-col gap-2">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/dashboard" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600" onClick={() => setMenuOpen(false)}>
              Doctor Dashboard
            </Link>
            <Link href="/settings" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600" onClick={() => setMenuOpen(false)}>
              Webhook Settings
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
