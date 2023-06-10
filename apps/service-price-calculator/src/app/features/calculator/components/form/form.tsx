import { Button } from '@telecom/shared/ui';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';
import { SelectServices } from '../select-services/select-services';
import { SelectYear } from '../select-year/select-year';

export function Form() {
  const { isLoading, selectedYear, selectedServices } = useCalculator();
  const setSavedSelectedYear = useLocalStorage('selectedYear', '')[1];
  const setSavedSelectedServices = useLocalStorage('selectedServices', {})[1];

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSavedSelectedYear(selectedYear);
    setSavedSelectedServices(selectedServices);
    navigate(SUMMARY_PATH);
  };

  return (
    <form onSubmit={handleSubmit}>
      <SelectYear />
      <SelectServices />
      <Button isLoading={isLoading}>Get the best bank for your buck</Button>
    </form>
  );
}

export default Form;
