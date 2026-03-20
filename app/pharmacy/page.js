'use client';

import Link from 'next/link';
import { useState } from 'react';
import { pharmacyCategories, pharmacyItems, getPharmacyItemsByCategory, SALESIQ_DEPARTMENTS } from '@/lib/data';
import SalesIQDepartment from '@/components/SalesIQDepartment';
import WhatsAppHelpButton from '@/components/WhatsAppHelpButton';

export default function PharmacyPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [showOrder, setShowOrder] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    deliveryAddress: '',
    notes: '',
  });

  const filteredItems = selectedCategory === 'all'
    ? pharmacyItems
    : getPharmacyItemsByCategory(selectedCategory);

  function addToCart(item) {
    const existing = cart.find((c) => c.id === item.id);
    if (existing) {
      setCart(cart.map((c) => c.id === item.id ? { ...c, qty: c.qty + 1 } : c));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }

  function removeFromCart(itemId) {
    setCart(cart.filter((c) => c.id !== itemId));
  }

  function updateQty(itemId, qty) {
    if (qty < 1) return removeFromCart(itemId);
    setCart(cart.map((c) => c.id === itemId ? { ...c, qty } : c));
  }

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const orderData = {
      event: 'pharmacy_order',
      order_id: 'PH-' + Date.now(),
      patient: {
        name: form.patientName,
        email: form.patientEmail,
        phone: form.patientPhone,
        delivery_address: form.deliveryAddress,
        notes: form.notes,
      },
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.qty,
        requires_prescription: item.requiresPrescription,
        subtotal: item.price * item.qty,
      })),
      total: cartTotal,
      currency: 'EGP',
      has_prescription_items: cart.some((item) => item.requiresPrescription),
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
        body: JSON.stringify(orderData),
      });
      const result = await res.json();

      sessionStorage.setItem('lastBooking', JSON.stringify(orderData));
      sessionStorage.setItem('webhookResult', JSON.stringify(result));

      window.location.href = '/booking-success';
    } catch (err) {
      alert('Order failed: ' + err.message);
      setSubmitting(false);
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <SalesIQDepartment department={SALESIQ_DEPARTMENTS.DIAGNOSTICS} />
<WhatsAppHelpButton />

      {/* Header */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary-600">Home</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Pharmacy</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <span className="text-4xl">💊</span>
        <div>
          <h1 className="text-3xl font-bold">Online Pharmacy</h1>
          <p className="text-gray-500">Order medicines and healthcare products with delivery</p>
        </div>
      </div>

      {!showOrder ? (
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left: Categories + Items */}
          <div className="lg:col-span-3">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? 'bg-primary-500 text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
                }`}
              >
                All Items
              </button>
              {pharmacyCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-primary-500 text-white'
                      : 'bg-white border border-gray-200 text-gray-600 hover:border-primary-300'
                  }`}
                >
                  {cat.icon} {cat.name}
                </button>
              ))}
            </div>

            {/* Items Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-primary-200 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-sm">{item.name}</h3>
                    {item.requiresPrescription && (
                      <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full flex-shrink-0">
                        Rx
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs mb-2">{item.description}</p>
                  <p className="text-gray-500 text-xs mb-3">{item.unit}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary-700">{item.price} EGP</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="bg-primary-500 hover:bg-primary-600 text-white px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                    >
                      + Add
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Cart */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-5 border border-gray-100 sticky top-20">
              <h2 className="font-bold text-lg mb-4">Cart ({cart.length})</h2>
              {cart.length === 0 ? (
                <p className="text-gray-400 text-sm text-center py-8">Your cart is empty</p>
              ) : (
                <>
                  <div className="space-y-3 mb-4 max-h-80 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between text-sm border-b border-gray-50 pb-2">
                        <div className="flex-1 min-w-0 mr-2">
                          <p className="font-medium truncate">{item.name}</p>
                          <p className="text-gray-400 text-xs">{item.price} EGP each</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-6 h-6 bg-gray-100 rounded text-xs">-</button>
                          <span className="w-6 text-center text-xs">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-6 h-6 bg-gray-100 rounded text-xs">+</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  {cart.some((item) => item.requiresPrescription) && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-2 mb-4 text-xs text-yellow-800">
                      Some items require a prescription. Upload at checkout or our pharmacist will contact you.
                    </div>
                  )}
                  <div className="flex justify-between font-bold text-lg mb-4">
                    <span>Total:</span>
                    <span className="text-primary-700">{cartTotal} EGP</span>
                  </div>
                  <button
                    onClick={() => setShowOrder(true)}
                    className="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-xl font-semibold transition-colors"
                  >
                    Proceed to Order
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* Order Form */
        <div className="max-w-2xl mx-auto">
          <button onClick={() => setShowOrder(false)} className="text-primary-600 hover:underline text-sm mb-6 inline-block">
            &larr; Back to shopping
          </button>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 mb-6">
            <h3 className="font-semibold text-primary-800 mb-2">Order Summary</h3>
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between text-sm py-1">
                <span>{item.name} x{item.qty}</span>
                <span className="font-medium">{item.price * item.qty} EGP</span>
              </div>
            ))}
            <div className="flex justify-between font-bold mt-2 pt-2 border-t border-primary-200">
              <span>Total</span><span>{cartTotal} EGP</span>
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Delivery Address *</label>
              <textarea name="deliveryAddress" required value={form.deliveryAddress} onChange={handleChange} rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none resize-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Notes (optional)</label>
              <input type="text" name="notes" value={form.notes} onChange={handleChange} placeholder="Special instructions..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
            </div>
            <button type="submit" disabled={submitting}
              className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 text-white py-4 rounded-xl font-semibold text-lg transition-colors mt-4">
              {submitting ? 'Placing Order...' : `Place Order - ${cartTotal} EGP`}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
