import { useQuery } from '@tanstack/react-query';
import { fetchOffers } from '@telecom/calculator/fetch';

export function useOffersQuery() {
  return useQuery(['offers'], fetchOffers);
}

export default useOffersQuery;
