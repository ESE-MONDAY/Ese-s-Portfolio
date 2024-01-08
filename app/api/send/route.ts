
import { Resend } from 'resend';

const resend = new Resend("re_b14WG3Qc_H7sjcHwrw8RBz2YcQAS6Dy1e");

interface EmailOptions {
  from: string;
  to: string[];
  subject: string;
  react: React.ReactNode;
  text: string;
}

export const sendEmail = async (options: EmailOptions) => {
  try {
    const data = await resend.emails.send(options);
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};
