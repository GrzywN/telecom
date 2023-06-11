import type { BundleOutputInfo } from '@telecom/calculator/types';

export function outputSortingFn(a: BundleOutputInfo, b: BundleOutputInfo): number {
  const bothHaveExtras = a.hasExtras && b.hasExtras;

  if (bothHaveExtras) {
    return compareByHowManyExtras(a, b) || compareByPriceDiff(a, b);
  }

  if (a.hasExtras) {
    return 1;
  }

  if (b.hasExtras) {
    return -1;
  }

  return compareByPriceDiff(a, b);
}

function compareByHowManyExtras(a: BundleOutputInfo, b: BundleOutputInfo): number | null {
  if (a.extras.length > b.extras.length) {
    return -1;
  } else if (a.extras.length < b.extras.length) {
    return 1;
  }

  return null;
}

function compareByPriceDiff(a: BundleOutputInfo, b: BundleOutputInfo): number {
  if (a.priceDiff > b.priceDiff) {
    return -1;
  } else if (a.priceDiff < b.priceDiff) {
    return 1;
  }

  return 0;
}

export default outputSortingFn;
