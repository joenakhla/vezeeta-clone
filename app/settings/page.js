'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Settings() {
  const [webhookUrl, setWebhookUrl] = useState('');
  const [saved, setSaved] = useState(false);
  const [testing, setTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('zoho_webhook_url');
    if (stored) setWebhookUrl(stored);
  }, []);

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
        setTestResult({ success: true, message: 'Test data sent successfully to Zoho Flow!' });
      } else {
        setTestResult({ success: false, message: result.message || 'Webhook not configured on server.' });
      }
    } catch (err) {
      setTestResult({ success: false, message: 'Error: ' + err.message });
    }

    setTesting(false);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
      <h1 className="text-3xl font-bold mb-2">Webhook Settings</h1>
      <p className="text-gray-500 mb-8">
        Configure your Zoho Flow webhook URL to receive booking data from this test site.
      </p>

      {/* Setup Guide */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 mb-8">
        <h2 className="font-bold text-lg mb-4">How to Set Up Zoho Flow Webhook</h2>
        <ol className="space-y-3 text-sm text-gray-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">1</span>
            <span>Go to <strong>flow.zoho.com</strong> and create a new Flow</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">2</span>
            <span>Choose <strong>&quot;Webhook&quot;</strong> as the trigger</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">3</span>
            <span>Select <strong>&quot;Catch Hook&quot;</strong> - this gives you a webhook URL</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">4</span>
            <span>Copy the webhook URL and paste it below</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">5</span>
            <span>Click &quot;Send Test&quot; to verify the connection</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">6</span>
            <span>Go back to Zoho Flow and add your desired actions (send email, create record, etc.)</span>
          </li>
        </ol>
      </div>

      {/* Webhook URL Input */}
      <div className="bg-white rounded-xl p-6 border border-gray-100 mb-8">
        <h2 className="font-bold text-lg mb-4">Webhook URL</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Zoho Flow Webhook URL
          </label>
          <input
            type="url"
            value={webhookUrl}
            onChange={(e) => setWebhookUrl(e.target.value)}
            placeholder="https://flow.zoho.com/webhook/catch/XXXXX/YYYYY"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none font-mono text-sm"
          />
          <p className="text-xs text-gray-400 mt-1">
            This URL is saved in your browser&apos;s local storage (client-side only).
            For production, set the <code className="bg-gray-100 px-1 rounded">ZOHO_FLOW_WEBHOOK_URL</code> environment variable in Vercel.
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {saved ? 'Saved!' : 'Save URL'}
          </button>
          <button
            onClick={handleTest}
            disabled={testing}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            {testing ? 'Sending...' : 'Send Test'}
          </button>
        </div>

        {/* Test Result */}
        {testResult && (
          <div
            className={`mt-4 p-3 rounded-lg text-sm ${
              testResult.success
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {testResult.message}
          </div>
        )}
      </div>

      {/* Environment Variable Info */}
      <div className="bg-gray-900 rounded-xl p-6 text-sm">
        <h2 className="font-bold text-lg mb-3 text-white">Using Environment Variables (Recommended for Production)</h2>
        <p className="text-gray-400 mb-4">
          Instead of saving the URL in the browser, you can set it as an environment variable on Vercel:
        </p>
        <div className="bg-black rounded-lg p-4 font-mono text-green-400 text-xs overflow-x-auto">
          <p className="text-gray-500"># In your Vercel project settings &gt; Environment Variables:</p>
          <p className="mt-1">ZOHO_FLOW_WEBHOOK_URL=https://flow.zoho.com/webhook/catch/XXXXX/YYYYY</p>
        </div>
        <p className="text-gray-400 mt-3 text-xs">
          The API route checks for the environment variable first, then falls back to the URL sent from the client.
        </p>
      </div>

      {/* Data Format */}
      <div className="mt-8 bg-white rounded-xl p-6 border border-gray-100">
        <h2 className="font-bold text-lg mb-3">Webhook Payload Format</h2>
        <p className="text-gray-500 text-sm mb-4">
          When a patient books an appointment, this JSON data is sent to your webhook:
        </p>
        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-xs overflow-x-auto">
{`{
  "event": "new_booking",
  "booking_id": "BK-1234567890",
  "patient": {
    "name": "Patient Name",
    "email": "patient@email.com",
    "phone": "+20 1xx xxx xxxx",
    "age": "30",
    "gender": "male",
    "notes": "Patient notes..."
  },
  "doctor": {
    "id": "dr-ahmed-hassan",
    "name": "Dr. Ahmed Hassan",
    "specialty": "General Practice",
    "location": "Nasr City, Cairo"
  },
  "appointment": {
    "date": "2026-03-15",
    "time": "10:00 AM",
    "type": "clinic",
    "price": 300,
    "currency": "EGP"
  },
  "created_at": "2026-03-10T12:00:00.000Z"
}`}
        </pre>
      </div>
    </div>
  );
}
