import { getServices, getYears } from '@telecom/calculator/fetch';
import { AvailableServices, SelectedServices } from '@telecom/calculator/types';
import { useEffect, useState } from 'react';

import { useOffersQuery } from '../../hooks/queries/use-offers-query/use-offers-query';
import { CalculatorContext } from './calculator-context';

export interface CalculatorProviderProps {
  children: React.ReactNode;
}

export function CalculatorProvider(props: CalculatorProviderProps) {
  const { children } = props;

  const { isError, isLoading, data: offersData, isSuccess } = useOffersQuery();

  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [availableServices, setAvailableServices] = useState<AvailableServices>({});

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({});

  useEffect(() => {
    if (isSuccess && offersData) {
      const availableYears = getYears(offersData);
      const availableServices = getServices(offersData);

      setAvailableYears(availableYears);
      setAvailableServices(availableServices);
    }
  }, [isSuccess, offersData]);

  return (
    <CalculatorContext.Provider
      value={{
        offersData: offersData || null,
        availableYears,
        availableServices,
        isError,
        isLoading,
        selectedYear,
        setSelectedYear,
        selectedServices,
        setSelectedServices,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
}
