import { BrowserRouter } from 'react-router-dom';

import { CalculatorProvider } from '../../context/calculator-context';
import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';
import { CalculatorRouter } from '../calculator-router/calculator-router';
import { FormError } from '../form-error/form-error';
import { Form } from '../form/form';
import { SummaryError } from '../summary-error/summary-error';
import { Summary } from '../summary/summary';
import { TitleAndSubtitle } from '../title-and-subtitle/title-and-subtitle';

export function Calculator() {
  const { isError } = useCalculator();

  const firstStep = isError ? <FormError /> : <Form />;
  const secondStep = isError ? <SummaryError /> : <Summary />;

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
