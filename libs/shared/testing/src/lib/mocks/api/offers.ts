import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { offers } from '../../data/offers.json';

export const server = setupServer(
  rest.get('offers.json', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(offers));
  })
);

export const listenToOffersServer = () => server.listen();

export const closeConnectionToOffersServer = () => server.close();

export default server;
