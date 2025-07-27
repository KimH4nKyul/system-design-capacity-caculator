import React from 'react';
import { Card } from '../../molecules';
import { Text } from '../../atoms';
import { SCALING_REFERENCE } from '../../../constants/calculator';

export const ScalingReference: React.FC = () => {
  return (
    <Card title="Scaling Reference" icon="📊" iconColor="success">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {SCALING_REFERENCE.map((item, index) => (
          <div 
            key={index}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Text variant="body">{item.scale}</Text>
            <Text variant="body" style={{ fontFamily: 'monospace' }}>
              {item.tps}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  );
};
