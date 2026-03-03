'use client';

import Link from 'next/link';
import { useState } from 'react';
import { doctors } from '@/lib/data';

// Simulated bookings for the dashboard
const dummyBookings = [
  {
    id: 'BK-1001',
    patientName: 'Mohamed Ali',
    patientPhone: '+20 100 123 4567',
    patientEmail: 'mohamed.ali@email.com',
    doctorId: 'dr-ahmed-hassan',
    date: '2026-03-05',
    time: '10:00 AM',
    type: 'clinic',
    status: 'confirmed',
    notes: 'Follow-up visit for blood pressure check',
  },
  {
    id: 'BK-1002',
    patientName: 'Fatma Ibrahim',
    patientPhone: '+20 111 234 5678',
    patientEmail: 'fatma.i@email.com',
    doctorId: 'dr-ahmed-hassan',
    date: '2026-03-05',
    time: '10:30 AM',
    type: 'clinic',
    status: 'confirmed',
    notes: '',
  },
  {
    id: 'BK-1003',
    patientName: 'Ahmad Youssef',
    patientPhone: '+20 122 345 6789',
    patientEmail: 'ahmad.y@email.com',
    doctorId: 'dr-sara-elsayed',
    date: '2026-03-06',
    time: '11:00 AM',
    type: 'clinic',
    status: 'pending',
    notes: 'Teeth whitening consultation',
  },
  {
    id: 'BK-1004',
    patientName: 'Noura Hassan',
    patientPhone: '+20 101 456 7890',
    patientEmail: 'noura.h@email.com',
    doctorId: 'dr-mohamed-karim',
    date: '2026-03-07',
    time: '09:30 AM',
    type: 'video',
    status: 'confirmed',
    notes: 'Chest pain follow-up',
  },
  {
    id: 'BK-1005',
    patientName: 'Khaled Mansour',
    patientPhone: '+20 112 567 8901',
    patientEmail: 'khaled.m@email.com',
    doctorId: 'dr-omar-farouk',
    date: '2026-03-04',
    time: '02:00 PM',
    type: 'clinic',
    status: 'completed',
    notes: 'Knee injury assessment',
  },
  {
    id: 'BK-1006',
    patientName: 'Reem Saad',
    patientPhone: '+20 100 678 9012',
    patientEmail: 'reem.s@email.com',
    doctorId: 'dr-nadia-mostafa',
    date: '2026-03-08',
    time: '03:00 PM',
    type: 'home',
    status: 'pending',
    notes: 'Skin rash evaluation',
  },
];

export default function Dashboard() {
  const [selectedDoctor, setSelectedDoctor] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredBookings = dummyBookings.filter((b) => {
    if (selectedDoctor !== 'all' && b.doctorId !== selectedDoctor) return false;
    if (statusFilter !== 'all' && b.status !== statusFilter) return false;
    return true;
  });

  function getDoctorName(doctorId) {
    const doc = doctors.find((d) => d.id === doctorId);
    return doc ? doc.name : doctorId;
  }

  const statusColors = {
    confirmed: 'bg-green-100 text-green-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    cancelled: 'bg-red-100 text-red-800',
  };

  const typeIcons = {
    clinic: '🏥',
    video: '📹',
    home: '🏠',
  };

  // Stats
  const totalBookings = dummyBookings.length;
  const confirmedCount = dummyBookings.filter((b) => b.status === 'confirmed').length;
  const pendingCount = dummyBookings.filter((b) => b.status === 'pending').length;
  const todayCount = dummyBookings.filter((b) => b.date === new Date().toISOString().split('T')[0]).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Doctor Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage appointments and view bookings</p>
        </div>
        <Link
          href="/"
          className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Back to Home
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <p className="text-gray-400 text-sm">Total Bookings</p>
          <p className="text-3xl font-bold mt-1">{totalBookings}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <p className="text-gray-400 text-sm">Confirmed</p>
          <p className="text-3xl font-bold mt-1 text-green-600">{confirmedCount}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <p className="text-gray-400 text-sm">Pending</p>
          <p className="text-3xl font-bold mt-1 text-yellow-600">{pendingCount}</p>
        </div>
        <div className="bg-white rounded-xl p-5 border border-gray-100">
          <p className="text-gray-400 text-sm">Today</p>
          <p className="text-3xl font-bold mt-1 text-primary-600">{todayCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 border border-gray-100 mb-6 flex flex-wrap gap-4">
        <div>
          <label className="text-sm text-gray-500 mr-2">Doctor:</label>
          <select
            value={selectedDoctor}
            onChange={(e) => setSelectedDoctor(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
          >
            <option value="all">All Doctors</option>
            {doctors.map((d) => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm text-gray-500 mr-2">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
          >
            <option value="all">All Statuses</option>
            <option value="confirmed">Confirmed</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Booking ID</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Patient</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Doctor</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Date & Time</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Type</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Status</th>
                <th className="text-left px-4 py-3 font-semibold text-gray-600">Notes</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-4 py-3 font-mono text-xs">{booking.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-medium">{booking.patientName}</div>
                    <div className="text-gray-400 text-xs">{booking.patientPhone}</div>
                  </td>
                  <td className="px-4 py-3">{getDoctorName(booking.doctorId)}</td>
                  <td className="px-4 py-3">
                    <div>{booking.date}</div>
                    <div className="text-gray-400 text-xs">{booking.time}</div>
                  </td>
                  <td className="px-4 py-3">
                    {typeIcons[booking.type]} {booking.type}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-500 text-xs max-w-[200px] truncate">
                    {booking.notes || '-'}
                  </td>
                </tr>
              ))}
              {filteredBookings.length === 0 && (
                <tr>
                  <td colSpan={7} className="px-4 py-12 text-center text-gray-400">
                    No bookings match your filters.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Banner */}
      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800">
        <strong>Note:</strong> This dashboard shows sample booking data.
        New bookings made through the patient flow will appear here.
      </div>
    </div>
  );
}
