import {
  getServicesDropdownText,
  getYearDropdownText,
} from '@telecom/calculator/utils';
import { Button, CheckboxDropdown, RadioDropdown } from '@telecom/shared/ui';
import { useCallback, useState } from 'react';

export interface FormProps {
  years?: string[];
  services?: string[];
  isLoading: boolean;
}

export function Form(props: FormProps) {
  const { years, services, isLoading } = props;

  const [selectedYear, setSelectedYear] = useState('');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const handleYearChange = useCallback(
    (_: React.ChangeEvent, year: string): void => {
      setSelectedYear(year);
    },
    []
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
    [selectedServices]
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <RadioDropdown
        text={getYearDropdownText(selectedYear)}
        inputName="year"
        isLoading={isLoading}
        options={years}
        optionChangeHandler={handleYearChange}
      />
      <CheckboxDropdown
        text={getServicesDropdownText(selectedServices)}
        inputName="service"
        isLoading={isLoading}
        options={services}
        optionChangeHandler={handleServiceChange}
      />
      <Button isLoading={isLoading}>Get the best bank for your buck</Button>
    </form>
  );
}

export default Form;
