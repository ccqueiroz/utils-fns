import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATORS: PAYMENT_CARD_VALIDATOR]', () => {
  it('Should be return false for isValid method and null data for getData method when the cardNumber argument is not passed.', () => {
    expect(
      validators.paymentCardValidator({ cardNumber: '' }).isValid(),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '' }).getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: null,
      isValid: false,
    });
  });
  it('Should be return false for isValid method and null data for getData method when the cardNumber does not match the numerical formatting of a credit card.', () => {
    expect(
      validators.paymentCardValidator({ cardNumber: '@uiouiqw9182' }).isValid(),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '@uiouiqw9182' }).getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: '@uiouiqw9182',
      isValid: false,
    });
    expect(
      validators.paymentCardValidator({ cardNumber: '375374' }).isValid(),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '375374' }).getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: '375374',
      isValid: false,
    });
    expect(
      validators.paymentCardValidator({ cardNumber: '375374-1' }).isValid(),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: '375374-1' }).getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: '375374-1',
      isValid: false,
    });
    expect(
      validators
        .paymentCardValidator({ cardNumber: '3753120982738278' })
        .isValid(),
    ).toBeFalsy();
    expect(
      validators
        .paymentCardValidator({ cardNumber: '3753120982738278' })
        .getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: '3753120982738278',
      isValid: false,
    });
    expect(
      validators
        .paymentCardValidator({ cardNumber: '4024 0071 6435 7038' })
        .isValid(),
    ).toBeFalsy();
    expect(
      validators
        .paymentCardValidator({ cardNumber: '4024 0071 6435 7038' })
        .getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: '4024 0071 6435 7038',
      isValid: false,
    });
    expect(
      validators
        .paymentCardValidator({ cardNumber: '4024 0071 6435 7039' })
        .isValid(),
    ).toBeTruthy();
    expect(
      validators
        .paymentCardValidator({ cardNumber: '4024 0071 6435 7039' })
        .getData(),
    ).toEqual({
      bankDigits: '4',
      bankName: 'Visa',
      cardNumber: '4024 0071 6435 7039',
      isValid: true,
    });
  });
  it('Should be return true for isValid methodwhen customPatternPaymentCard is passed and the cardNumber matches the check', () => {
    const regexCard = RegExp(/^4[0-2](\d{14})$/);
    expect(
      validators
        .paymentCardValidator({
          cardNumber: '4124007164357039',
        })
        .isValid({
          customPatternPaymentCard: regexCard,
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentCardValidator({
          cardNumber: '4324007164357039',
        })
        .isValid({
          customPatternPaymentCard: regexCard,
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentCardValidator({
          cardNumber: '4324007',
        })
        .isValid({
          customPatternPaymentCard: regexCard,
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentCardValidator({
          cardNumber: '4324007989182923232',
        })
        .isValid({
          customPatternPaymentCard: regexCard,
        }),
    ).toBeFalsy();
  });
  it('Should be return true when specificBrandCard is passed and the cardNumber matches the check', () => {
    const cardVisa = '4532 7051 3670 1706';
    const cardMastercard = '5474 7438 8427 0241';
    const cardDinnersClub = '3014 842898 5841';
    const cardNotValid = '5474 7438 8423 0241';
    expect(
      validators
        .paymentCardValidator({
          cardNumber: cardDinnersClub,
        })
        .isValid({
          specificBrandCard: 'diners-club',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentCardValidator({ cardNumber: cardDinnersClub })
        .getData(),
    ).toEqual({
      bankDigits: '30',
      bankName: 'Diners Club',
      cardNumber: '3014 842898 5841',
      isValid: true,
    });
    expect(
      validators
        .paymentCardValidator({
          cardNumber: cardVisa,
        })
        .isValid({
          specificBrandCard: 'visa',
        }),
    ).toBeTruthy();
    expect(
      validators.paymentCardValidator({ cardNumber: cardVisa }).getData(),
    ).toEqual({
      bankDigits: '4',
      bankName: 'Visa',
      cardNumber: '4532 7051 3670 1706',
      isValid: true,
    });
    expect(
      validators
        .paymentCardValidator({
          cardNumber: cardMastercard,
        })
        .isValid({
          specificBrandCard: 'visa',
        }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: cardMastercard }).getData(),
    ).toEqual({
      bankDigits: '51,55',
      bankName: 'Mastercard',
      cardNumber: '5474 7438 8427 0241',
      isValid: true,
    });
    expect(
      validators
        .paymentCardValidator({
          cardNumber: cardNotValid,
        })
        .isValid({
          specificBrandCard: 'visa',
        }),
    ).toBeFalsy();
    expect(
      validators.paymentCardValidator({ cardNumber: cardNotValid }).getData(),
    ).toEqual({
      bankDigits: null,
      bankName: null,
      cardNumber: '5474 7438 8423 0241',
      isValid: false,
    });
  });
});
