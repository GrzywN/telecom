import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { useCalculator } from '../../context/calculator-context';
import { useBestDeal } from '../../hooks/use-best-deal/use-best-deal';
import SummaryError from '../summary-error/summary-error';
import styles from './summary.module.css';

export function Summary() {
  const { offersData, selectedYear, setSelectedYear, selectedServices, setSelectedServices } = useCalculator();
  const [savedSelectedYear] = useLocalStorage('selectedYear', '');
  const [savedSelectedServices] = useLocalStorage('selectedServices', {});
  const { bestDeal, isLoading, error } = useBestDeal(selectedYear, selectedServices, offersData);

  useEffect(() => {
    if (!selectedYear || !selectedServices) {
      if (!savedSelectedYear || !savedSelectedServices) {
        throw new Error('Something went wrong! Go back to the home page.');
      }

      setSelectedYear(savedSelectedYear);
      setSelectedServices(savedSelectedServices);
    }
  });

  console.log(bestDeal);

  if (error) {
    return <SummaryError />;
  }

  return (
    <div aria-busy={isLoading}>
      <Link to="/" className={styles['go-back-button']}>
        ← Go Back
      </Link>
      <p>You choosed year: {selectedYear}</p>
      <div>
        And services:
        <ul>
          {Array.from(Object.values(selectedServices)).map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Summary;
