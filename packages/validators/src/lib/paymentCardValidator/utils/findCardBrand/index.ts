import { FindCardBrandsCombinations } from '../../../contracts';
import { TypesUtils } from '@utils-fns/utils';
import { matchValidator } from '../matchValidator';

interface FindCardBrand extends FindCardBrandsCombinations {
  cardBrandData: TypesUtils['PaymentCardData'];
  arrayBrandsCombinatons: Array<TypesUtils['PaymentCardData']>;
}

export const findCardBrand = ({
  cardNumber,
  cardBrandData,
  arrayBrandsCombinatons,
}: FindCardBrand): void => {
  if (!cardNumber) return;
  for (const patternINN of cardBrandData.innPattern) {
    if (!matchValidator(cardNumber, patternINN)) continue;
    arrayBrandsCombinatons.push(cardBrandData);
    break;
  }
};
