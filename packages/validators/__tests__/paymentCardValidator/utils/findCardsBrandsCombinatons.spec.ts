import { findCardsBrandsCombinations } from '../../../src/lib/paymentCardValidator/utils/findCardsBrandsCombinations/index';
import { utils, TypesUtils } from '@utils-fns/utils';
describe('[VALIDATORS:FINDCARDSBRANDSCOMBINATONS]', () => {
  const cardBrandDataList = utils.mapPaymentCardList;
  it('Should be dont return card brand data when cardNumber is not passed', () => {
    expect(
      findCardsBrandsCombinations({
        cardNumber: '',
        cardBrandData: cardBrandDataList['visa'],
      }).length,
    ).toBe(0);
  });
  it('Should be return card brand data when cardNumer matches patternINN even without passing which card brand you want to analyze', () => {
    const cardNumberVisa = '4539 0996 8888 0180';
    const cardNumberMaster = '5591 2058 3338 2988';
    const cardNumberHiper = '6062 8253 2645 5914';
    const cardNumberAmericanExpress = '3753 747078 52832';
    const cardVisa: Array<TypesUtils['PaymentCardData']> =
      findCardsBrandsCombinations({
        cardNumber: cardNumberVisa,
      });
    const cardMaster: Array<TypesUtils['PaymentCardData']> =
      findCardsBrandsCombinations({
        cardNumber: cardNumberMaster,
      });
    const cardHiper: Array<TypesUtils['PaymentCardData']> =
      findCardsBrandsCombinations({
        cardNumber: cardNumberHiper,
      });
    const cardAmericanExpress: Array<TypesUtils['PaymentCardData']> =
      findCardsBrandsCombinations({
        cardNumber: cardNumberAmericanExpress,
      });
    expect(cardVisa.length).toBe(1);
    expect(cardVisa[0].nameBrandCard).toBe(
      cardBrandDataList[cardVisa[0].brandCardType].nameBrandCard,
    );
    expect(cardMaster.length).toBe(1);
    expect(cardMaster[0].nameBrandCard).toBe(
      cardBrandDataList[cardMaster[0].brandCardType].nameBrandCard,
    );
    expect(cardHiper.length).toBe(1);
    expect(cardHiper[0].nameBrandCard).toBe(
      cardBrandDataList[cardHiper[0].brandCardType].nameBrandCard,
    );
    expect(cardAmericanExpress.length).toBe(1);
    expect(cardAmericanExpress[0].nameBrandCard).toBe(
      cardBrandDataList[cardAmericanExpress[0].brandCardType].nameBrandCard,
    );
    expect(cardAmericanExpress[0].nameBrandCard).not.toBe(
      cardBrandDataList[cardMaster[0].brandCardType].nameBrandCard,
    );
  });
  it('Should be return card brand data when cardNumber matches patternINN passing which card brand you want to parse', () => {
    const cardNumberMaster = '5591 2058 3338 2988';
    const cardMaster: Array<TypesUtils['PaymentCardData']> =
      findCardsBrandsCombinations({
        cardNumber: cardNumberMaster,
        cardBrandData: cardBrandDataList['mastercard'],
      });
    expect(cardMaster.length).toBe(1);
    expect(cardMaster[0].nameBrandCard).toBe(
      cardBrandDataList[cardMaster[0].brandCardType].nameBrandCard,
    );
    expect(cardMaster[0].nameBrandCard).not.toBe(
      cardBrandDataList['visa'].nameBrandCard,
    );
  });
});
