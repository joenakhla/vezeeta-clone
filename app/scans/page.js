'use client';

import Link from 'next/link';
import { useState } from 'react';
import { scanCategories, scanTypes, getScansByCategory, SALESIQ_DEPARTMENTS } from '@/lib/data';
import SalesIQDepartment from '@/components/SalesIQDepartment';

export default function ScansPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedScan, setSelectedScan] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientAge: '',
    patientGender: 'male',
    preferredDate: '',
    preferredTime: '',
    referringDoctor: '',
    bodyPart: '',
    notes: '',
  });

  const filteredScans = selectedCategory === 'all'
    ? scanTypes
    : getScansByCategory(selectedCategory);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const bookingData = {
      event: 'scan_booking',
      booking_id: 'SCN-' + Date.now(),
      patient: {
        name: form.patientName,
        email: form.patientEmail,
        phone: form.patientPhone,
        age: form.patientAge,
        gender: form.patientGender,
        notes: form.notes,
      },
      scan: {
        id: selectedScan.id,
        name: selectedScan.name,
        category: selectedScan.category,
        price: selectedScan.price,
        preparation: selectedScan.preparation,
      },
      appointment: {
        date: form.preferredDate,
        time: form.preferredTime,
        referring_doctor: form.referringDoctor,
        body_part_details: form.bodyPart,
      },
      total: selectedScan.price,
      currency: 'EGP',
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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <SalesIQDepartment department={SALESIQ_DEPARTMENTS.DIAGNOSTICS} />

      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Scans & Radiology</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">📡</span>
        <div>
          <h1 className="text-3xl font-bold">Scans & Radiology</h1>
          <p className="text-gray-500">Book X-rays, ultrasounds, CT scans, MRI and more</p>
        </div>
      </div>

      {!selectedScan ? (
        <>
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <button onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === 'all' ? 'bg-primary-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}>
              All Scans
            </button>
            {scanCategories.map((cat) => (
              <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedCategory === cat.id ? 'bg-primary-500 text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'}`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>

          {/* Scans Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredScans.map((scan) => (
              <div key={scan.id}
                onClick={() => setSelectedScan(scan)}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-primary-300 cursor-pointer card-hover">
                <h3 className="font-semibold mb-1">{scan.name}</h3>
                <p className="text-gray-400 text-xs mb-2">{scan.description}</p>
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span>⏱ Results: {scan.turnaround}</span>
                </div>
                <div className="bg-yellow-50 border border-yellow-100 rounded-lg p-2 mb-3">
                  <p className="text-xs text-yellow-800"><strong>Preparation:</strong> {scan.preparation}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary-700 text-lg">{scan.price} EGP</span>
                  <span className="text-primary-500 text-sm font-medium">Book &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        /* Booking Form */
        <div className="max-w-2xl mx-auto">
          <button onClick={() => setSelectedScan(null)} className="text-primary-600 hover:underline text-sm mb-6 inline-block">
            &larr; Back to scan selection
          </button>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-6">
            <h3 className="font-semibold text-primary-800 text-lg">{selectedScan.name}</h3>
            <p className="text-sm text-gray-600 mt-1">{selectedScan.description}</p>
            <div className="mt-3 bg-yellow-50 border border-yellow-200 rounded-lg p-2">
              <p className="text-xs text-yellow-800"><strong>Preparation:</strong> {selectedScan.preparation}</p>
            </div>
            <p className="mt-3 font-bold text-primary-700 text-lg">{selectedScan.price} EGP</p>
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
                  <option value="02:00 PM">02:00 PM</option>
                  <option value="03:00 PM">03:00 PM</option>
                  <option value="04:00 PM">04:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Referring Doctor (optional)</label>
              <input type="text" name="referringDoctor" value={form.referringDoctor} onChange={handleChange} placeholder="Doctor who requested this scan"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Body Part Details (optional)</label>
              <input type="text" name="bodyPart" value={form.bodyPart} onChange={handleChange} placeholder="e.g. Left knee, Lower back, Right shoulder"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes (optional)</label>
              <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Any medical conditions or allergies..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-4">
              {submitting ? 'Booking...' : `Confirm Scan Booking - ${selectedScan.price} EGP`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
