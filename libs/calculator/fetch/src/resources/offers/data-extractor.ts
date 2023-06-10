import { Offers } from './schema-validator';

export function getYears(data: Offers): string[] {
  const sortedOffers = Object.keys(data.years);
  sortedOffers.sort();

  return sortedOffers;
}

export function getServices(data: Offers): { [id: number]: string } {
  const services: { [id: number]: string } = {};

  for (const year in data.years) {
    for (const product of data.years[year].products) {
      const { productId, name } = product;

      services[productId] = name;
    }
  }

  return services;
}
