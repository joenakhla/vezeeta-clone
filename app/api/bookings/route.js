import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const bookingData = await request.json();

    // Get webhook URL from environment variable (server-side)
    const webhookUrl = process.env.ZOHO_FLOW_WEBHOOK_URL;

    // Try client-provided URL as fallback (sent via header)
    const clientWebhookUrl = request.headers.get('x-webhook-url');

    const targetUrl = webhookUrl || clientWebhookUrl;

    if (!targetUrl) {
      // No webhook configured - still return success for testing
      console.log('=== NEW BOOKING (no webhook configured) ===');
      console.log(JSON.stringify(bookingData, null, 2));
      console.log('============================================');

      return NextResponse.json({
        success: true,
        webhookSent: false,
        message: 'Booking recorded but no webhook URL configured. Set ZOHO_FLOW_WEBHOOK_URL in environment variables or configure it in Settings.',
        booking: bookingData,
      });
    }

    // Send to Zoho Flow webhook
    console.log(`Sending booking data to webhook: ${targetUrl}`);

    const webhookResponse = await fetch(targetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    const webhookStatus = webhookResponse.status;
    let webhookBody = null;
    try {
      webhookBody = await webhookResponse.text();
    } catch {
      // ignore body parse errors
    }

    console.log(`Webhook response: ${webhookStatus}`);

    return NextResponse.json({
      success: true,
      webhookSent: true,
      webhookStatus,
      webhookResponse: webhookBody,
      message: 'Booking data sent to Zoho Flow successfully!',
      booking: bookingData,
    });
  } catch (error) {
    console.error('Booking API error:', error);

    return NextResponse.json(
      {
        success: false,
        webhookSent: false,
        error: error.message,
        message: 'Failed to process booking.',
      },
      { status: 500 }
    );
  }
}

// GET endpoint to check API health
export async function GET() {
  return NextResponse.json({
    status: 'ok',
    webhookConfigured: !!process.env.ZOHO_FLOW_WEBHOOK_URL,
    message: 'Booking API is running. POST booking data to this endpoint.',
  });
}
