import { createContext, useContext } from 'react';

export interface CalculatorContextValue {
  availableYears: string[];
  availableServices: Map<number, string>;
  isLoading: boolean;
  isError: boolean;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedServices: Map<number, string>;
  setSelectedServices: React.Dispatch<React.SetStateAction<Map<number, string>>>;
}

export const CalculatorContext = createContext<CalculatorContextValue>({
  availableYears: [],
  availableServices: new Map(),
  isLoading: true,
  isError: false,
  selectedYear: '',
  setSelectedYear: () => null,
  selectedServices: new Map(),
  setSelectedServices: () => null,
});

export const useCalculator = () => useContext(CalculatorContext);
