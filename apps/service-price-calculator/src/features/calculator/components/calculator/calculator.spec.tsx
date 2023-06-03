import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Calculator from './calculator';

const server = setupServer(
  rest.get('offers.json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          year: 2023,
          offers: [
            {
              id: '1',
              purchased: ['Internet'],
              price: 39,
            },
            {
              id: '2',
              purchased: ['Television'],
              price: 49,
            },
            {
              id: '3',
              purchased: ['Phone subscription'],
              price: 29,
            },
            {
              id: '4',
              purchased: ['4K Decoder'],
              price: 29,
            },
          ],
        },
      ])
    );
  })
);

const queryClient = new QueryClient();

describe('Calculator', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={queryClient}>
        <Calculator />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
