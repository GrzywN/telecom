import { closeConnectionToOffersServer, listenToOffersServer } from '@telecom/shared/testing';
import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {
  beforeAll(listenToOffersServer);

  afterAll(closeConnectionToOffersServer);
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
