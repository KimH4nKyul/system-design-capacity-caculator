import { DataType, PeakTimeOption } from '../types/calculator';

export const DATA_TYPES: DataType[] = [
  { id: 'int32', name: 'Int32', size: 4 },
  { id: 'int64', name: 'Int64', size: 8 },
  { id: 'float', name: 'Float', size: 4 },
  { id: 'double', name: 'Double', size: 8 },
  { id: 'boolean', name: 'Boolean (JS)', size: 4 },
  { id: 'utf8_en', name: 'UTF-8 Char (EN)', size: 1 },
  { id: 'utf8_multi', name: 'UTF-8 Char (Multi)', size: 3 }
];

export const PEAK_PERCENTAGE_OPTIONS: PeakTimeOption[] = [
  { value: 10, label: '10% (Standard peak)' },
  { value: 20, label: '20% (High peak)' },
  { value: 30, label: '30% (Extreme peak)' },
  { value: 50, label: '50% (Flash sale level)' }
];

export const PEAK_DURATION_OPTIONS: PeakTimeOption[] = [
  { value: 1, label: '1 hour' },
  { value: 2, label: '2 hours' },
  { value: 3, label: '3 hours' },
  { value: 6, label: '6 hours' }
];

export const SCALING_REFERENCE = [
  { scale: '1M/day', tps: '~12 TPS' },
  { scale: '10M/day', tps: '~120 TPS' },
  { scale: '100M/day', tps: '~1,200 TPS' },
  { scale: '1B/day', tps: '~12,000 TPS' }
];

export const BOTTLENECK_CHECKLIST = [
  'Database connection pool limits',
  'Disk I/O throughput capacity',
  'Network bandwidth constraints',
  'Load balancer configuration',
  'Third-party API rate limits',
  'Memory allocation and GC pressure',
  'CPU-intensive operations (crypto, compression)'
];

export const DEFAULT_VALUES = {
  DAILY_TRANSACTIONS: 1000000,
  TRANSACTIONS_PER_USER: 50,
  PEAK_PERCENTAGE: 10,
  PEAK_HOURS: 1,
  SELECTED_DATA_TYPE: 'int32',
  DATA_COUNT: 1000000
};
