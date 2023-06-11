import { closeConnectionToOffersServer, listenToOffersServer } from '@telecom/shared/testing';
import { render } from '@testing-library/react';

import { ReactQueryProvider } from '../../../../react-query';
import { Calculator } from './calculator';

describe('Calculator', () => {
  beforeAll(listenToOffersServer);

  afterAll(closeConnectionToOffersServer);
  it('should render successfully', () => {
    const { baseElement } = render(
      <ReactQueryProvider>
        <Calculator />
      </ReactQueryProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
