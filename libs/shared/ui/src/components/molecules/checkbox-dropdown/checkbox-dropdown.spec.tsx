import { render } from '@testing-library/react';

import CheckboxDropdown from './checkbox-dropdown';

describe('CheckboxDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckboxDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
