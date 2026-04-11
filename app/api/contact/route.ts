import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendOwnerNotification } from '@/lib/mailer';

export const runtime = 'nodejs';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = contactSchema.parse(body);
    
    console.log('Contact form submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
    });

    await sendOwnerNotification({
      formName: 'Contact Form',
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      fields: [
        { label: 'Name', value: validatedData.name },
        { label: 'Email', value: validatedData.email },
        { label: 'Subject', value: validatedData.subject },
        { label: 'Message', value: validatedData.message },
      ],
      replyTo: validatedData.email,
      userAgent: request.headers.get('user-agent') ?? undefined,
      ipAddress:
        request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
        request.headers.get('x-real-ip') ??
        undefined,
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed',
          errors: error.issues
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { 
        success: false, 
        message: 'Internal server error' 
      },
      { status: 500 }
    );
  }
}
