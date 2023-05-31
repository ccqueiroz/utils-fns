import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATORS: PAYMENTCARDVALIDATOR]', () => {
  it('Should be return false when cardNumber is not passed', () => {
    expect(validators.paymentCardValidator({ cardNumber: '' })).toBeFalsy();
  });
  it('Should be return false when the cardNumber does not match the numerical formatting of a credit card.', () => {
    expect(
      validators.paymentCardValidator({ cardNumber: '@uiouiqw9182' }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '375374' }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '375374-1' }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '3753120982738278' }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '4024 0071 6435 7038' }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '4024 0071 6435 7039' }),
    ).toBeTruthy();
  });
  it('Should be return true when customPatternPaymentCard is passed and the cardNumber matches the check', () => {
    const regexCard = RegExp(/^4[0-2](\d{14})$/);
    expect(
      validators.paymentCardValidator({
        cardNumber: '4124007164357039',
        paramsPaymentCardValidator: {
          customPatternPaymentCard: regexCard,
        },
      }),
    ).toBeTruthy();
    expect(
      validators.paymentCardValidator({
        cardNumber: '4324007164357039',
        paramsPaymentCardValidator: {
          customPatternPaymentCard: regexCard,
        },
      }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({
        cardNumber: '4324007',
        paramsPaymentCardValidator: {
          customPatternPaymentCard: regexCard,
        },
      }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({
        cardNumber: '4324007989182923232',
        paramsPaymentCardValidator: {
          customPatternPaymentCard: regexCard,
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when specificBrandCard is passed and the cardNumber matches the check', () => {
    const cardVisa = '4532 7051 3670 1706';
    const cardMastercard = '5474 7438 8427 0241';
    const cardNotValid = '5474 7438 8427 0241';
    expect(
      validators.paymentCardValidator({
        cardNumber: cardVisa,
        paramsPaymentCardValidator: {
          specificBrandCard: 'visa',
        },
      }),
    ).toBeTruthy();
    expect(
      validators.paymentCardValidator({
        cardNumber: cardMastercard,
        paramsPaymentCardValidator: {
          specificBrandCard: 'visa',
        },
      }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({
        cardNumber: cardNotValid,
        paramsPaymentCardValidator: {
          specificBrandCard: 'visa',
        },
      }),
    ).toBeFalsy();
  });
});
