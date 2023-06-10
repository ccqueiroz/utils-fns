import { bankSlip } from '../../../src/lib/paymentSlipValidator/utils/bankSlip/index';
import { TypesUtils } from '@utils-fns/utils';

describe('[VALIDATORS: BANK_SLIP]', () => {
  it('Should be return false when not passed digits or digits passed are letters', () => {
    expect(
      bankSlip({
        digits: '',
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: 'kjskajahjsahjkhajkhsjk/oiu12ui1ihhb',
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: '00190500954014481606906',
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits:
          '00190500954014481606906809350314337370000000100981298291892819',
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //tyable line
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
      }),
    ).toBeTruthy();
  });
  it('Should be return true when passed param validByIfIsBarCodeOrTypeableLinand typeof payment slip to be equal this argument.', () => {
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: '65591942700000005000000000', //invalid barcode
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //typeable line
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //typeable line
        paramsPaymentSlipValidator: {
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip and the passed bank validation by name or code', () => {
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
        paramsPaymentSlipValidator: {
          validByBank: '655',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
        paramsPaymentSlipValidator: {
          validByBank: 'Banco Votorantim S.A.',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
        paramsPaymentSlipValidator: {
          validByBank: 'Banco Votorantim S.A.',
          validByIfIsBarCodeOrTypeableLine: 'Cód. Barras',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '65591942700000005000000000442500009390032700', //barcode
        paramsPaymentSlipValidator: {
          validByBank: '1001' as TypesUtils['BankCode'],
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //typeable line
        paramsPaymentSlipValidator: {
          validByBank: '1001' as TypesUtils['BankCode'],
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //typeable line
        paramsPaymentSlipValidator: {
          validByBank: '001',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //typeable line
        paramsPaymentSlipValidator: {
          validByBank: 'Banco do Brasil S.A.',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlip({
        digits: '00190500954014481606906809350314337370000000100', //typeable line
        paramsPaymentSlipValidator: {
          validByBank: 'Banco do Brasil S.A.',
          validByIfIsBarCodeOrTypeableLine: 'Linha Digitável',
        },
      }),
    ).toBeTruthy();
  });
});
