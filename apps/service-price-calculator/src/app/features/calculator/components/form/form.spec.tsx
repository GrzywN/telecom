import { closeConnectionToOffersServer, listenToOffersServer } from '@telecom/shared/testing';
import { render } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ReactQueryProvider } from '../../../../react-query';
import { CalculatorProvider } from '../../context/calculator-context';
import { Form } from './form';

describe('Form', () => {
  beforeAll(listenToOffersServer);

  afterAll(closeConnectionToOffersServer);

  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactQueryProvider>
        <CalculatorProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Form />} path="/" />
              <Route element={null} path="/summary" />
            </Routes>
          </BrowserRouter>
        </CalculatorProvider>
      </ReactQueryProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
