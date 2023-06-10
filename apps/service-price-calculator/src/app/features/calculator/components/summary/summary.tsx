import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { useCalculator } from '../../context/calculator-context';
import styles from './summary.module.css';

export function Summary() {
  const { selectedYear, setSelectedYear, selectedServices, setSelectedServices } = useCalculator();
  const [savedSelectedYear] = useLocalStorage('selectedYear', '');
  const [savedSelectedServices] = useLocalStorage('selectedServices', {});

  useEffect(() => {
    if (!selectedYear || !selectedServices) {
      if (!savedSelectedYear || !savedSelectedServices) {
        throw new Error('Something went wrong! Go back to the home page.');
      }

      setSelectedYear(savedSelectedYear);
      setSelectedServices(savedSelectedServices);
    }
  });

  return (
    <div>
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
