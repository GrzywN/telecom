import { render } from '@testing-library/react';

import SummaryError from './summary-error';

describe('SummaryError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SummaryError />);
    expect(baseElement).toBeTruthy();
  });
});
