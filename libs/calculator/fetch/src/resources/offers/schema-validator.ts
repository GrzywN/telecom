import { z } from 'zod';

export const ProductSchema = z.object({
  productId: z.number(),
  name: z.string(),
  price: z.number(),
});

export const BundleSchema = z.object({
  bundleId: z.number(),
  productIds: z.array(z.number()),
  name: z.string(),
  price: z.number(),
  extras: z.array(z.number()).optional(),
});

export const YearSchema = z.object({
  products: z.array(ProductSchema),
  bundles: z.array(BundleSchema),
});

export const OffersSchema = z.object({
  years: z.record(YearSchema),
});

export const parseOffers = (data: unknown) => OffersSchema.parse(data);

export type Offers = z.infer<typeof OffersSchema>;

export default OffersSchema;
