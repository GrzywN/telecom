export const getYearDropdownText = (selectedYear: string) =>
  selectedYear || 'Year';

export const getServicesDropdownText = (selectedServices: string[]) => {
  const howManyWordsToDisplay = 3;
  const words = selectedServices.length;

  if (words > howManyWordsToDisplay) {
    const firstWords = selectedServices.slice(0, 3);

    return firstWords.join(', ') + ' and more';
  }

  return selectedServices.join(', ') || 'Services';
};
