import { useQuery } from '@tanstack/react-query';
import { fetchOffers, getServices, getYears } from '../../resources/offers';
import { FormError } from '../form-error/form-error';
import { Form } from '../form/form';
import { TitleAndSubtitle } from '../title-and-subtitle/title-and-subtitle';

export function Calculator() {
  const { isError, isLoading, data } = useQuery(['offers'], fetchOffers);

  let years: string[] = [];
  let services: string[] = [];

  if (data) {
    years = getYears(data);
    services = getServices(data);
  }

  return (
    <section>
      <article>
        <TitleAndSubtitle />
        {isError ? (
          <FormError />
        ) : (
          <Form years={years} services={services} isLoading={isLoading} />
        )}
      </article>
    </section>
  );
}

export default Calculator;
