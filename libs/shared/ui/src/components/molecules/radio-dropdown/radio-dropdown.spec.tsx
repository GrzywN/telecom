import { render } from '@testing-library/react';

import RadioDropdown from './radio-dropdown';

describe('RadioDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RadioDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
