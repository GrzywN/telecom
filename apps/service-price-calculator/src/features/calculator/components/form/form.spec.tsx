import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CalculatorProvider } from '../../context/calculator-context';

import Form from './form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <CalculatorProvider>
        <BrowserRouter>
          <Form />
        </BrowserRouter>
      </CalculatorProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
