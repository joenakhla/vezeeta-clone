'use client';

import Link from 'next/link';
import { useState } from 'react';
import { specialties, doctors, searchDoctors } from '@/lib/data';
import DoctorCard from '@/components/DoctorCard';

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

  // Top 4 doctors by rating for "Featured" section
  const featuredDoctors = [...doctors]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find & Book the Best Doctors
          </h1>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Search by specialty, doctor name, or location. Book your appointment instantly.
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
              onClick={() => {
                setSearchResults(null);
                setSearchQuery('');
              }}
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

      {/* Specialties Grid */}
      {searchResults === null && (
        <>
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <h2 className="text-2xl font-bold mb-2">Browse by Specialty</h2>
            <p className="text-gray-500 mb-8">
              Choose a specialty to find the right doctor for you
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {specialties.map((spec) => (
                <Link key={spec.id} href={`/doctors/${spec.id}`}>
                  <div className="specialty-card">
                    <div className="text-4xl mb-3">{spec.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {spec.name}
                    </h3>
                    <p className="text-gray-400 text-xs mt-1">{spec.nameAr}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Featured Doctors */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
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
              <h2 className="text-2xl font-bold text-center mb-10">
                How It Works
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">1</span>
                  </div>
                  <h3 className="font-bold mb-2">Search</h3>
                  <p className="text-gray-500 text-sm">
                    Find doctors by specialty, name, or location
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">2</span>
                  </div>
                  <h3 className="font-bold mb-2">Book</h3>
                  <p className="text-gray-500 text-sm">
                    Choose a time slot and fill in your details
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">3</span>
                  </div>
                  <h3 className="font-bold mb-2">Visit</h3>
                  <p className="text-gray-500 text-sm">
                    Visit the doctor at the scheduled time
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Zoho Flow Integration Banner */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-3">
                Zoho Flow Integration Ready
              </h2>
              <p className="text-blue-100 mb-6 max-w-xl mx-auto">
                This test site sends booking data to your Zoho Flow webhook.
                Configure your webhook URL in settings to start testing.
              </p>
              <Link
                href="/settings"
                className="inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Configure Webhook
              </Link>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
