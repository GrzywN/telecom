import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Hero } from './components/hero/hero';
import { Layout } from './components/layout/layout';
import { Calculator } from './features/calculator';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Hero />
        <Calculator />
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
