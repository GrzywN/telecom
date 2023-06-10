import { Link } from 'react-router-dom';

import { useCalculator } from '../../context/calculator-context';
import styles from './summary.module.css';

export function Summary() {
  const { isLoading, selectedYear, selectedServices } = useCalculator();

  return (
    <div aria-busy={isLoading}>
      <Link to="/" className={styles['go-back-button']}>
        ← Go Back
      </Link>
      <p>You choosed year: {selectedYear}</p>
      <div>
        And services:
        <ul>
          {Array.from(selectedServices.values()).map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Summary;
