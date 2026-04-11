import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendOwnerNotification } from '@/lib/mailer';

export const runtime = 'nodejs';

const auditSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  amazonCompany: z.string().min(2),
  phone: z.string().optional(),
  additionalDetails: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = auditSchema.parse(body);
    
    console.log('Audit request submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      type: 'free-audit-request'
    });

    await sendOwnerNotification({
      formName: 'Free Audit Form',
      subject: `New Free Audit Request: ${validatedData.amazonCompany}`,
      fields: [
        { label: 'Name', value: validatedData.name },
        { label: 'Email', value: validatedData.email },
        { label: 'Amazon Company Name', value: validatedData.amazonCompany },
        { label: 'Phone', value: validatedData.phone || 'Not provided' },
        { label: 'Additional Details', value: validatedData.additionalDetails },
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
        message: 'Audit request submitted successfully. We will contact you within 24 hours.',
        nextSteps: [
          'Initial consultation within 24 hours',
          'Comprehensive campaign analysis',
          'Detailed strategy report',
          'Implementation recommendations'
        ]
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Audit request error:', error);
    
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
        message: 'Internal server error. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}
