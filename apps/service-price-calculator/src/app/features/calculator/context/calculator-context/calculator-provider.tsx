import { getServices, getYears } from '@telecom/calculator/fetch';
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
  const [availableServices, setAvailableServices] = useState<{ [id: number]: string }>({});

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedServices, setSelectedServices] = useState<{ [id: number]: string }>({});

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
