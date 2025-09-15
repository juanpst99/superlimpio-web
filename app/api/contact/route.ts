import { NextResponse } from 'next/server'
import { validateContactForm, sanitizeInput } from '@/lib/validations'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    // Validate form data
    const validation = validateContactForm(body)
    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Invalid form data', errors: validation.errors },
        { status: 400 }
      )
    }
    
    // Sanitize inputs
    const sanitizedData = {
      name: sanitizeInput(body.name),
      phone: sanitizeInput(body.phone),
      email: sanitizeInput(body.email || ''),
      city: sanitizeInput(body.city),
      service: sanitizeInput(body.service),
      message: sanitizeInput(body.message || ''),
      timestamp: new Date().toISOString(),
    }
    
    // Here you would normally:
    // 1. Send email notification
    // 2. Save to database
    // 3. Send to CRM or webhook
    // 4. Send WhatsApp notification via API
    
    // For now, we'll just log it
    console.log('New contact form submission:', sanitizedData)
    
    // In production, you'd integrate with services like:
    // - SendGrid/Resend for email
    // - Supabase/Firebase for database
    // - WhatsApp Business API
    // - Webhook to n8n/Zapier
    
    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully',
    })
    
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}