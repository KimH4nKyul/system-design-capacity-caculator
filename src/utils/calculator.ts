import { Calculations } from '../types/calculator';
import { DATA_TYPES } from '../constants/calculator';

export const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

export const getDataTypeSize = (selectedDataType: string): number => {
  const selectedType = DATA_TYPES.find(type => type.id === selectedDataType);
  return selectedType ? selectedType.size : 4;
};

export const getDataTypeName = (selectedDataType: string): string => {
  const selectedType = DATA_TYPES.find(type => type.id === selectedDataType);
  return selectedType ? selectedType.name : 'Unknown';
};

export const calculateCapacity = (
  dailyTransactions: number,
  transactionsPerUser: number,
  peakPercentage: number,
  peakHours: number,
  selectedDataType: string,
  dataCount: number
): Calculations => {
  const dataTypeSize = getDataTypeSize(selectedDataType);
  
  // Core calculation: 1M/day ≈ 12/sec
  const basePerSecond = Math.round((dailyTransactions / 86400) * 10) / 10;
  const usersPerDay = Math.round(dailyTransactions / transactionsPerUser);
  
  // Peak calculations
  const peakTransactions = (dailyTransactions * peakPercentage) / 100;
  const peakPerSecond = Math.round((peakTransactions / (peakHours * 3600)) * 10) / 10;
  
  // Data capacity calculations
  const totalDataSize = (dataCount * dataTypeSize) / (1024 * 1024); // MB
  const totalDataSizeGB = totalDataSize / 1024;

  return {
    basePerSecond,
    usersPerDay,
    peakPerSecond,
    peakTransactions,
    totalDataSize: Math.round(totalDataSize * 100) / 100,
    totalDataSizeGB: Math.round(totalDataSizeGB * 100) / 100
  };
};
