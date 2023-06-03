import { render } from '@testing-library/react';

import CalculatorRouter from './calculator-router';

describe('CalculatorRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalculatorRouter />);
    expect(baseElement).toBeTruthy();
  });
});
