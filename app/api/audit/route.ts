import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const auditSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  phone: z.string().optional(),
  currentSpend: z.string().optional(),
  goals: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the request body
    const validatedData = auditSchema.parse(body);
    
    // Log the submission (in production, you'd save to database or send email)
    console.log('Audit request submission:', {
      ...validatedData,
      timestamp: new Date().toISOString(),
      userAgent: request.headers.get('user-agent') || 'unknown',
      type: 'free-audit-request'
    });

    // Simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification to sales team
    // 3. Add to CRM as lead
    // 4. Send confirmation email to customer
    // 5. Schedule follow-up task
    // 6. Create initial audit project

    // Example email notification (in production):
    // await sendEmail({
    //   to: 'sales@amzadvanta.com',
    //   subject: `New Audit Request: ${validatedData.company}`,
    //   template: 'audit-request',
    //   data: validatedData
    // });

    // Example CRM integration (in production):
    // await addToCRM({
    //   contact: {
    //     name: validatedData.name,
    //     email: validatedData.email,
    //     phone: validatedData.phone,
    //     company: validatedData.company
    //   },
    //   lead: {
    //     source: 'website-audit-form',
    //     status: 'new',
    //     value: validatedData.currentSpend,
    //     notes: validatedData.goals
    //   }
    // });

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
