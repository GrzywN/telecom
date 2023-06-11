import { Offers } from '@telecom/calculator/types';

export const availableOffers: Offers = Object.freeze({
  years: {
    '2023': {
      products: [
        {
          productId: 1,
          name: 'Internet',
          price: 39,
        },
        {
          productId: 2,
          name: 'Television',
          price: 49,
        },
        {
          productId: 3,
          name: 'Telephone subscription',
          price: 29,
        },
        {
          productId: 4,
          name: '4K decoder',
          price: 29,
        },
      ],
      bundles: [
        {
          bundleId: 1,
          productIds: [1, 2],
          name: 'Internet + Television',
          price: 79,
          extras: [4],
        },
        {
          bundleId: 2,
          productIds: [1, 3],
          name: 'Internet + Telephone subscription',
          price: 64,
        },
      ],
    },
    '2024': {
      products: [
        {
          productId: 1,
          name: 'Internet',
          price: 49,
        },
        {
          productId: 2,
          name: 'Television',
          price: 49,
        },
        {
          productId: 3,
          name: 'Telephone subscription',
          price: 29,
        },
        {
          productId: 4,
          name: '4K decoder',
          price: 29,
        },
      ],
      bundles: [
        {
          bundleId: 1,
          productIds: [1, 2],
          name: 'Internet + Television',
          price: 89,
          extras: [4],
        },
        {
          bundleId: 2,
          productIds: [1, 3],
          name: 'Internet + Telephone subscription',
          price: 64,
        },
      ],
    },
    '2025': {
      products: [
        {
          productId: 1,
          name: 'Internet',
          price: 59,
        },
        {
          productId: 2,
          name: 'Television',
          price: 59,
        },
        {
          productId: 3,
          name: 'Telephone subscription',
          price: 29,
        },
        {
          productId: 4,
          name: '4K decoder',
          price: 29,
        },
      ],
      bundles: [
        {
          bundleId: 1,
          productIds: [1, 2],
          name: 'Internet + Television',
          price: 99,
          extras: [4],
        },
        {
          bundleId: 2,
          productIds: [1, 3],
          name: 'Internet + Telephone subscription',
          price: 64,
        },
      ],
    },
  },
});
