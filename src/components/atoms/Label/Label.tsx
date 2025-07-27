import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({ 
  children, 
  htmlFor, 
  required = false 
}) => {
  return (
    <label
      htmlFor={htmlFor}
      style={{
        display: 'block',
        fontSize: '14px',
        fontWeight: '500',
        marginBottom: '8px',
        color: 'white'
      }}
    >
      {children}
      {required && <span style={{ color: '#EF4444', marginLeft: '4px' }}>*</span>}
    </label>
  );
};
