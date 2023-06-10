import { CheckboxDropdown } from '@telecom/shared/ui';

import { useCalculator } from '../../context/calculator-context';

export function SelectServices() {
  const { availableServices, selectedServices, setSelectedServices, isLoading } = useCalculator();

  const getServicesDropdownText = () => {
    const howManyWordsToDisplay = 3;
    const howManySelectedServices = selectedServices.size;

    if (howManySelectedServices > howManyWordsToDisplay) {
      const firstWords = Array.from(selectedServices.values()).slice(0, howManyWordsToDisplay);

      return `${firstWords.join(', ')} and more`;
    }

    const words = Array.from(selectedServices.values());
    return words.join(', ') || 'Services';
  };

  const getServiceOptions = (): string[] => {
    return Array.from(availableServices.values());
  };

  const handleServiceChange = (_: React.ChangeEvent, serviceName: string): void => {
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
  };

  return (
    <CheckboxDropdown
      inputName="service"
      isLoading={isLoading}
      text={getServicesDropdownText()}
      options={getServiceOptions()}
      optionChangeHandler={handleServiceChange}
    />
  );
}

export default SelectServices;
