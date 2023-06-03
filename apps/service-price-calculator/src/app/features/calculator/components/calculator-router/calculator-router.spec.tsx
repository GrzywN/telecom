import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CalculatorRouter from './calculator-router';

describe('CalculatorRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <CalculatorRouter
          firstStepComponent={null}
          secondStepComponent={null}
          secondStepPath={'/summary'}
        />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });
});
