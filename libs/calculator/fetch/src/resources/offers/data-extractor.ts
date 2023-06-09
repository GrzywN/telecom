import { Offers } from './schema-validator';

export function getYears(data: Offers): string[] {
  const sortedOffers = Object.keys(data.years);
  sortedOffers.sort();

  return sortedOffers;
}

export function getServices(data: Offers): Map<number, string> {
  const services = new Map<number, string>();

  for (const year in data.years) {
    for (const product of data.years[year].products) {
      const { productId, name } = product;

      services.set(productId, name);
    }
  }

  return services;
}
