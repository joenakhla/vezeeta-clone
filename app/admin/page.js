'use client';

import { useState, useEffect } from 'react';

// Default password - change via NEXT_PUBLIC_ADMIN_PASSWORD env variable on Vercel
const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'vezeeta2026';

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState('');
  const [webhookUrl, setWebhookUrl] = useState('');
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  useEffect(() => {
    // Check if already authenticated this session
    const auth = sessionStorage.getItem('admin_auth');
    if (auth === 'true') setAuthenticated(true);

    const stored = localStorage.getItem('zoho_webhook_url');
    if (stored) setWebhookUrl(stored);
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      sessionStorage.setItem('admin_auth', 'true');
      setError('');
    } else {
      setError('Incorrect password');
    }
  }

  function handleLogout() {
    setAuthenticated(false);
    sessionStorage.removeItem('admin_auth');
  }

  function handleSave() {
    localStorage.setItem('zoho_webhook_url', webhookUrl);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  async function handleTest() {
    if (!webhookUrl) {
      setTestResult({ success: false, message: 'Please enter a webhook URL first.' });
      return;
    }

    setTesting(true);
    setTestResult(null);

    const testData = {
      event: 'test_webhook',
      booking_id: 'TEST-' + Date.now(),
      patient: {
        name: 'Test Patient',
        email: 'test@example.com',
        phone: '+20 100 000 0000',
        age: '30',
        gender: 'male',
        notes: 'This is a test booking from Vezeeta Clone',
      },
      doctor: {
        id: 'dr-ahmed-hassan',
        name: 'Dr. Ahmed Hassan',
        specialty: 'General Practice',
        location: 'Nasr City, Cairo',
      },
      appointment: {
        date: new Date().toISOString().split('T')[0],
        time: '10:00 AM',
        type: 'clinic',
        price: 300,
        currency: 'EGP',
      },
      created_at: new Date().toISOString(),
    };

    try {
      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-webhook-url': webhookUrl,
        },
        body: JSON.stringify(testData),
      });
      const result = await res.json();

      if (result.webhookSent) {
        setTestResult({ success: true, message: 'Test data sent successfully!' });
      } else {
        setTestResult({ success: false, message: result.message || 'Not configured on server.' });
      }
    } catch (err) {
      setTestResult({ success: false, message: 'Error: ' + err.message });
    }

    setTesting(false);
  }

  // ====== LOGIN SCREEN ======
  if (!authenticated) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 w-full max-w-sm">
          <h1 className="text-xl font-bold text-center mb-6">Admin Access</h1>
          <form onSubmit={handleLogin}>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none mb-4"
              autoFocus
            />
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            <button
              type="submit"
              className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  // ====== ADMIN PANEL ======
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Admin Panel</h1>
        <button onClick={handleLogout} className="text-sm text-gray-400 hover:text-red-500">
          Sign Out
        </button>
      </div>

      {/* Integration Setup Guide */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
        <h2 className="font-bold text-lg mb-4">Integration Setup</h2>
        <ol className="space-y-3 text-sm text-gray-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <span>Go to <strong>flow.zoho.com</strong> and create a new Flow</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <span>Choose <strong>Webhook &gt; Catch Hook</strong> as the trigger</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <span>Copy the webhook URL and paste it below</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <span>Click <strong>Send Test</strong> to verify, then add actions in Zoho Flow</span>
          </li>
        </ol>
      </div>

      {/* Webhook Config */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 mb-6">
        <h2 className="font-bold text-lg mb-4">Webhook Configuration</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Webhook URL</label>
          <input
            type="url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="https://flow.zoho.com/webhook/catch/..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none font-mono text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">
            Saved in browser storage. For production use the <code className="bg-gray-100 px-1 rounded">ZOHO_FLOW_WEBHOOK_URL</code> env variable.
          </p>
        </div>

        <div className="flex gap-3">
          <button onClick={handleSave}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            {saved ? 'Saved!' : 'Save'}
          </button>
          <button onClick={handleTest} disabled={testing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            {testing ? 'Sending...' : 'Send Test'}
          </button>
        </div>

        {testResult && (
          <div className={`mt-4 p-3 rounded-lg text-sm ${testResult.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
            {testResult.message}
          </div>
        )}
      </div>

      {/* Environment Variable */}
      <div className="bg-gray-900 rounded-xl p-6 text-sm mb-6">
        <h2 className="font-bold text-lg mb-3 text-white">Environment Variables (Vercel)</h2>
        <div className="bg-black rounded-lg p-4 font-mono text-green-400 text-xs overflow-x-auto space-y-1">
          <p className="text-gray-500"># Required - webhook endpoint</p>
          <p>ZOHO_FLOW_WEBHOOK_URL=https://flow.zoho.com/webhook/catch/...</p>
          <p className="text-gray-500 mt-2"># Optional - change admin password (default: vezeeta2026)</p>
          <p>NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_password</p>
        </div>
      </div>

      {/* Event Types */}
      <div className="bg-white rounded-xl p-6 border border-gray-100">
        <h2 className="font-bold text-lg mb-3">Webhook Event Types</h2>
        <p className="text-gray-500 text-sm mb-4">Different events are sent depending on the booking source:</p>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-lg">🩺</span>
            <div>
              <p className="font-semibold">new_booking</p>
              <p className="text-gray-400 text-xs">Doctor appointment (clinic, video, or home visit)</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-lg">💊</span>
            <div>
              <p className="font-semibold">pharmacy_order</p>
              <p className="text-gray-400 text-xs">Medicine order with cart items and delivery address</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-lg">🔬</span>
            <div>
              <p className="font-semibold">lab_booking</p>
              <p className="text-gray-400 text-xs">Lab test booking with selected tests and visit type</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="text-lg">📡</span>
            <div>
              <p className="font-semibold">scan_booking</p>
              <p className="text-gray-400 text-xs">Radiology scan booking with preparation details</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
