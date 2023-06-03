import { Offers } from './schema-validator';

export function getYears(data: Offers): string[] {
  const sortedOffers = data.map((yearlyData) => String(yearlyData.year));
  sortedOffers.sort();

  return sortedOffers;
}

export function getServices(data: Offers): string[] {
  const services = new Set<string>();

  for (const yearlyData of data) {
    for (const offer of yearlyData.offers) {
      for (const product of offer.purchased) {
        services.add(product);
      }

      if (offer.extra) {
        for (const product of offer.extra) {
          services.add(product);
        }
      }
    }
  }

  const sortedServices = Array.from(services);
  sortedServices.sort();

  return sortedServices;
}
