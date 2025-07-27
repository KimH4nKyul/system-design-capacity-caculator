import { useState, useEffect } from 'react';
import { Calculations, CalculatorInputs } from '../types/calculator';
import { calculateCapacity } from '../utils/calculator';
import { DEFAULT_VALUES } from '../constants/calculator';

export const useCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    dailyTransactions: DEFAULT_VALUES.DAILY_TRANSACTIONS,
    transactionsPerUser: DEFAULT_VALUES.TRANSACTIONS_PER_USER,
    peakPercentage: DEFAULT_VALUES.PEAK_PERCENTAGE,
    peakHours: DEFAULT_VALUES.PEAK_HOURS,
    selectedDataType: DEFAULT_VALUES.SELECTED_DATA_TYPE,
    dataCount: DEFAULT_VALUES.DATA_COUNT
  });

  const [calculations, setCalculations] = useState<Calculations>({
    basePerSecond: 0,
    usersPerDay: 0,
    peakPerSecond: 0,
    peakTransactions: 0,
    totalDataSize: 0,
    totalDataSizeGB: 0
  });

  useEffect(() => {
    const newCalculations = calculateCapacity(
      inputs.dailyTransactions,
      inputs.transactionsPerUser,
      inputs.peakPercentage,
      inputs.peakHours,
      inputs.selectedDataType,
      inputs.dataCount
    );
    setCalculations(newCalculations);
  }, [inputs]);

  const updateInput = <K extends keyof CalculatorInputs>(
    key: K,
    value: CalculatorInputs[K]
  ) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return {
    inputs,
    calculations,
    updateInput
  };
};
