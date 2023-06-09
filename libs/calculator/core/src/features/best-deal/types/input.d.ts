export interface ProductInfo {
  productId: number;
  name: string;
  price: number;
}

export interface BundleInfo {
  bundleId: number;
  productIds: number[];
  name: string;
  price: number;
  extras?: number[];
}

export interface YearData {
  products: ProductInfo[];
  bundles: BundleInfo[];
}

export interface Offers {
  years: { [year: string]: YearData };
}

export interface SelectedServicesData {
  year: string;
  products: number[];
}
