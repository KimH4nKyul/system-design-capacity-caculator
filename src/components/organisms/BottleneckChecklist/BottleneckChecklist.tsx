import React from 'react';
import { Card } from '../../molecules';
import { Text } from '../../atoms';
import { BOTTLENECK_CHECKLIST } from '../../../constants/calculator';

export const BottleneckChecklist: React.FC = () => {
  return (
    <Card>
      <Text variant="h3" color="warning" style={{ marginBottom: '12px' }}>
        ⚠️ Bottleneck Checklist
      </Text>
      <ul style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '8px', 
        paddingLeft: '0', 
        listStyle: 'none' 
      }}>
        {BOTTLENECK_CHECKLIST.map((item, index) => (
          <li key={index}>
            <Text variant="body" color="secondary">
              • {item}
            </Text>
          </li>
        ))}
      </ul>
    </Card>
  );
};
