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
    <h1>Hi, my name is {name}! </h1>
    <p>{message}</p>
    <p>You can reach out to me on{email}</p>

  </div>
);
