import { TypesUtils } from '@utils-fns/utils';
import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATORS: PAYMENT_SLIP_VALIDATOR]', () => {
  it('Should be return The payment slip data when digits payment slip are passed correctly', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65591942700000005000000000442500009390032700',
        })
        .getData(),
    ).toEqual({
      bankCode: '655',
      bankName: 'Banco Votorantim S.A.',
      barCodeOrTypeableLine: 'Cód. Barras',
      digits: '65591942700000005000000000442500009390032700',
      expirationDate: '30/07/2023',
      isValid: true,
      price: '5.00',
      segmentPaymentSplip: 'Pagamento de Boletos Bancários',
      typeOfPaymentSlip: 'Boleto Bancário',
    });

    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .getData(),
    ).toEqual({
      bankCode: '655',
      bankName: 'Banco Votorantim S.A.',
      barCodeOrTypeableLine: 'Linha Digitável',
      digits: '65590000020044250000594059050008194290000006050',
      expirationDate: '01/08/2023',
      isValid: true,
      price: '60.50',
      segmentPaymentSplip: 'Pagamento de Boletos Bancários',
      typeOfPaymentSlip: 'Boleto Bancário',
    });

    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .getData(),
    ).toEqual({
      bankCode: null,
      bankName: null,
      barCodeOrTypeableLine: 'Linha Digitável',
      digits: '846100000005319901090112004961794445808053219016',
      expirationDate: null,
      isValid: true,
      price: '31.99',
      segmentPaymentSplip: 'Taxas de Telecomunicações',
      typeOfPaymentSlip: 'Boleto de Arrecadação',
    });

    expect(
      validators
        .paymentSlip({
          digits: '84610000000319901090110049617944480805321901',
        })
        .getData(),
    ).toEqual({
      bankCode: null,
      bankName: null,
      barCodeOrTypeableLine: 'Cód. Barras',
      digits: '84610000000319901090110049617944480805321901',
      expirationDate: null,
      isValid: true,
      price: '31.99',
      segmentPaymentSplip: 'Taxas de Telecomunicações',
      typeOfPaymentSlip: 'Boleto de Arrecadação',
    });
    expect(
      validators
        .paymentSlip({
          digits: '',
        })
        .getData(),
    ).toEqual({
      bankCode: null,
      bankName: null,
      barCodeOrTypeableLine: null,
      digits: '',
      expirationDate: null,
      isValid: false,
      price: null,
      segmentPaymentSplip: null,
      typeOfPaymentSlip: null,
    });

    expect(
      validators
        .paymentSlip({
          digits: '655919427000656156210578120000442500009390032700',
        })
        .getData(),
    ).toEqual({
      bankCode: null,
      bankName: null,
      barCodeOrTypeableLine: null,
      digits: '655919427000656156210578120000442500009390032700',
      expirationDate: null,
      isValid: false,
      price: null,
      segmentPaymentSplip: null,
      typeOfPaymentSlip: null,
    });
  });
  it('Should be return true when passed digits correctly to bank slip', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid(),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid(),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '',
        })
        .isValid(),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits:
            '8461000000053199010901120049617944458080532190164425000059405905',
        })
        .isValid(),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: 'foobar',
        })
        .isValid(),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly and passed argument validByTypeOfPaymentSlip for check difference between bank slip or tax collection', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByTypeOfPaymentSlip: 'Boleto Bancário',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid({
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid({
          validByTypeOfPaymentSlip: 'Boleto Bancário',
        }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly and passed argument validByIfIsBarCodeOrTypeableLine for check difference between typeable line or bar code', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '84610000000319901090110049617944480805321901',
        })
        .isValid({
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '84610000000319901090110049617944480805321901',
        })
        .isValid({
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly and passed argument validByPrice for check the payment slip price', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByPrice: '60.50',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByPrice: '60,50',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByPrice: '60sasqs',
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid({
          validByPrice: '31.99',
        }),
    ).toBeTruthy();
  });
  it('Should be return true when passed digits correctly and passed argument validByDate for check the payment slip expiration date', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByDate: '08-01-2023',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByDate: '01/08/2023', //The due date must be passed in the format MM-DD-YYYY or an instance of Date
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid({
          validByDate: '08-01-2023',
        }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly and passed argument validSegmentType for check what segment type the payment slip its inserted', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validSegmentType: 'Pagamento de Boletos Bancários',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validSegmentType: 'Taxas Municipais',
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid({
          validSegmentType: 'Taxas de Telecomunicações',
        }),
    ).toBeTruthy();
  });
  it('Should be return true when passed digits correctly and passed argument validByBank for check the code or name emitting bank', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByBank: '655',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByBank: 'Banco Votorantim S.A.',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByBank: 'Banco A. J. Renner S.A.',
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByBank: '0012' as TypesUtils['BankCode'],
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '846100000005319901090112004961794445808053219016',
        })
        .isValid({
          validByBank: 'Banco Votorantim S.A.',
        }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly and all argument of param ParamsPaymentSlipValidator are passed correctly for check', () => {
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByBank: '655',
          validByDate: '08-01-2023',
          validByPrice: 60.5,
          validSegmentType: 'Pagamento de Boletos Bancários',
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
          validByTypeOfPaymentSlip: 'Boleto Bancário',
        }),
    ).toBeTruthy();
    expect(
      validators
        .paymentSlip({
          digits: '65590000020044250000594059050008194290000006050',
        })
        .isValid({
          validByBank: '655',
          validByDate: '08-01-2023',
          validByPrice: 60.5,
          validSegmentType: 'Pagamento de Boletos Bancários',
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        }),
    ).toBeFalsy();
    expect(
      validators
        .paymentSlip({
          digits: '84610000000319901090110049617944480805321901',
        })
        .isValid({
          validByPrice: '31.99',
          validSegmentType: 'Taxas de Telecomunicações',
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        }),
    ).toBeTruthy();
  });
});
