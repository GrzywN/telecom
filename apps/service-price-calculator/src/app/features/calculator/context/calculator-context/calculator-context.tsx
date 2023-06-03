import { createContext, useContext } from 'react';

export interface CalculatorContextValue {
  availableYears: string[];
  availableServices: string[];
  isLoading: boolean;
  isError: boolean;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedServices: string[];
  setSelectedServices: React.Dispatch<React.SetStateAction<string[]>>;
}

export const CalculatorContext = createContext<CalculatorContextValue>({
  availableYears: [],
  availableServices: [],
  isLoading: true,
  isError: false,
  selectedYear: '',
  setSelectedYear: () => null,
  selectedServices: [],
  setSelectedServices: () => null,
});

export const useCalculator = () => useContext(CalculatorContext);
