import { getServicesDropdownText, getYearDropdownText } from './dropdown-text';

describe('getYearDropdownText', () => {
  it('should return selected year when it is provided', () => {
    const selectedYear = '2022';
    const result = getYearDropdownText(selectedYear);

    expect(result).toBe(selectedYear);
  });

  it('should return "Year" when selected year is not provided', () => {
    const result = getYearDropdownText('');

    expect(result).toBe('Year');
  });
});

describe('getServicesDropdownText', () => {
  it('should return comma-separated list of first 3 selected services followed by "and more" when more than 3 services are selected', () => {
    const selectedServices = new Map<number, string>();
    selectedServices.set(1, 'Service 1');
    selectedServices.set(2, 'Service 2');
    selectedServices.set(3, 'Service 3');
    selectedServices.set(4, 'Service 4');

    const result = getServicesDropdownText(selectedServices);

    expect(result).toBe('Service 1, Service 2, Service 3 and more');
  });

  it('should return comma-separated list of selected services when 3 or fewer services are selected', () => {
    const selectedServices = new Map<number, string>();
    selectedServices.set(1, 'Service 1');
    selectedServices.set(2, 'Service 2');
    selectedServices.set(3, 'Service 3');
    const result = getServicesDropdownText(selectedServices);

    expect(result).toBe('Service 1, Service 2, Service 3');
  });

  it('should return "Services" when no services are selected', () => {
    const result = getServicesDropdownText(new Map());

    expect(result).toBe('Services');
  });
});
