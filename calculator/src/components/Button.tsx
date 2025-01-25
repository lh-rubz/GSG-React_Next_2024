import React from 'react';

interface ButtonProps {
  number: string;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ number, onClick ,className}) => {
  return (
    <button
       onClick={onClick}
       className={className}
    >
      {number}
    </button>
  );
};

export default Button;
