import { render } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ReactQueryProvider } from '../../../../react-query';
import { CalculatorProvider } from '../../context/calculator-context';
import { Summary } from './summary';

const server = setupServer(
  rest.get('offers.json', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
              {
                productId: 3,
                name: 'Telephone subscription',
                price: 29,
              },
              {
                productId: 4,
                name: '4K decoder',
                price: 29,
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
                name: 'Internet + Telephone subscription',
                price: 64,
              },
            ],
          },
          '2024': {
            products: [
              {
                productId: 1,
                name: 'Internet',
                price: 49,
              },
              {
                productId: 2,
                name: 'Television',
                price: 49,
              },
              {
                productId: 3,
                name: 'Telephone subscription',
                price: 29,
              },
              {
                productId: 4,
                name: '4K decoder',
                price: 29,
              },
            ],
            bundles: [
              {
                bundleId: 1,
                productIds: [1, 2],
                name: 'Internet + Television',
                price: 89,
                extras: [4],
              },
              {
                bundleId: 2,
                productIds: [1, 3],
                name: 'Internet + Telephone subscription',
                price: 64,
              },
            ],
          },
          '2025': {
            products: [
              {
                productId: 1,
                name: 'Internet',
                price: 59,
              },
              {
                productId: 2,
                name: 'Television',
                price: 59,
              },
              {
                productId: 3,
                name: 'Telephone subscription',
                price: 29,
              },
              {
                productId: 4,
                name: '4K decoder',
                price: 29,
              },
            ],
            bundles: [
              {
                bundleId: 1,
                productIds: [1, 2],
                name: 'Internet + Television',
                price: 99,
                extras: [4],
              },
              {
                bundleId: 2,
                productIds: [1, 3],
                name: 'Internet + Telephone subscription',
                price: 64,
              },
            ],
          },
        },
      })
    );
  })
);

describe('Summary', () => {
  beforeAll(() => server.listen());

  afterAll(() => server.close());

  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactQueryProvider>
        <CalculatorProvider>
          <BrowserRouter>
            <Routes>
              <Route element={null} path="/" />
              <Route element={<Summary />} path="/summary" />
            </Routes>
          </BrowserRouter>
        </CalculatorProvider>
      </ReactQueryProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
