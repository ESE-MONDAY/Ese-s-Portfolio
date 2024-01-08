import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  message: string;
  email: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, message, email
}) => (
  <div>
    <h1>Hi, my name is {name}!</h1>
    <p>{message}</p>
    <p>{email}</p>

  </div>
);
