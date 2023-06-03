import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export interface ReactQueryProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function ReactQueryProvider(props: ReactQueryProps) {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
