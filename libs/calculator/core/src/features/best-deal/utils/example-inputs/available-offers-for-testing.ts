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
          name: 'Internet + Something non-existent',
          price: 999,
        },
        {
          bundleId: 3,
          productIds: [1, 2],
          name: 'Internet + Television, but not worth',
          price: 99999,
          extras: [4],
        },
      ],
    },
  },
});

export const validYear = '2023';

export const validProducts = [1, 2];

export const invalidYear = '9999';

export const invalidProducts = [64, 999];

export const validOneProductOtherInvalid = [1, 999];

export const bundleWithoutAllServices = availableOffers.years[validYear].bundles;

export const worthyBundle = availableOffers.years[validYear].bundles[0];

export const notWorthyBundle = availableOffers.years[validYear].bundles[2];

export const theCheapestBundleId = availableOffers.years[validYear].bundles[0].bundleId;

export const theMostExpensiveBundleId = availableOffers.years[validYear].bundles[2].bundleId;
