import { mask } from '../src';
describe('[MASK: PAYMENT_SLIP_PROVIDER]', () => {
  it('Should be able to pass a billet numbering and return a billet this numbering masked according to the billet type.', () => {
    expect(
      mask.paymentSlip({
        value: '846100000005319901090112004961794445808053219016', //typeable line tax collection
      }),
    ).toEqual({
      unmask: '846100000005319901090112004961794445808053219016',
      value: '84610000000-5 31990109011-2 00496179444-5 80805321901-6',
    });
    expect(
      mask.paymentSlip({
        value: '65590000020044250000594059050008194290000006050', //typeable line bank slip
      }),
    ).toEqual({
      unmask: '65590000020044250000594059050008194290000006050',
      value: '65590.00002 00442.500005 94059.050008 1 94290000006050',
    });
    expect(
      mask.paymentSlip({
        value: '6559000002004425000059405905000819', //typeable line bank slip
      }),
    ).toEqual({
      unmask: '6559000002004425000059405905000819',
      value: '6559000002004425000059405905000819',
    });
    expect(
      mask.paymentSlip({
        value: '84610000000319901090110049617944480805321901', //barcode tax collection
      }),
    ).toEqual({
      unmask: '84610000000319901090110049617944480805321901',
      value: '84610000000319901090110049617944480805321901',
    });
    expect(
      mask.paymentSlip({
        value: '846100000003199010901100496179444808053219019999999',
      }),
    ).toEqual({
      unmask: '846100000003199010901100496179444808053219019999',
      value: '84610000000-3 19901090110-0 49617944480-8 05321901999-9',
    });
    expect(
      mask.paymentSlip({
        value: '',
      }),
    ).toEqual({
      unmask: '',
      value: '',
    });
  });
  it('Should be possible to pass a billet number and the param onlyType and return a billet with that number masked according to the billet type.', () => {
    expect(
      mask.paymentSlip({
        value: '846100000005319901090112004961794445808053219016', //typeable line tax collection
        onlyType: {
          typePaymentSlip: 'Boleto de Arrecadação',
        },
      }),
    ).toEqual({
      unmask: '846100000005319901090112004961794445808053219016',
      value: '84610000000-5 31990109011-2 00496179444-5 80805321901-6',
    });
    expect(
      mask.paymentSlip({
        value: '65590000020044250000594059050008194290000006050', //typeable line bank slip to convert in tax collection
        onlyType: {
          typePaymentSlip: 'Boleto de Arrecadação',
        },
      }),
    ).toEqual({
      unmask: '65590000020044250000594059050008194290000006050',
      value: '65590000020-0 44250000594-0 59050008194-2 90000006050',
    });
    expect(
      mask.paymentSlip({
        value: '65590000020044250000594059050008194290000006050', //typeable line bank slip
        onlyType: {
          typePaymentSlip: 'Boleto Bancário',
        },
      }),
    ).toEqual({
      unmask: '65590000020044250000594059050008194290000006050',
      value: '65590.00002 00442.500005 94059.050008 1 94290000006050',
    });
    expect(
      mask.paymentSlip({
        value: '65590000020044250000594059050008194290000006050', //typeable line bank slip
        onlyType: {
          typePaymentSlip: 'Boleto Bancário',
          typeDigits: 'Linha Digitável',
        },
      }),
    ).toEqual({
      unmask: '65590000020044250000594059050008194290000006050',
      value: '65590.00002 00442.500005 94059.050008 1 94290000006050',
    });
    expect(
      mask.paymentSlip({
        value: '65591942700000005000000000442500009390032700', //barcode bank slip
        onlyType: {
          typePaymentSlip: 'Boleto Bancário',
          typeDigits: 'Cód. Barras',
        },
      }),
    ).toEqual({
      unmask: '65591942700000005000000000442500009390032700',
      value: '65591942700000005000000000442500009390032700',
    });
  });
});
