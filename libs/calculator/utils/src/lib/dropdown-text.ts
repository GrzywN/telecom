export const getYearDropdownText = (selectedYear: string) => selectedYear || 'Year';

export const getServicesDropdownText = (selectedServices: Map<number, string>) => {
  const howManyWordsToDisplay = 3;
  const howManySelectedServices = selectedServices.size;

  if (howManySelectedServices > howManyWordsToDisplay) {
    const firstWords = Array.from(selectedServices.values()).slice(0, 3);

    return firstWords.join(', ') + ' and more';
  }

  const words = Array.from(selectedServices.values());
  return words.join(', ') || 'Services';
};
