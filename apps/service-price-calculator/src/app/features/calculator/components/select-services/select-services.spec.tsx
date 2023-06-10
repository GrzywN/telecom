import { render } from '@testing-library/react';

import SelectServices from './select-services';

describe('SelectServices', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectServices />);
    expect(baseElement).toBeTruthy();
  });
});
