import React from 'react';
import { Card, MetricCard } from '../../molecules';
import { Calculations, CalculatorInputs } from '../../../types/calculator';
import { formatNumber } from '../../../utils/calculator';

interface ThroughputResultsProps {
  calculations: Calculations;
  inputs: CalculatorInputs;
}

export const ThroughputResults: React.FC<ThroughputResultsProps> = ({
  calculations,
  inputs
}) => {
  return (
    <Card title="Throughput Results" icon="⚡" iconColor="blue">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <MetricCard
          title="Average Throughput"
          value={`${calculations.basePerSecond} TPS`}
          subtitle="Transactions per second (sustained)"
          color="blue"
        />
        
        <MetricCard
          title="Peak Throughput"
          value={`${calculations.peakPerSecond} TPS`}
          subtitle={`During ${inputs.peakPercentage}% peak for ${inputs.peakHours}h`}
          color="warning"
        />
        
        <MetricCard
          title="Daily Active Users"
          value={formatNumber(calculations.usersPerDay)}
          subtitle={`Based on ${inputs.transactionsPerUser} txn/user`}
          color="success"
        />
      </div>
    </Card>
  );
};
