import { Button } from '@telecom/shared/ui';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';

import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';
import { SelectServices } from '../select-services/select-services';
import { SelectYear } from '../select-year/select-year';
import styles from './form.module.css';

export function Form() {
  const { isLoading, selectedYear, selectedServices } = useCalculator();
  const setSavedSelectedYear = useLocalStorage('selectedYear', '')[1];
  const setSavedSelectedServices = useLocalStorage('selectedServices', {})[1];

  const [didUserSubmit, setDidUserSubmit] = useState(false);
  const didUserSelectYear = Boolean(selectedYear);
  const didUserSelectServices = Object.keys(selectedServices).length > 0;

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (didUserSelectYear && didUserSelectServices) {
      setSavedSelectedYear(selectedYear);
      setSavedSelectedServices(selectedServices);
      navigate(SUMMARY_PATH);
    } else {
      setDidUserSubmit(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset className={styles['field-with-validation']}>
        <SelectYear />
        <small className={styles['validation-text']}>{didUserSubmit && !didUserSelectYear && 'This field is required'}</small>
      </fieldset>
      <fieldset className={styles['field-with-validation']}>
        <SelectServices />
        <small className={styles['validation-text']}>{didUserSubmit && !didUserSelectServices && 'This field is required'}</small>
      </fieldset>
      <Button isLoading={isLoading}>Get the best bank for your buck</Button>
    </form>
  );
}

export default Form;
