import { Offers, OutputOffers, findBestDealMightThrow } from '@telecom/calculator/core';
import { SelectedServices, SelectedServicesData } from '@telecom/calculator/types';
import { useEffect, useState } from 'react';

export function useBestDeal(year: string, selectedServices: SelectedServices, offersData: Offers | null) {
  const [bestDeal, setBestDeal] = useState<OutputOffers>();
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchBestDeal = async () => {
      setIsLoading(true);
      if (offersData == null) return;

      try {
        const products = Object.keys(selectedServices).map((id) => Number(id));
        const selectedServicesData: SelectedServicesData = {
          year,
          products,
        };
        const availableOffers = offersData;

        const output = findBestDealMightThrow(selectedServicesData, availableOffers);

        setBestDeal(output);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }

        setError('Something went wrong while fetching the best deal!');
      }

      setIsLoading(false);
    };
    fetchBestDeal();
  }, [offersData, selectedServices, year]);

  return { bestDeal, error, isLoading };
}
