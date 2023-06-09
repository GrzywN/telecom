import { getServicesDropdownText, getYearDropdownText } from '@telecom/calculator/utils';
import { Button, CheckboxDropdown, RadioDropdown } from '@telecom/shared/ui';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { useCalculator } from '../../context/calculator-context/calculator-context';
import { SUMMARY_PATH } from '../../routes/paths';

export function Form() {
  const { availableYears, availableServices, isLoading, selectedYear, setSelectedYear, selectedServices, setSelectedServices } =
    useCalculator();

  const navigate = useNavigate();

  const handleYearChange = useCallback(
    (_: React.ChangeEvent, year: string): void => {
      setSelectedYear(year);
    },
    [setSelectedYear]
  );

  const handleServiceChange = useCallback(
    (_: React.ChangeEvent, serviceName: string): void => {
      let serviceId = -1;
      for (const [id, name] of availableServices.entries()) {
        if (name === serviceName) {
          serviceId = id;
          break;
        }
      }

      if (serviceId === -1) {
        throw new Error('Form: serviceId is not found.');
      }

      const shouldServiceBeRemoved = Array.from(selectedServices.keys()).includes(serviceId);
      let newSelectedServices: Map<number, string> = new Map();

      if (shouldServiceBeRemoved) {
        for (const [id, name] of selectedServices.entries()) {
          if (id !== serviceId) {
            newSelectedServices.set(id, name);
          }
        }
      } else {
        newSelectedServices = new Map(selectedServices);
        newSelectedServices.set(serviceId, availableServices.get(serviceId) as string);
      }

      setSelectedServices(newSelectedServices);
    },
    [availableServices, selectedServices, setSelectedServices]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      navigate(SUMMARY_PATH);
    },
    [navigate]
  );

  const getServiceOptions = (availableServices: Map<number, string>): string[] => {
    const serviceOptions: string[] = [];

    for (const name of availableServices.values()) {
      serviceOptions.push(name);
    }

    return serviceOptions;
  };

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
        options={getServiceOptions(availableServices)}
        optionChangeHandler={handleServiceChange}
      />
      <Button isLoading={isLoading}>Get the best bank for your buck</Button>
    </form>
  );
}

export default Form;
