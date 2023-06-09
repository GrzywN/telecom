import type { BundleInfo } from './input';

export interface BundleOutputInfo extends BundleInfo {
  priceDiff: number;
  hasExtras: boolean;
  extras: number[];
}

export interface OutputOffers {
  initialOffer: {
    productIds: number[];
    price: number;
  };
  bundleOffers: BundleOutputInfo[];
}
