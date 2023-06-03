import { render } from '@testing-library/react';

import { TitleAndSubtitle } from './title-and-subtitle';

describe('TitleAndSubtitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TitleAndSubtitle />);
    expect(baseElement).toBeTruthy();
  });
});
