import { Button } from '@telecom/shared/ui';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';
import { SelectServices } from '../select-services/select-services';
import { SelectYear } from '../select-year/select-year';

export function Form() {
  const { isLoading } = useCalculator();

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      navigate(SUMMARY_PATH);
    },
    [navigate]
  );

  return (
    <form onSubmit={handleSubmit}>
      <SelectYear />
      <SelectServices />
      <Button isLoading={isLoading}>Get the best bank for your buck</Button>
    </form>
  );
}

export default Form;
