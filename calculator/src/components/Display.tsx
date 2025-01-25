import React from 'react';

interface DisplayProps {
  value: string;
  previousInput:string;
}

const Display: React.FC<DisplayProps> = ({ value ,previousInput}) => {
  return (
    <div className="display">
      <div className="old-value">{previousInput}</div>
      <div className="new-value">{value || "0"}</div>
    </div>
  );
};

export default Display;
