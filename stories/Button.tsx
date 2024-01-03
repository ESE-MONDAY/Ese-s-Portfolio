import React, { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
  activeColor?: string;
}

const Button: FC<ButtonProps> = ({ children, disabled,  activeColor }) => {
  return <button style={{
    backgroundColor: disabled ? 'gray' : activeColor,
    color: disabled ? 'white' : 'white',
    padding: '10px',
    borderRadius: '5px',
    fontSize: '20px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    outline: 'none',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',


  }}  >{children}</button>;
};

export default Button;
