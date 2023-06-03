import { Hero } from './components/hero/hero';
import { Layout } from './components/layout/layout';
import { Calculator } from './features/calculator';
import { ReactQueryProvider } from './react-query';

export function App() {
  return (
    <ReactQueryProvider>
      <Layout>
        <Hero />
        <Calculator />
      </Layout>
    </ReactQueryProvider>
  );
}

export default App;
