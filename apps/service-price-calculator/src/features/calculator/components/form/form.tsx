import {
  getServicesDropdownText,
  getYearDropdownText,
} from '@telecom/calculator/utils';
import { Button, CheckboxDropdown, RadioDropdown } from '@telecom/shared/ui';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';

export function Form() {
  const {
    availableYears,
    availableServices,
    isLoading,
    selectedYear,
    setSelectedYear,
    selectedServices,
    setSelectedServices,
  } = useCalculator();

  const navigate = useNavigate();

  const handleYearChange = useCallback(
    (_: React.ChangeEvent, year: string): void => {
      setSelectedYear(year);
    },
    [setSelectedYear]
  );

  const handleServiceChange = useCallback(
    (_: React.ChangeEvent, service: string): void => {
      const shouldServiceBeRemoved = selectedServices.includes(service);
      let newSelectedServices: string[];

      if (shouldServiceBeRemoved) {
        newSelectedServices = selectedServices.filter((el) => el !== service);
      } else {
        newSelectedServices = [...selectedServices, service];
        newSelectedServices.sort();
      }

      setSelectedServices(newSelectedServices);
    },
    [selectedServices, setSelectedServices]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      navigate(SUMMARY_PATH);
    },
    [navigate]
  );

  return (
    <form onSubmit={handleSubmit}>
      <RadioDropdown
        text={getYearDropdownText(selectedYear)}
        inputName="year"
        isLoading={isLoading}
        options={availableYears}
        optionChangeHandler={handleYearChange}
      />
      <CheckboxDropdown
        text={getServicesDropdownText(selectedServices)}
        inputName="service"
        isLoading={isLoading}
        options={availableServices}
        optionChangeHandler={handleServiceChange}
      />
      <Button isLoading={isLoading}>Get the best bank for your buck</Button>
    </form>
  );
}

export default Form;
