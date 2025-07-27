import React from 'react';
import { Text } from '../../atoms';

interface CardProps {
  title?: string;
  icon?: string;
  iconColor?: 'success' | 'warning' | 'purple' | 'blue';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  title,
  icon,
  iconColor = 'blue',
  children
}) => {
  return (
    <div
      style={{
        backgroundColor: '#1F2937',
        borderRadius: '8px',
        padding: '24px'
      }}
    >
      {title && (
        <div style={{ marginBottom: '16px' }}>
          <Text variant="h2" color={iconColor}>
            {icon && `${icon} `}{title}
          </Text>
        </div>
      )}
      {children}
    </div>
  );
};
