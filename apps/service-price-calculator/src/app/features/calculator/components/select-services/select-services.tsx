import { CheckboxDropdown } from '@telecom/shared/ui';

import { useCalculator } from '../../context/calculator-context';

export function SelectServices() {
  const { availableServices, selectedServices, setSelectedServices, isLoading } = useCalculator();

  const getServicesDropdownText = () => {
    const howManyWordsToDisplay = 3;
    const howManySelectedServices = Object.keys(selectedServices).length;

    if (howManySelectedServices > howManyWordsToDisplay) {
      const firstWords = Object.values(selectedServices).slice(0, howManyWordsToDisplay);

      return `${firstWords.join(', ')} and more`;
    }

    const words = Object.values(selectedServices);
    return words.join(', ') || 'Services';
  };

  const getServiceOptions = (): string[] => {
    return Object.values(availableServices);
  };

  const handleServiceChange = (event: React.ChangeEvent<HTMLInputElement>, serviceName: string): void => {
    const serviceId = Object.entries(availableServices).find(([id, name]) => name === serviceName)?.[0];

    if (serviceId === undefined) {
      throw new Error('Form: serviceId is not found.');
    }

    const shouldServiceBeRemoved = Object.keys(selectedServices).includes(serviceId);
    let newSelectedServices: { [id: number]: string } = {};

    if (shouldServiceBeRemoved) {
      Object.entries(selectedServices).forEach(([id, name]) => {
        if (id !== serviceId) {
          newSelectedServices[Number(serviceId)] = name;
        }
      });
    } else {
      newSelectedServices = { ...selectedServices };
      newSelectedServices[Number(serviceId)] = availableServices[Number(serviceId)];
    }

    setSelectedServices(newSelectedServices);
  };

  return (
    <CheckboxDropdown
      inputName="service"
      isLoading={isLoading}
      text={getServicesDropdownText()}
      options={getServiceOptions()}
      optionChangeHandler={handleServiceChange}
      checkedOptions={Object.values(selectedServices)}
    />
  );
}

export default SelectServices;
