import { NextRequest, NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: NextRequest) {
    const { name, email, message, subject } = await req.json();
    try {
       
      const data = await resend.emails.send({
        from: 'Hello <onboarding@resend.dev>',
        to: ['mondayese8@gmail.com'],
        subject: subject,
        react: EmailTemplate({ name: name, message:message, email:email, subject:subject }),
        text: 'Hello world',
      });
  
      return NextResponse.json(data);
    } catch (error) {
      return NextResponse.json({ error });
    }
  }



