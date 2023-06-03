import axios from 'axios';

import { Offers, parseOffers } from './schema-validator';

export async function fetchOffers(): Promise<Offers> {
  const response = await axios.get('offers.json');
  const offers = response.data;

  // Testing loading state
  const parsedOffers = await new Promise<Offers>((resolve) => {
    setTimeout(() => {
      resolve(parseOffers(offers));
    }, 2000);
  });

  // const parsedOffers = parseOffers(offers);

  return parsedOffers;
}
