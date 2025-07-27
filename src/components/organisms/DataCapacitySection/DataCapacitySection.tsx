import React from 'react';
import { Card, SelectField, InputField } from '../../molecules';
import { CalculatorInputs } from '../../../types/calculator';
import { DATA_TYPES } from '../../../constants/calculator';

interface DataCapacitySectionProps {
  inputs: CalculatorInputs;
  onInputChange: <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => void;
}

export const DataCapacitySection: React.FC<DataCapacitySectionProps> = ({
  inputs,
  onInputChange
}) => {
  const dataTypeOptions = DATA_TYPES.map(type => ({
    value: type.id,
    label: `${type.name} (${type.size} bytes)`
  }));

  return (
    <Card title="Data Capacity" icon="💾" iconColor="purple">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SelectField
          label="Data Type"
          value={inputs.selectedDataType}
          onChange={(e) => onInputChange('selectedDataType', e.target.value)}
          options={dataTypeOptions}
        />
        
        <InputField
          label="Number of Records"
          type="number"
          value={inputs.dataCount}
          onChange={(e) => onInputChange('dataCount', Number(e.target.value))}
          placeholder="1000000"
        />
      </div>
    </Card>
  );
};
