import { act, renderHook } from '@testing-library/react';

import useOffersQuery from './use-offers-query';

describe('useOffersQuery', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useOffersQuery());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
