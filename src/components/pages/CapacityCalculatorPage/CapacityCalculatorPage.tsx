import React from 'react';
import { CalculatorTemplate } from '../../templates';
import { Text } from '../../atoms';
import {
  TransactionScaleSection,
  PeakAnalysisSection,
  DataCapacitySection,
  ThroughputResults,
  ScalingReference,
  StorageCapacity,
  BottleneckChecklist
} from '../../organisms';
import { useCalculator } from '../../../hooks/useCalculator';

export const CapacityCalculatorPage: React.FC = () => {
  const { inputs, calculations, updateInput } = useCalculator();

  const header = (
    <>
      <Text variant="h1" align="center" style={{ marginBottom: '16px' }}>
        📊 System Design Capacity Calculator
      </Text>
      <Text 
        variant="body" 
        color="secondary" 
        align="center" 
        style={{ maxWidth: '600px', margin: '0 auto' }}
      >
        Back-of-the-envelope calculations for system capacity planning. 
        Based on the "1 million rule" - quick approximations for real-world system design.
      </Text>
    </>
  );

  const inputSection = (
    <>
      <TransactionScaleSection 
        inputs={inputs} 
        onInputChange={updateInput} 
      />
      <PeakAnalysisSection 
        inputs={inputs} 
        onInputChange={updateInput} 
      />
      <DataCapacitySection 
        inputs={inputs} 
        onInputChange={updateInput} 
      />
    </>
  );

  const resultsSection = (
    <>
      <ThroughputResults 
        calculations={calculations} 
        inputs={inputs} 
      />
      <ScalingReference />
      <StorageCapacity 
        calculations={calculations} 
        inputs={inputs} 
      />
      <BottleneckChecklist />
    </>
  );

  const footer = (
    <>
      <p>Based on "Programming Pearls" back-of-the-envelope calculation principles</p>
      <p style={{ marginTop: '4px' }}>
        Remember: These are approximations for initial planning, not precise engineering specifications
      </p>
    </>
  );

  return (
    <CalculatorTemplate
      header={header}
      inputSection={inputSection}
      resultsSection={resultsSection}
      footer={footer}
    />
  );
};
