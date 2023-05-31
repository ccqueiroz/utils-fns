import { TypesUtils, utils } from '@utils-fns/utils';
import { FindCardBrandsCombinations } from '../../../contracts';
import { findCardBrand } from '../findCardBrand';

export const findCardsBrandsCombinations = ({
  cardNumber,
  cardBrandData,
}: FindCardBrandsCombinations) => {
  if (!cardNumber) return [];
  const arrayBrandsCombinatons: Array<TypesUtils['PaymentCardData']> = [];
  const cardBrandDataList = utils.mapPaymentCardList;
  if (!cardBrandData) {
    for (const brand in cardBrandDataList) {
      findCardBrand({
        cardNumber,
        cardBrandData: cardBrandDataList[brand as TypesUtils['BrandCardType']],
        arrayBrandsCombinatons,
      });
    }
  } else {
    findCardBrand({
      cardNumber,
      cardBrandData,
      arrayBrandsCombinatons,
    });
  }
  return arrayBrandsCombinatons;
};
