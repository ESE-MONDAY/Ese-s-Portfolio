import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
  subject: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, message, email, subject
}) => (
  <div>
    <h2>{subject}</h2>
    <p>Hi, my name is <strong>{name}</strong> ! </p>
    <p>{message}</p>
    <p>You can reach out to me on {email}</p>

  </div>
);
