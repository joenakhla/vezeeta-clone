'use client';

import { useState } from 'react';

/**
 * WhatsApp Help Button for Pharmacy pages.
 * Opens WhatsApp with a pre-filled message including the order ID.
 * Connects to Bigin by Zoho via WhatsApp Business API.
 * 
 * HOW TO CONFIGURE:
 * Replace the phone number below with your WhatsApp Business number.
 * Format: country code + number, no spaces or dashes.
 * Example Egypt: 201XXXXXXXXX
 */
const WHATSAPP_NUMBER = '201000000000'; // ← CHANGE THIS to your WhatsApp Business number

export default function WhatsAppHelpButton({ orderId, orderTotal, patientName }) {
  const [isOpen, setIsOpen] = useState(false);

  // Build the pre-filled WhatsApp message
  function getWhatsAppUrl(issueType) {
    let message = '';

    if (issueType === 'custom') {
      message = orderId
        ? `Hi Vezeeta, I need help with my pharmacy order #${orderId}.`
        : `Hi Vezeeta, I need help with my pharmacy order.`;
    } else {
      const messages = {
        late: `Hi Vezeeta, my pharmacy order #${orderId || '___'} is late. Can you check the status?`,
        payment: `Hi Vezeeta, I have a payment issue with order #${orderId || '___'}. ${orderTotal ? `Order total: ${orderTotal} EGP.` : ''}`,
        prescription: `Hi Vezeeta, I forgot to attach my prescription to order #${orderId || '___'}. How can I add it?`,
        cancel: `Hi Vezeeta, I would like to cancel my pharmacy order #${orderId || '___'}.`,
        modify: `Hi Vezeeta, I need to add/remove items from my pharmacy order #${orderId || '___'}.`,
        other: `Hi Vezeeta, I need help with my pharmacy order #${orderId || '___'}.`,
      };
      message = messages[issueType] || messages.other;
    }

    if (patientName) {
      message += ` My name is ${patientName}.`;
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  return (
    <>
      {/* Floating WhatsApp Button - positioned above Zoho SalesIQ widget */}
      <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-2">
        {/* Tooltip */}
        {!isOpen && (
          <div className="bg-white px-3 py-2 rounded-lg shadow-lg text-sm font-medium text-gray-700 hidden sm:block animate-bounce">
            Need help with your order? 💬
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 focus:outline-none"
          style={{ backgroundColor: '#25D366' }}
          title="Chat with us on WhatsApp"
        >
          {isOpen ? (
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          ) : (
            <svg width="28" height="28" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Issue Selection Menu */}
      {isOpen && (
        <div className="fixed bottom-40 right-5 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-5 py-4" style={{ backgroundColor: '#075E54' }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-bold text-sm">Vezeeta Pharmacy Care</h3>
                <p className="text-white/70 text-xs">Typically replies within minutes</p>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="px-5 py-4 bg-gray-50">
            <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm text-sm text-gray-700 inline-block">
              Hi there! 👋 What do you need help with?
            </div>
          </div>

          {/* Options */}
          <div className="px-4 py-3 space-y-2">
            <a href={getWhatsAppUrl('late')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors text-sm group">
              <span className="text-lg">🕐</span>
              <span className="font-medium text-gray-700 group-hover:text-green-700">My order is late</span>
            </a>
            <a href={getWhatsAppUrl('payment')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors text-sm group">
              <span className="text-lg">💳</span>
              <span className="font-medium text-gray-700 group-hover:text-green-700">Payment issue</span>
            </a>
            <a href={getWhatsAppUrl('prescription')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors text-sm group">
              <span className="text-lg">📋</span>
              <span className="font-medium text-gray-700 group-hover:text-green-700">Forgot prescription</span>
            </a>
            <a href={getWhatsAppUrl('modify')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors text-sm group">
              <span className="text-lg">✏️</span>
              <span className="font-medium text-gray-700 group-hover:text-green-700">Add / remove items</span>
            </a>
            <a href={getWhatsAppUrl('cancel')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors text-sm group">
              <span className="text-lg">❌</span>
              <span className="font-medium text-gray-700 group-hover:text-green-700">Cancel my order</span>
            </a>
            <a href={getWhatsAppUrl('other')} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-100 hover:border-green-300 hover:bg-green-50 transition-colors text-sm group">
              <span className="text-lg">💬</span>
              <span className="font-medium text-gray-700 group-hover:text-green-700">Other issue</span>
            </a>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-gray-100 bg-gray-50">
            <p className="text-xs text-gray-400 text-center">Powered by WhatsApp Business · Vezeeta Care</p>
          </div>
        </div>
      )}
    </>
  );
}
