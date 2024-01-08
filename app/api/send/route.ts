import type { NextApiRequest, NextApiResponse } from 'next';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KE);

const sendMail =  async (req: NextApiRequest, res: NextApiResponse) => {
    
  try {
    const { name, email, subject,message } = JSON.parse(req.body);
    console.log(name, email, subject,message);
    const emailContent = EmailTemplate({ name: name, email: email, message: message,  });

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['mondayese8@gmail.com'],
      subject: subject,
      text: message, // Include the 'text' property with the email content
      react: emailContent, // Assuming 'react' property requires the same content as 'text'
    });

    if (error) {
      return res.status(400).json(error);
    }

    return res.status(200).json(data);
  } catch (err) {
    console.error('Error sending email:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default sendMail;


