import { render } from '@testing-library/react';

import CalculatorCore from './calculator-core';

describe('CalculatorCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CalculatorCore />);
    expect(baseElement).toBeTruthy();
  });
});
