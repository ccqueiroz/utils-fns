export const checkIsBankSlipOrTaxCollection = (digits: string) => {
  return Number(digits.charAt(0)) !== 8 ? 'bank' : 'tax_collection';
};
