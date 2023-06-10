import { render } from '@testing-library/react';

import SelectYear from './select-year';

describe('SelectYear', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectYear />);
    expect(baseElement).toBeTruthy();
  });
});
