import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,message
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>{message}</p>
  </div>
);
