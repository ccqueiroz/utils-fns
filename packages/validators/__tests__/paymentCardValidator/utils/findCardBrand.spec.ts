import { utils, TypesUtils } from '@utils-fns/utils';
import { findCardBrand } from '../../../src/lib/paymentCardValidator/utils/findCardBrand';
describe('[VALIDATORS:FINDCARDBRAND]', () => {
  it('Should be dont return card brand data when cardNumber is not passed', () => {
    const cardBrandDataList = utils.mapPaymentCardList;
    const arrayBrandsCombinatons: Array<TypesUtils['PaymentCardData']> = [];
    findCardBrand({
      cardNumber: '',
      cardBrandData: cardBrandDataList['visa'],
      arrayBrandsCombinatons,
    });
    expect(arrayBrandsCombinatons.length).toBe(0);
  });
  it('Should be return card brand data with card number correctly to card brand type', () => {
    const cardBrandDataList = utils.mapPaymentCardList;
    const arrayBrandsCombinatons: Array<TypesUtils['PaymentCardData']> = [];
    findCardBrand({
      cardNumber: '402400711760257',
      cardBrandData: cardBrandDataList['visa'],
      arrayBrandsCombinatons,
    });
    expect(arrayBrandsCombinatons.length).toBe(1);
    expect(
      Object.prototype.hasOwnProperty.call(
        arrayBrandsCombinatons[0],
        'nameBrandCard',
      ),
    ).toBeTruthy();
    expect(
      Object.getOwnPropertyDescriptor(
        arrayBrandsCombinatons[0],
        'brandCardType',
      )?.value,
    ).toBe('visa');
  });
  it('Should be return card brand data with card number dont correctly to card brand type', () => {
    const cardBrandDataList = utils.mapPaymentCardList;
    const arrayBrandsCombinatons: Array<TypesUtils['PaymentCardData']> = [];
    findCardBrand({
      cardNumber: '5236701941582684', //mastercard
      cardBrandData: cardBrandDataList['visa'],
      arrayBrandsCombinatons,
    });
    expect(arrayBrandsCombinatons.length).toBe(0);
  });
});
