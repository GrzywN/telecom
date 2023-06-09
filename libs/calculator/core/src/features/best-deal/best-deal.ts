import type { BundleInfo, Offers, ProductInfo, SelectedServicesData, YearData } from './types/input';
import type { OutputOffers } from './types/output';
import { outputSortingFn } from './utils/bundle-sorting';
import { VALIDATOR_PRODUCT_ID_DOES_NOT_EXIST, VALIDATOR_YEAR_DOES_NOT_EXIST } from './utils/error-messages';

export function findBestDealMightThrow(selectedServicesData: SelectedServicesData, availableOffers: Offers) {
  validateUserDataMightThrow(selectedServicesData, availableOffers);

  const { year, products: selectedProducts } = selectedServicesData;
  const { bundles, products: allProducts } = getOffersForYear(availableOffers, year);

  const originalPrice = calculatePriceWithoutBundles(selectedProducts, allProducts);
  const matchingBundles = filterBundlesWithSelectedProducts(selectedProducts, bundles);
  const worthyBundles = filterWorthyBundles(matchingBundles, originalPrice);
  const output = prepareSortedOutput(selectedProducts, originalPrice, worthyBundles);

  return output;
}

export function validateUserDataMightThrow(selectedServicesData: SelectedServicesData, availableOffers: Offers): void {
  const yearDoesNotExist = availableOffers.years[selectedServicesData.year] == null;

  if (yearDoesNotExist) {
    throw new Error(VALIDATOR_YEAR_DOES_NOT_EXIST);
  }

  const { products } = getOffersForYear(availableOffers, selectedServicesData.year);
  const allProductIds = products.map((product) => product.productId);

  for (const productId of selectedServicesData.products) {
    const productIdDoesNotExist = !allProductIds.includes(productId);

    if (productIdDoesNotExist) {
      throw new Error(VALIDATOR_PRODUCT_ID_DOES_NOT_EXIST);
    }
  }
}

export function getOffersForYear(availableOffers: Offers, year: string): YearData {
  return availableOffers.years[year];
}

export function calculatePriceWithoutBundles(selectedProducts: number[], products: ProductInfo[]): number {
  const productsWithServices = products.filter((product) => {
    const { productId } = product;

    return selectedProducts.includes(productId);
  });

  const price = productsWithServices.reduce((sum, product) => sum + product.price, 0);
  return price;
}

export function filterBundlesWithSelectedProducts(selectedProducts: number[], bundles: BundleInfo[]): BundleInfo[] {
  const bundlesWithServices = bundles.filter((bundle) => {
    const { productIds } = bundle;

    return selectedProducts.every((selectedProduct) => productIds.includes(selectedProduct));
  });

  return bundlesWithServices;
}

export function filterWorthyBundles(bundles: BundleInfo[], originalPrice: number): BundleInfo[] {
  const bundlesWhichAreCheaper = bundles.filter((bundle) => bundle.price <= originalPrice);

  return bundlesWhichAreCheaper;
}

export function prepareSortedOutput(selectedProducts: number[], originalPrice: number, bundles: BundleInfo[]): OutputOffers {
  const output: OutputOffers = {
    initialOffer: {
      productIds: selectedProducts,
      price: originalPrice,
    },
    bundleOffers: [],
  };

  for (const bundle of bundles) {
    const hasExtras = Boolean(bundle && bundle.extras && bundle.extras.length > 0);
    const priceDiff = Math.abs(originalPrice - bundle.price);

    output.bundleOffers.push({
      ...bundle,
      priceDiff,
      hasExtras,
      extras: bundle.extras || [],
    });
  }

  output.bundleOffers.sort(outputSortingFn);

  return output;
}

export default findBestDealMightThrow;
