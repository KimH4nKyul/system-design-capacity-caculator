import React from 'react';
import { Card, MetricCard } from '../../molecules';
import { Calculations, CalculatorInputs } from '../../../types/calculator';
import { formatNumber, getDataTypeSize, getDataTypeName } from '../../../utils/calculator';

interface StorageCapacityProps {
  calculations: Calculations;
  inputs: CalculatorInputs;
}

export const StorageCapacity: React.FC<StorageCapacityProps> = ({
  calculations,
  inputs
}) => {
  const displaySize = calculations.totalDataSize < 1024 
    ? `${calculations.totalDataSize} MB`
    : `${calculations.totalDataSizeGB} GB`;

  const subtitle = `${formatNumber(inputs.dataCount)} records × ${getDataTypeSize(inputs.selectedDataType)} bytes (${getDataTypeName(inputs.selectedDataType)})`;

  return (
    <Card title="Storage Capacity" icon="💾" iconColor="purple">
      <MetricCard
        title="Total Size"
        value={displaySize}
        subtitle={subtitle}
        color="purple"
      />
    </Card>
  );
};
