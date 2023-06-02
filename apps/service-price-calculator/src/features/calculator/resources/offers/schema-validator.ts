import { z } from 'zod';

export const OffersSchema = z.array(
  z.object({
    year: z.number(),
    offers: z.array(
      z.object({
        id: z.string(),
        purchased: z.array(z.string()),
        extra: z.array(z.string()).optional(),
        price: z.number(),
      })
    ),
  })
);

export const parseOffers = (data: unknown) => OffersSchema.parse(data);

export type Offers = z.infer<typeof OffersSchema>;
