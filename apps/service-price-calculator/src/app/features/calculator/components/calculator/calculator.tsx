import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CalculatorProvider } from '../../context/calculator-context';
import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';
import { CalculatorRouter } from '../calculator-router/calculator-router';
import { TitleAndSubtitle } from '../title-and-subtitle/title-and-subtitle';

const Form = lazy(() => import('../form/form'));
const FormError = lazy(() => import('../form-error/form-error'));
const Summary = lazy(() => import('../summary/summary'));
const SummaryError = lazy(() => import('../summary-error/summary-error'));

export function Calculator() {
  const { isError } = useCalculator();

  const firstStep = <Suspense>{isError ? <FormError /> : <Form />}</Suspense>;
  const secondStep = <Suspense>{isError ? <SummaryError /> : <Summary />}</Suspense>;

  return (
    <section>
      <article>
        <TitleAndSubtitle />
        <CalculatorProvider>
          <BrowserRouter>
            <CalculatorRouter
              firstStepComponent={firstStep}
              secondStepComponent={secondStep}
              secondStepPath={SUMMARY_PATH}
            />
          </BrowserRouter>
        </CalculatorProvider>
      </article>
    </section>
  );
}

export default Calculator;
