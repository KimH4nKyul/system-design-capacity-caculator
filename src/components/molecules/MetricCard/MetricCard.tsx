import React from 'react';
import { Text } from '../../atoms';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: 'blue' | 'warning' | 'success' | 'purple';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  color = 'blue'
}) => {
  return (
    <div
      style={{
        backgroundColor: '#374151',
        borderRadius: '8px',
        padding: '16px'
      }}
    >
      <Text variant="body" color="secondary">
        {title}
      </Text>
      <Text variant="metric" color={color}>
        {value}
      </Text>
      {subtitle && (
        <Text variant="caption" color="secondary">
          {subtitle}
        </Text>
      )}
    </div>
  );
};
