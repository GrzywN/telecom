import { Offers } from './schema-validator';

export function getYears(data: Offers): string[] {
  const sortedOffers = Object.keys(data.years);
  sortedOffers.sort();

  return sortedOffers;
}

export function getServices(data: Offers): number[] {
  const services = new Set<number>();

  for (const year in data.years) {
    for (const product of data.years[year].products) {
      services.add(product.productId);
    }
  }

  const sortedServices = Array.from(services);
  sortedServices.sort();

  return sortedServices;
}
