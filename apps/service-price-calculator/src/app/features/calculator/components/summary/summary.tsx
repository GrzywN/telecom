import { useCalculator } from '../../context/calculator-context';

export function Summary() {
  const { isLoading, selectedYear, selectedServices } = useCalculator();

  return (
    <div aria-busy={isLoading}>
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
