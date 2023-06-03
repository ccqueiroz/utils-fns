import { bankSlipBarCode } from './../../../src/lib/paymentSlipValidator/utils/bankSlip/bankSlipBarCode/index';
import { TypesUtils } from '@utils-fns/utils';
describe('[VALIDATORS: BANK_SLIP_BAR_CODE]', () => {
  it('Should be return true when passed digits correctly to bank slip in type barcode', () => {
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '55591942700000005000000000442500009390032700', //invalid code
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip in type barcode and is passed bank validation by name or code', () => {
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByBank: '655',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByBank: '1001' as TypesUtils['BankCode'],
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByBank: 'Banco Votorantim S.A.',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByBank: 'Banco Inválido' as TypesUtils['BankNames'],
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip in type barcode and is passed price/amount validation', () => {
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: '5.00',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: 5,
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: 2700,
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipBarCode({
        digits: '35591942700000005000000000442500009390032700', //invalid code
        paramsPaymentSlipValidator: {
          validByPrice: 3700,
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip in type barcode and is passed valid date expiration validation', () => {
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-30',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-31',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipBarCode({
        digits: '165591942700000005000000000442500009390032700', //invalid code
        paramsPaymentSlipValidator: {
          validByDate: '2023-07-30',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed all arguments correctly to bank slip in type barcode and return false if any argument to be incorrectly', () => {
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: 5,
          validByBank: 'Banco Votorantim S.A.',
          validByDate: '2023-07-30',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipBarCode({
        digits: '65391942700000005000000000442500009390032700', //invalid code
        paramsPaymentSlipValidator: {
          validByPrice: 5,
          validByBank: 'Banco Votorantim S.A.',
          validByDate: '2023-07-30',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: 57,
          validByBank: 'Banco Votorantim S.A.',
          validByDate: '2023-07-30',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: 5,
          validByBank: 'Banco Alfa S.A.',
          validByDate: '2023-07-30',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipBarCode({
        digits: '65591942700000005000000000442500009390032700', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: 5,
          validByBank: 'Banco Votorantim S.A.',
          validByDate: '2023-07-13',
        },
      }),
    ).toBeFalsy();
  });
});
