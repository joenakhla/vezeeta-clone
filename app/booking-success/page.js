'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function BookingSuccess() {
  const [booking, setBooking] = useState(null);
  const [webhookResult, setWebhookResult] = useState(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('lastBooking');
    const result = sessionStorage.getItem('webhookResult');
    if (stored) setBooking(JSON.parse(stored));
    if (result) setWebhookResult(JSON.parse(result));
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
      {/* Success Icon */}
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-3">Booking Confirmed!</h1>
      <p className="text-gray-500 mb-8">
        Your appointment has been booked successfully.
      </p>

      {booking && (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-left mb-8">
          <h2 className="font-bold text-lg mb-4 text-center">Booking Details</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Booking ID</span>
              <span className="font-mono font-medium">{booking.booking_id}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Patient</span>
              <span className="font-medium">{booking.patient.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Doctor</span>
              <span className="font-medium">{booking.doctor.name}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Specialty</span>
              <span className="font-medium">{booking.doctor.specialty}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Date</span>
              <span className="font-medium">{booking.appointment.date}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Time</span>
              <span className="font-medium">{booking.appointment.time}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-50">
              <span className="text-gray-500">Type</span>
              <span className="font-medium capitalize">{booking.appointment.type}</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-500">Fee</span>
              <span className="font-bold text-primary-700">
                {booking.appointment.price} {booking.appointment.currency}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Webhook Status */}
      {webhookResult && (
        <div
          className={`rounded-xl p-4 mb-8 text-sm ${
            webhookResult.webhookSent
              ? 'bg-green-50 border border-green-200 text-green-800'
              : 'bg-yellow-50 border border-yellow-200 text-yellow-800'
          }`}
        >
          <strong>Zoho Flow Webhook:</strong>{' '}
          {webhookResult.webhookSent
            ? 'Data sent successfully to Zoho Flow!'
            : webhookResult.message || 'Webhook not configured. Go to Settings to add your webhook URL.'}
        </div>
      )}

      {/* Raw Data (for debugging) */}
      {booking && (
        <details className="text-left mb-8">
          <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-600">
            View raw webhook payload (for debugging)
          </summary>
          <pre className="mt-2 bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
            {JSON.stringify(booking, null, 2)}
          </pre>
        </details>
      )}

      <div className="flex gap-4 justify-center">
        <Link
          href="/"
          className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          Book Another Appointment
        </Link>
        <Link
          href="/dashboard"
          className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-colors"
        >
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
