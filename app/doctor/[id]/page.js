'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { getDoctorById, generateSlots, reviews } from '@/lib/data';

export default function DoctorProfile() {
  const params = useParams();
  const doctor = getDoctorById(params.id);
  const [slots, setSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  useEffect(() => {
    if (doctor) {
      const generated = generateSlots(doctor);
      setSlots(generated);
      if (generated.length > 0) {
        setSelectedDate(generated[0].date);
      }
    }
  }, [doctor]);

  if (!doctor) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Doctor Not Found</h1>
        <Link href="/" className="text-primary-600 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  const fullStars = Math.floor(doctor.rating);
  const stars = '\u2605'.repeat(fullStars) + '\u2606'.repeat(5 - fullStars);
  const currentSlot = slots.find((s) => s.date === selectedDate);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/doctors/${doctor.specialtySlug}`} className="hover:text-primary-600">
          {doctor.specialty}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{doctor.name}</span>
      </nav>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left: Doctor Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex gap-5">
              <div
                className={`avatar-initials flex-shrink-0 w-24 h-24 text-3xl ${
                  doctor.gender === 'male' ? 'avatar-male' : 'avatar-female'
                }`}
              >
                {doctor.initials}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{doctor.name}</h1>
                <p className="text-primary-600 font-medium">{doctor.title}</p>
                <p className="text-gray-500 text-sm mt-1">{doctor.specialty}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="stars text-lg">{stars}</span>
                  <span className="text-gray-500 text-sm">
                    {doctor.rating} ({doctor.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div>
                <p className="text-gray-400 text-xs uppercase">Location</p>
                <p className="font-medium text-sm mt-1">{doctor.location}</p>
                <p className="text-gray-500 text-xs">{doctor.address}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase">Consultation Fee</p>
                <p className="font-bold text-primary-700 text-lg mt-1">
                  {doctor.price} {doctor.currency}
                </p>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase">Wait Time</p>
                <p className="font-medium text-sm mt-1">~{doctor.waitTime}</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-3">About the Doctor</h2>
            <p className="text-gray-600 leading-relaxed">{doctor.bio}</p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="font-semibold text-sm text-gray-400 uppercase mb-2">Education</h3>
                <ul className="space-y-1">
                  {doctor.education.map((edu, i) => (
                    <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-primary-500 mt-0.5">&#8226;</span>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-sm text-gray-400 uppercase mb-2">Details</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Experience:</strong> {doctor.experience} years</li>
                  <li><strong>Languages:</strong> {doctor.languages.join(', ')}</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-lg font-bold mb-4">Patient Reviews</h2>
            <div className="space-y-4">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-50 pb-4 last:border-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{review.patient}</span>
                    <span className="text-gray-400 text-xs">{review.date}</span>
                  </div>
                  <div className="stars text-sm mb-1">
                    {'\u2605'.repeat(review.rating)}{'\u2606'.repeat(5 - review.rating)}
                  </div>
                  <p className="text-gray-600 text-sm">{review.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 sticky top-20">
            <h2 className="text-lg font-bold mb-4">Book Appointment</h2>

            {/* Date Selection */}
            <div className="mb-4">
              <p className="text-sm font-medium text-gray-600 mb-2">Select Date</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {slots.map((slot) => (
                  <button
                    key={slot.date}
                    onClick={() => {
                      setSelectedDate(slot.date);
                      setSelectedTime(null);
                    }}
                    className={`flex-shrink-0 px-3 py-2 rounded-lg text-center text-sm border transition-all ${
                      selectedDate === slot.date
                        ? 'bg-primary-500 text-white border-primary-500'
                        : 'border-gray-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="font-medium">{slot.displayDate}</div>
                    <div className="text-xs opacity-75">{slot.dayName}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            {currentSlot && (
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-600 mb-2">Select Time</p>
                <div className="grid grid-cols-3 gap-2">
                  {currentSlot.times.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`slot-btn text-center ${selectedTime === time ? 'selected' : ''}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Book Button */}
            {selectedDate && selectedTime ? (
              <Link
                href={`/book/${doctor.id}?date=${selectedDate}&time=${encodeURIComponent(selectedTime)}`}
                className="block w-full bg-primary-500 hover:bg-primary-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
              >
                Book Now - {doctor.price} {doctor.currency}
              </Link>
            ) : (
              <button
                disabled
                className="block w-full bg-gray-200 text-gray-400 text-center py-3 rounded-xl font-semibold cursor-not-allowed"
              >
                Select a date & time
              </button>
            )}

            <p className="text-center text-xs text-gray-400 mt-3">
              Confirmation will be sent to your email
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
