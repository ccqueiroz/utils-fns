import { paymentSlipValidator } from './../../src/lib/paymentSlipValidator/index';

describe('[VALIDATOR: BANK_PAYMENTSLIP_VALIDATOR]', () => {
  it('Should be return false when not passed digits correctly or dont passed any value', () => {
    expect(
      paymentSlipValidator({
        digits: '',
      }),
    ).toBeFalsy();
    expect(
      paymentSlipValidator({
        digits: '6559194270000000500000',
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits with format bank slip barcode or tax collection barcode', () => {
    expect(
      paymentSlipValidator({
        digits: '65591942700000005000000000442500009390032700', //bank slip barcode
      }),
    ).toBeTruthy();
    expect(
      paymentSlipValidator({
        digits: '84610000000319901090110049617944480805321901', //bank slip barcode
      }),
    ).toBeTruthy();
  });
  it('Should be return true when passed digits with format bank slip typeable line or tax collection typeable line', () => {
    expect(
      paymentSlipValidator({
        digits: '65590000020044250000594059050008194290000006050', //bank slip typeableLine
      }),
    ).toBeTruthy();
    expect(
      paymentSlipValidator({
        digits: '846100000005319901090112004961794445808053219016', //tax collection slip typeableLine
      }),
    ).toBeTruthy();
  });
  it('Should be return true when passed digits format bank slip typeable line and passed validByTypeOfPaymentSlip with argument Boleto Bancário', () => {
    expect(
      paymentSlipValidator({
        digits: '65590000020044250000594059050008194290000006050', //bank slip typeableLine,
        paramsPaymentSlipValidator: {
          validByTypeOfPaymentSlip: 'Boleto Bancário',
        },
      }),
    ).toBeTruthy();
    expect(
      paymentSlipValidator({
        digits: '65590000020044250000594059050008194290000006050', //bank slip typeableLine,
        paramsPaymentSlipValidator: {
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        },
      }),
    ).toBeFalsy();
    expect(
      paymentSlipValidator({
        digits: '65591942700000005000000000442500009390032700', //bank slip barcode,
        paramsPaymentSlipValidator: {
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        },
      }),
    ).toBeFalsy();
    expect(
      paymentSlipValidator({
        digits: '83220000000262600110070344656001020523551673', //tax collection barcode,
        paramsPaymentSlipValidator: {
          validByTypeOfPaymentSlip: 'Boleto de Arrecadação',
        },
      }),
    ).toBeFalsy();
  });
});
