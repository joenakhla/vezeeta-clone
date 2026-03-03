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
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="text-gray-600 hover:text-primary-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              Home
            </Link>
            <Link href="/pharmacy" className="text-gray-600 hover:text-green-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              Pharmacy
            </Link>
            <Link href="/labs" className="text-gray-600 hover:text-blue-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              Lab Tests
            </Link>
            <Link href="/scans" className="text-gray-600 hover:text-purple-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              Scans
            </Link>
            <div className="w-px h-6 bg-gray-200 mx-2" />
            <Link href="/dashboard" className="text-gray-600 hover:text-primary-600 font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm">
              Dashboard
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
          <nav className="md:hidden pb-4 border-t border-gray-100 pt-2 flex flex-col gap-1">
            <Link href="/" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/pharmacy" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm" onClick={() => setMenuOpen(false)}>
              Pharmacy
            </Link>
            <Link href="/labs" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm" onClick={() => setMenuOpen(false)}>
              Lab Tests
            </Link>
            <Link href="/scans" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm" onClick={() => setMenuOpen(false)}>
              Scans
            </Link>
            <div className="border-t border-gray-100 my-1" />
            <Link href="/dashboard" className="px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-600 text-sm" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
