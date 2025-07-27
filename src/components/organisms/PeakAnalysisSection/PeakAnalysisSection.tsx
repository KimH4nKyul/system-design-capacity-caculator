import React from 'react';
import { Card, SelectField } from '../../molecules';
import { CalculatorInputs } from '../../../types/calculator';
import { PEAK_PERCENTAGE_OPTIONS, PEAK_DURATION_OPTIONS } from '../../../constants/calculator';

interface PeakAnalysisSectionProps {
  inputs: CalculatorInputs;
  onInputChange: <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => void;
}

export const PeakAnalysisSection: React.FC<PeakAnalysisSectionProps> = ({
  inputs,
  onInputChange
}) => {
  return (
    <Card title="Peak Time Analysis" icon="⏰" iconColor="warning">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <SelectField
          label="Peak Traffic Percentage (%)"
          value={inputs.peakPercentage}
          onChange={(e) => onInputChange('peakPercentage', Number(e.target.value))}
          options={PEAK_PERCENTAGE_OPTIONS}
        />
        
        <SelectField
          label="Peak Duration (hours)"
          value={inputs.peakHours}
          onChange={(e) => onInputChange('peakHours', Number(e.target.value))}
          options={PEAK_DURATION_OPTIONS}
        />
      </div>
    </Card>
  );
};
