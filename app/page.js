'use client';

import Link from 'next/link';
import { useState } from 'react';
import { specialties, doctors, searchDoctors, SALESIQ_DEPARTMENTS } from '@/lib/data';
import DoctorCard from '@/components/DoctorCard';
import SalesIQDepartment from '@/components/SalesIQDepartment';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState(null);

  function handleSearch(e) {
    e.preventDefault();
    if (searchQuery.trim()) {
      setSearchResults(searchDoctors(searchQuery));
    } else {
      setSearchResults(null);
    }
  }

  const featuredDoctors = [...doctors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div>
      <SalesIQDepartment department={SALESIQ_DEPARTMENTS.DOCTORS} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Health, One Click Away
          </h1>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Book doctors, order medicines, schedule lab tests & scans — all in one place.
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex bg-white rounded-xl overflow-hidden shadow-lg">
              <input
                type="text"
                placeholder="Search doctors, specialties, or locations..."
                className="flex-1 px-6 py-4 text-gray-800 text-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (!e.target.value.trim()) setSearchResults(null);
                }}
              />
              <button
                type="submit"
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 font-semibold transition-colors"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Search Results */}
      {searchResults !== null && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">
              Search Results ({searchResults.length})
            </h2>
            <button
              onClick={() => { setSearchResults(null); setSearchQuery(''); }}
              className="text-primary-600 hover:underline text-sm"
            >
              Clear search
            </button>
          </div>
          {searchResults.length > 0 ? (
            <div className="grid gap-4">
              {searchResults.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-12">
              No doctors found matching &quot;{searchQuery}&quot;. Try a different search term.
            </p>
          )}
        </section>
      )}

      {searchResults === null && (
        <>
          {/* ===== SERVICES QUICK ACCESS ===== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/doctors/general-practice">
                <div className="bg-white rounded-xl p-6 text-center card-hover border border-gray-100 hover:border-primary-300">
                  <div className="text-4xl mb-3">🩺</div>
                  <h3 className="font-bold text-gray-900">Book a Doctor</h3>
                  <p className="text-gray-400 text-xs mt-1">All specialties</p>
                </div>
              </Link>
              <Link href="/pharmacy">
                <div className="bg-white rounded-xl p-6 text-center card-hover border border-gray-100 hover:border-green-300">
                  <div className="text-4xl mb-3">💊</div>
                  <h3 className="font-bold text-gray-900">Pharmacy</h3>
                  <p className="text-gray-400 text-xs mt-1">Order medicines</p>
                </div>
              </Link>
              <Link href="/labs">
                <div className="bg-white rounded-xl p-6 text-center card-hover border border-gray-100 hover:border-blue-300">
                  <div className="text-4xl mb-3">🔬</div>
                  <h3 className="font-bold text-gray-900">Lab Tests</h3>
                  <p className="text-gray-400 text-xs mt-1">Blood work & more</p>
                </div>
              </Link>
              <Link href="/scans">
                <div className="bg-white rounded-xl p-6 text-center card-hover border border-gray-100 hover:border-purple-300">
                  <div className="text-4xl mb-3">📡</div>
                  <h3 className="font-bold text-gray-900">Scans & Radiology</h3>
                  <p className="text-gray-400 text-xs mt-1">X-ray, MRI, CT & more</p>
                </div>
              </Link>
            </div>
          </section>

          {/* ===== DOCTOR SPECIALTIES ===== */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
            <h2 className="text-2xl font-bold mb-2">Browse by Specialty</h2>
            <p className="text-gray-500 mb-8">
              Choose a specialty to find the right doctor for you
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {specialties.map((spec) => (
                <Link key={spec.id} href={`/doctors/${spec.id}`}>
                  <div className="specialty-card">
                    <div className="text-4xl mb-3">{spec.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">{spec.name}</h3>
                    <p className="text-gray-400 text-xs mt-1">{spec.nameAr}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ===== PHARMACY / LABS / SCANS HIGHLIGHTS ===== */}
          <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold mb-8 text-center">More Healthcare Services</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Pharmacy */}
                <Link href="/pharmacy">
                  <div className="border border-gray-100 rounded-2xl p-6 card-hover hover:border-green-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">💊</div>
                      <h3 className="font-bold text-lg group-hover:text-green-600">Online Pharmacy</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">
                      Order prescription & OTC medicines with home delivery. 20+ product categories available.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>✓ Pain relief, antibiotics, vitamins</li>
                      <li>✓ Skincare & personal care</li>
                      <li>✓ Diabetes & heart care medicines</li>
                      <li>✓ Fast home delivery</li>
                    </ul>
                  </div>
                </Link>

                {/* Labs */}
                <Link href="/labs">
                  <div className="border border-gray-100 rounded-2xl p-6 card-hover hover:border-blue-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">🔬</div>
                      <h3 className="font-bold text-lg group-hover:text-blue-600">Lab Tests</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">
                      Book blood tests, hormone panels, checkup packages with home sample collection.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>✓ CBC, thyroid, vitamin D, HbA1c</li>
                      <li>✓ Liver & kidney function</li>
                      <li>✓ Allergy panels</li>
                      <li>✓ Comprehensive checkup packages</li>
                    </ul>
                  </div>
                </Link>

                {/* Scans */}
                <Link href="/scans">
                  <div className="border border-gray-100 rounded-2xl p-6 card-hover hover:border-purple-300 group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">📡</div>
                      <h3 className="font-bold text-lg group-hover:text-purple-600">Scans & Radiology</h3>
                    </div>
                    <p className="text-gray-500 text-sm mb-4">
                      Book X-rays, ultrasounds, CT scans, MRI and echocardiograms at top centers.
                    </p>
                    <ul className="text-xs text-gray-400 space-y-1">
                      <li>✓ X-Ray, ultrasound, CT scan</li>
                      <li>✓ MRI brain, spine, knee</li>
                      <li>✓ Mammography</li>
                      <li>✓ Echocardiogram</li>
                    </ul>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Featured Doctors */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-2xl font-bold mb-2">Top Rated Doctors</h2>
            <p className="text-gray-500 mb-8">
              Highest rated doctors across all specialties
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              {featuredDoctors.map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="bg-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <h2 className="text-2xl font-bold text-center mb-10">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Search</h3>
                  <p className="text-gray-500 text-sm">Find doctors, labs, scans or medicines</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Book</h3>
                  <p className="text-gray-500 text-sm">Pick a time and fill in your details</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Done</h3>
                  <p className="text-gray-500 text-sm">Get confirmation and visit at the scheduled time</p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
