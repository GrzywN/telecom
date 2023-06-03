import { Calculator } from './features/calculator';
import { Hero } from './features/hero-section/components/hero/hero';
import { DefaultLayout } from './layouts/default-layout/default-layout';
import { ReactQueryProvider } from './react-query';

export function App() {
  return (
    <ReactQueryProvider>
      <DefaultLayout>
        <Hero />
        <Calculator />
      </DefaultLayout>
    </ReactQueryProvider>
  );
}

export default App;
