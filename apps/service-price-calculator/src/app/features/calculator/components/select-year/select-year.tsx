import { RadioDropdown } from '@telecom/shared/ui';
import { useCallback } from 'react';

import { useCalculator } from '../../context/calculator-context';

export function SelectYear() {
  const { isLoading, availableYears, selectedYear, setSelectedYear } = useCalculator();

  const handleYearChange = useCallback(
    (_: React.ChangeEvent, year: string): void => {
      setSelectedYear(year);
    },
    [setSelectedYear]
  );

  const getYearDropdownText = (selectedYear: string) => selectedYear || 'Year';

  return (
    <RadioDropdown
      text={getYearDropdownText(selectedYear)}
      inputName="year"
      isLoading={isLoading}
      options={availableYears}
      optionChangeHandler={handleYearChange}
    />
  );
}

export default SelectYear;
