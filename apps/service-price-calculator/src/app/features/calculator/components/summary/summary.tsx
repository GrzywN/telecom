import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { useCalculator } from '../../context/calculator-context';
import { useBestDeal } from '../../hooks/use-best-deal/use-best-deal';
import SummaryError from '../summary-error/summary-error';
import styles from './summary.module.css';

export function Summary() {
  const { offersData, selectedYear, setSelectedYear, selectedServices, setSelectedServices, availableServices } = useCalculator();
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

  if (error) {
    return <SummaryError />;
  }

  return (
    <>
      <div>
        <Link to="/" className={styles['go-back-button']}>
          ← Go Back
        </Link>
        {isLoading ? (
          <h3 aria-busy={isLoading}>We are currently preparing the best offers for you</h3>
        ) : (
          <h3>Here are the deals for you, sorted from best to worst.</h3>
        )}
      </div>
      <figure>
        <table role="grid">
          <thead>
            <tr>
              <th scope="col">Bundle name</th>
              <th scope="col">Price</th>
              <th scope="col">Save</th>
              <th scope="col">Products</th>
              <th scope="col">For free</th>
              <th scope="col">Buy now!</th>
            </tr>
          </thead>
          <tbody>
            {bestDeal?.bundleOffers.map((bundle) => {
              const { bundleId, name, price, priceDiff, productIds, extras, originalPrice } = bundle;
              const howMuchDoYouSave = Math.round((priceDiff / originalPrice) * 100);

              return (
                <tr key={bundleId}>
                  <th scope="row">{name}</th>
                  <td>{price}</td>
                  <td>{howMuchDoYouSave}%</td>
                  <td>{[...productIds, ...extras].map((id) => availableServices[id]).join(', ')}</td>
                  <td>{extras.map((id) => availableServices[id]).join(', ') || 'No extras'}</td>
                  <td>
                    <button type="button" className={styles['table-button']}>
                      I will buy this one!
                    </button>
                  </td>
                </tr>
              );
            })}
            <tr>
              <th scope="row">Offer without bundle</th>
              <td>{bestDeal?.initialOffer.price}</td>
              <td>N/A</td>
              <td>{bestDeal?.initialOffer.productIds.map((id) => availableServices[id]).join(', ')}</td>
              <td>No extras</td>
              <td>
                <button type="button" className={styles['table-button']}>
                  I will buy this one!
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
    </>
  );
}

export default Summary;
