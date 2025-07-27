import React from 'react';
import { Card, InputField } from '../../molecules';
import { CalculatorInputs } from '../../../types/calculator';

interface TransactionScaleSectionProps {
  inputs: CalculatorInputs;
  onInputChange: <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => void;
}

export const TransactionScaleSection: React.FC<TransactionScaleSectionProps> = ({
  inputs,
  onInputChange
}) => {
  return (
    <Card title="Transaction Scale" icon="📈" iconColor="success">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <InputField
          label="Daily Transactions"
          type="number"
          value={inputs.dailyTransactions}
          onChange={(e) => onInputChange('dailyTransactions', Number(e.target.value))}
          placeholder="1000000"
        />
        
        <InputField
          label="Transactions per User Session"
          type="number"
          value={inputs.transactionsPerUser}
          onChange={(e) => onInputChange('transactionsPerUser', Number(e.target.value))}
          placeholder="50"
        />
      </div>
    </Card>
  );
};
