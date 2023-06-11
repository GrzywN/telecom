import { Offers } from '@telecom/calculator/fetch';
import { AvailableServices, SelectedServices } from '@telecom/calculator/types';
import { createContext, useContext } from 'react';

export interface CalculatorContextValue {
  offersData: Offers | null;
  availableYears: string[];
  availableServices: AvailableServices;
  isLoading: boolean;
  isError: boolean;
  selectedYear: string;
  setSelectedYear: React.Dispatch<React.SetStateAction<string>>;
  selectedServices: SelectedServices;
  setSelectedServices: React.Dispatch<React.SetStateAction<SelectedServices>>;
}

export const CalculatorContext = createContext<CalculatorContextValue>({
  offersData: null,
  availableYears: [],
  availableServices: {},
  isLoading: true,
  isError: false,
  selectedYear: '',
  setSelectedYear: () => null,
  selectedServices: {},
  setSelectedServices: () => null,
});

export const useCalculator = () => useContext(CalculatorContext);
