'use client';

import Link from 'next/link';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { getDoctorById, bookingTypes } from '@/lib/data';

export default function BookAppointment() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const doctor = getDoctorById(params.doctorId);

  const date = searchParams.get('date');
  const time = searchParams.get('time');

  const [bookingType, setBookingType] = useState('clinic');
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    patientAge: '',
    patientGender: 'male',
    notes: '',
  });

  if (!doctor || !date || !time) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Invalid Booking</h1>
        <p className="text-gray-500 mb-4">Missing doctor, date, or time information.</p>
        <Link href="/" className="text-primary-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const displayDate = new Date(date + 'T00:00:00').toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const bookingData = {
      event: 'new_booking',
      booking_id: 'BK-' + Date.now(),
      patient: {
        name: form.patientName,
        email: form.patientEmail,
        phone: form.patientPhone,
        age: form.patientAge,
        gender: form.patientGender,
        notes: form.notes,
      },
      doctor: {
        id: doctor.id,
        name: doctor.name,
        specialty: doctor.specialty,
        location: doctor.location,
      },
      appointment: {
        date: date,
        time: time,
        type: bookingType,
        price: doctor.price,
        currency: doctor.currency,
      },
      created_at: new Date().toISOString(),
    };

    try {
      // Include client-side webhook URL as fallback
      const clientWebhook = typeof window !== 'undefined'
        ? localStorage.getItem('zoho_webhook_url') || ''
        : '';

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-url': clientWebhook,
        },
        body: JSON.stringify(bookingData),
      });

      const result = await res.json();

      // Store booking data for success page
      sessionStorage.setItem('lastBooking', JSON.stringify(bookingData));
      sessionStorage.setItem('webhookResult', JSON.stringify(result));

      router.push('/booking-success');
    } catch (err) {
      alert('Booking failed. Please try again. Error: ' + err.message);
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/doctor/${doctor.id}`} className="hover:text-primary-600">
          {doctor.name}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Book Appointment</span>
      </nav>

      <h1 className="text-2xl font-bold mb-6">Complete Your Booking</h1>

      {/* Appointment Summary */}
      <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-primary-800 mb-3">Appointment Summary</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-sm">
          <div>
            <span className="text-gray-500">Doctor:</span>{' '}
            <span className="font-medium">{doctor.name}</span>
          </div>
          <div>
            <span className="text-gray-500">Specialty:</span>{' '}
            <span className="font-medium">{doctor.specialty}</span>
          </div>
          <div>
            <span className="text-gray-500">Date:</span>{' '}
            <span className="font-medium">{displayDate}</span>
          </div>
          <div>
            <span className="text-gray-500">Time:</span>{' '}
            <span className="font-medium">{time}</span>
          </div>
          <div>
            <span className="text-gray-500">Location:</span>{' '}
            <span className="font-medium">{doctor.address}</span>
          </div>
          <div>
            <span className="text-gray-500">Fee:</span>{' '}
            <span className="font-bold text-primary-700">{doctor.price} {doctor.currency}</span>
          </div>
        </div>
      </div>

      {/* Booking Type */}
      <div className="mb-8">
        <h2 className="font-semibold mb-3">Visit Type</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {bookingTypes.map((bt) => (
            <button
              key={bt.id}
              type="button"
              onClick={() => setBookingType(bt.id)}
              className={`booking-type-card text-left ${bookingType === bt.id ? 'selected' : ''}`}
            >
              <span className="text-2xl">{bt.icon}</span>
              <p className="font-semibold text-sm mt-2">{bt.name}</p>
              <p className="text-gray-400 text-xs">{bt.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Patient Form */}
      <form onSubmit={handleSubmit}>
        <h2 className="font-semibold mb-4">Patient Information</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="patientName"
              required
              value={form.patientName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                name="patientEmail"
                required
                value={form.patientEmail}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                name="patientPhone"
                required
                value={form.patientPhone}
                onChange={handleChange}
                placeholder="+20 1xx xxx xxxx"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Age
              </label>
              <input
                type="number"
                name="patientAge"
                value={form.patientAge}
                onChange={handleChange}
                placeholder="Age"
                min="0"
                max="120"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <select
                name="patientGender"
                value={form.patientGender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes for the Doctor (optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              placeholder="Describe your symptoms or reason for visit..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none"
            />
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className="mt-8 w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-lg transition-colors"
        >
          {submitting ? 'Booking...' : `Confirm Booking - ${doctor.price} ${doctor.currency}`}
        </button>

        <p className="text-center text-xs text-gray-400 mt-3">
          By booking, you agree to our terms. This is a test platform for Zoho Flow integration.
        </p>
      </form>
    </div>
  );
}
