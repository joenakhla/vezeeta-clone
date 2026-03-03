'use client';

import Link from 'next/link';
import { useState } from 'react';
import { labCategories, labTests, getLabTestsByCategory, SALESIQ_DEPARTMENTS } from '@/lib/data';
import SalesIQDepartment from '@/components/SalesIQDepartment';

export default function LabsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTests, setSelectedTests] = useState([]);
  const [showBooking, setShowBooking] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientAge: '',
    patientGender: 'male',
    preferredDate: '',
    preferredTime: '',
    visitType: 'center',
    notes: '',
  });

  const filteredTests = selectedCategory === 'all'
    ? labTests
    : getLabTestsByCategory(selectedCategory);

  function toggleTest(test) {
    if (selectedTests.find((t) => t.id === test.id)) {
      setSelectedTests(selectedTests.filter((t) => t.id !== test.id));
    } else {
      setSelectedTests([...selectedTests, test]);
    }
  }

  const total = selectedTests.reduce((sum, t) => sum + t.price, 0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const bookingData = {
      event: 'lab_booking',
      booking_id: 'LAB-' + Date.now(),
      patient: {
        name: form.patientName,
        email: form.patientEmail,
        phone: form.patientPhone,
        age: form.patientAge,
        gender: form.patientGender,
        notes: form.notes,
      },
      tests: selectedTests.map((t) => ({
        id: t.id,
        name: t.name,
        price: t.price,
        fasting_required: t.fastingRequired,
        turnaround: t.turnaround,
      })),
      appointment: {
        date: form.preferredDate,
        time: form.preferredTime,
        visit_type: form.visitType,
      },
      total: total,
      currency: 'EGP',
      fasting_required: selectedTests.some((t) => t.fastingRequired),
      created_at: new Date().toISOString(),
    };

    try {
      const clientWebhook = localStorage.getItem('zoho_webhook_url') || '';
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-url': clientWebhook,
        },
        body: JSON.stringify(bookingData),
      });
      const result = await res.json();

      sessionStorage.setItem('lastBooking', JSON.stringify(bookingData));
      sessionStorage.setItem('webhookResult', JSON.stringify(result));

      window.location.href = '/booking-success';
    } catch (err) {
      alert('Booking failed: ' + err.message);
      setSubmitting(false);
    }
  }

  // Generate tomorrow as min date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <SalesIQDepartment department={SALESIQ_DEPARTMENTS.DIAGNOSTICS} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Lab Tests</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">🔬</span>
        <div>
          <h1 className="text-3xl font-bold">Lab Tests</h1>
          <p className="text-gray-500">Book blood tests, hormones, checkup packages and more</p>
        </div>
      </div>

      {!showBooking ? (
        <>
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'bg-primary-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}>
              All Tests
            </button>
            {labCategories.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat.id ? 'bg-primary-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Tests Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {filteredTests.map((test) => {
              const isSelected = selectedTests.find((t) => t.id === test.id);
              return (
                <div key={test.id}
                  onClick={() => toggleTest(test)}
                  className={`bg-white rounded-xl p-4 border-2 cursor-pointer transition-all ${isSelected ? 'border-primary-500 bg-primary-50' : 'border-gray-100 hover:border-primary-200'}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{test.name}</h3>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${isSelected ? 'bg-primary-500 border-primary-500' : 'border-gray-300'}`}>
                      {isSelected && <span className="text-white text-xs">✓</span>}
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{test.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex gap-3 text-gray-500">
                      <span>⏱ {test.turnaround}</span>
                      {test.fastingRequired && <span className="text-orange-600">Fasting required</span>}
                    </div>
                    <span className="font-bold text-primary-700">{test.price} EGP</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Sticky bottom bar */}
          {selectedTests.length > 0 && (
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-40">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <span className="font-bold">{selectedTests.length} test{selectedTests.length !== 1 ? 's' : ''} selected</span>
                  <span className="mx-3 text-gray-300">|</span>
                  <span className="font-bold text-primary-700">{total} EGP</span>
                  {selectedTests.some((t) => t.fastingRequired) && (
                    <span className="ml-3 text-xs text-orange-600 bg-orange-50 px-2 py-1 rounded-full">Fasting required</span>
                  )}
                </div>
                <button onClick={() => setShowBooking(true)}
                  className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        /* Booking Form */
        <div className="max-w-2xl mx-auto">
          <button onClick={() => setShowBooking(false)} className="text-primary-600 hover:underline text-sm mb-6 inline-block">
            &larr; Back to test selection
          </button>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-primary-800 mb-2">Selected Tests</h3>
            {selectedTests.map((t) => (
              <div key={t.id} className="flex justify-between text-sm py-1">
                <span>{t.name}{t.fastingRequired ? ' (fasting)' : ''}</span>
                <span className="font-medium">{t.price} EGP</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-2 pt-2 border-t border-primary-200">
              <span>Total</span><span>{total} EGP</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input type="text" name="patientName" required value={form.patientName} onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" name="patientEmail" required value={form.patientEmail} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" name="patientPhone" required value={form.patientPhone} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
                <input type="number" name="patientAge" value={form.patientAge} onChange={handleChange} min="0" max="120"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select name="patientGender" value={form.patientGender} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
                <input type="date" name="preferredDate" required min={minDate} value={form.preferredDate} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
                <select name="preferredTime" value={form.preferredTime} onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none">
                  <option value="">Any time</option>
                  <option value="08:00 AM">08:00 AM</option>
                  <option value="09:00 AM">09:00 AM</option>
                  <option value="10:00 AM">10:00 AM</option>
                  <option value="11:00 AM">11:00 AM</option>
                  <option value="12:00 PM">12:00 PM</option>
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Visit Type</label>
              <div className="grid sm:grid-cols-2 gap-3">
                <button type="button" onClick={() => setForm({ ...form, visitType: 'center' })}
                  className={`border-2 rounded-xl p-3 text-left transition-all ${form.visitType === 'center' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                  <span className="text-xl">🏥</span>
                  <p className="font-semibold text-sm mt-1">Visit Lab Center</p>
                  <p className="text-gray-400 text-xs">Go to the nearest lab branch</p>
                </button>
                <button type="button" onClick={() => setForm({ ...form, visitType: 'home' })}
                  className={`border-2 rounded-xl p-3 text-left transition-all ${form.visitType === 'home' ? 'border-primary-500 bg-primary-50' : 'border-gray-200 hover:border-primary-300'}`}>
                  <span className="text-xl">🏠</span>
                  <p className="font-semibold text-sm mt-1">Home Sample Collection</p>
                  <p className="text-gray-400 text-xs">Phlebotomist comes to you</p>
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes (optional)</label>
              <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Any medical conditions or special needs..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-4">
              {submitting ? 'Booking...' : `Confirm Lab Booking - ${total} EGP`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
