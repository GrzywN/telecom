import {
  calculatePriceWithoutBundles,
  filterBundlesWithSelectedProducts,
  filterWorthyBundles,
  getOffersForYear,
  prepareSortedOutput,
  validateUserDataMightThrow,
} from './best-deal';
import { SelectedServicesData } from './types/input';
import {
  availableOffers,
  invalidProducts,
  invalidYear,
  notWorthyBundle,
  validOneProductOtherInvalid,
  validProducts,
  validYear,
  worthyBundle,
} from './utils/example-inputs/available-offers-for-testing';

describe('calculator-core', () => {
  const allProducts = availableOffers.years[validYear].products;
  const bundles = availableOffers.years[validYear].bundles;

  describe('validateUserDataMightThrow', () => {
    it('should not throw when year and products are correct', () => {
      const selectedServicesData: SelectedServicesData = { year: validYear, products: validProducts };
      const fn = validateUserDataMightThrow.bind(null, selectedServicesData, availableOffers);

      expect(fn).not.toThrow();
    });

    it('should throw when year is invalid', () => {
      const selectedServicesData: SelectedServicesData = { year: invalidYear, products: validProducts };
      const fn = validateUserDataMightThrow.bind(null, selectedServicesData, availableOffers);

      expect(fn).toThrow();
    });

    it('should throw when productId is invalid', () => {
      const selectedServicesData: SelectedServicesData = { year: validYear, products: invalidProducts };
      const fn = validateUserDataMightThrow.bind(null, selectedServicesData, availableOffers);

      expect(fn).toThrow();
    });

    it('should throw when one of productIds is invalid', () => {
      const selectedServicesData: SelectedServicesData = { year: validYear, products: validOneProductOtherInvalid };
      const fn = validateUserDataMightThrow.bind(null, selectedServicesData, availableOffers);

      expect(fn).toThrow();
    });
  });

  describe('getOffersForYear', () => {
    it('should extract offers for given year', () => {
      const { products, bundles } = getOffersForYear(availableOffers, validYear);

      expect(products).toBe(availableOffers.years[validYear].products);
      expect(bundles).toBe(availableOffers.years[validYear].bundles);
    });
  });

  describe('calculatePriceWithoutBundles', () => {
    it('should return a price by summing up prices of individual products', () => {
      const selectedProducts = validProducts;
      const sum = allProducts[0].price + allProducts[1].price;

      const result = calculatePriceWithoutBundles(selectedProducts, allProducts);

      expect(result).toBe(sum);
    });

    it('should return 0 when none of the products is selected', () => {
      const selectedProducts: number[] = [];
      const sum = 0;

      const result = calculatePriceWithoutBundles(selectedProducts, allProducts);

      expect(result).toBe(sum);
    });

    it('should return 0 when selected products do not exist', () => {
      const selectedProducts = invalidProducts;

      const result = calculatePriceWithoutBundles(selectedProducts, allProducts);

      expect(result).toBe(0);
    });
  });

  describe('filterBundlesWithSelectedProducts', () => {
    it('should remove bundle which does not contain all selected products', () => {
      const selectedProducts = validProducts;
      const bundleWithoutAllServices = bundles[1];

      const results = filterBundlesWithSelectedProducts(selectedProducts, bundles);

      for (const result of results) {
        expect(result).not.toBe(bundleWithoutAllServices);
      }
    });

    it('should not filter bundles which have all selected products and other products which were not selected', () => {
      const selectedProducts = [1];
      const howManyBundlesInitially = bundles.length;

      const results = filterBundlesWithSelectedProducts(selectedProducts, bundles);

      expect(results.length).toBe(howManyBundlesInitially);
    });
  });

  describe('filterWorthyBundles', () => {
    it('should return bundles which are cheaper than initial price', () => {
      const results = filterWorthyBundles(bundles, 88);

      expect(results).toContain(worthyBundle);
      expect(results).not.toContain(notWorthyBundle);
    });
  });

  describe('prepareSortedOutput', () => {
    it('should return output with initial offer based on user input', () => {
      const selectedProducts = validProducts;
      const originalPrice = allProducts.reduce((sum, product) => sum + product.price, 0);

      const results = prepareSortedOutput(selectedProducts, originalPrice, bundles);
      const setPrice = results.initialOffer.price;
      const setProductIds = results.initialOffer.productIds;

      expect(setPrice).toBe(originalPrice);
      expect(setProductIds).toBe(selectedProducts);
    });

    it('should calculate price difference properly', () => {
      const selectedProducts = validProducts;
      const originalPrice = allProducts.reduce((sum, product) => sum + product.price, 0);
      const { bundleOffers } = prepareSortedOutput(selectedProducts, originalPrice, bundles);

      const firstBundle = bundleOffers[bundleOffers.length - 2];

      expect(firstBundle.priceDiff).toBe(Math.abs(originalPrice - firstBundle.price));
    });

    it('should return bundles sorted from best to worst', () => {
      const selectedProducts = validProducts;
      const originalPrice = allProducts.reduce((sum, product) => sum + product.price, 0);

      const { bundleOffers } = prepareSortedOutput(selectedProducts, originalPrice, bundles);
      const firstBundle = bundleOffers[bundleOffers.length - 2];
      const secondBundle = bundleOffers[bundleOffers.length - 1];

      const hasMoreExtras = firstBundle.extras.length > secondBundle.extras.length;
      const hasLargerPriceDiff = firstBundle.priceDiff >= secondBundle.priceDiff;

      expect(hasMoreExtras || hasLargerPriceDiff).toBeTruthy;
    });
  });
});
