export interface Calculations {
  basePerSecond: number;
  usersPerDay: number;
  peakPerSecond: number;
  peakTransactions: number;
  totalDataSize: number;
  totalDataSizeGB: number;
}

export interface DataType {
  id: string;
  name: string;
  size: number;
}

export interface PeakTimeOption {
  value: number;
  label: string;
}

export interface CalculatorInputs {
  dailyTransactions: number;
  transactionsPerUser: number;
  peakPercentage: number;
  peakHours: number;
  selectedDataType: string;
  dataCount: number;
}
