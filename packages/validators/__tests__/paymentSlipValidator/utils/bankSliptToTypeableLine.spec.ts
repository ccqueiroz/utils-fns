import { bankSlipTypeableLine } from '../../../src/lib/paymentSlipValidator/utils/bankSlip/bankSlipTypeableLine';
import { TypesUtils } from '@utils-fns/utils';

describe('[VALIDATOR: BANK_PAYMENTS_TYPEABLE_LINE]', () => {
  it('Should be return true when passed digits correctly to bank slip in type typeable line', () => {
    expect(
      bankSlipTypeableLine({
        digits: '65590000020044250000594059050008194290000006050', //valid code
      }),
    ).toBeTruthy();
    expect(
      bankSlipTypeableLine({
        digits: '6559000002004425000059405905000819429000000605012214', //valid code
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '65590000020044250000594059050008294290000006050', //invalid code
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
      }),
    ).toBeTruthy();
  });
  it('Should be return true when passed digits correctly to bank slip in type typeable line and is passed bank validation by name or code', () => {
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByBank: '001',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByBank: '0012' as TypesUtils['BankCode'],
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByBank: 'Banco do Brasil S.A.',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByBank: 'Itaú Unibanco Holding S.A.',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606916809350314337370000000100', //invalid code
        paramsPaymentSlipValidator: {
          validByBank: 'Banco do Brasil S.A.',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip in type typeable line and is passed price/amount validation', () => {
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: '1.00',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByPrice: '12',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '10190500954014481606906809350314337370000000100', //invalid code
        paramsPaymentSlipValidator: {
          validByPrice: '1.00',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed digits correctly to bank slip in type typeable line and is passed valid date expiration validation', () => {
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2007-12-31',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2023-12-3',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481616906809350314337370000000100', //invalid code
        paramsPaymentSlipValidator: {
          validByDate: '2007-12-31',
        },
      }),
    ).toBeFalsy();
  });
  it('Should be return true when passed all arguments correctly to bank slip in type typeable line and return false if any argument to be incorrectly', () => {
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2007-12-31',
          validByPrice: 1.0,
          validByBank: 'Banco do Brasil S.A.',
        },
      }),
    ).toBeTruthy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2007-12-30',
          validByPrice: 1.0,
          validByBank: 'Banco do Brasil S.A.',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2007-12-31',
          validByPrice: 1.6,
          validByBank: 'Banco do Brasil S.A.',
        },
      }),
    ).toBeFalsy();
    expect(
      bankSlipTypeableLine({
        digits: '00190500954014481606906809350314337370000000100', //valid code
        paramsPaymentSlipValidator: {
          validByDate: '2007-12-31',
          validByPrice: 1.0,
          validByBank: 'Banco Votorantim S.A.',
        },
      }),
    ).toBeFalsy();
  });
});
//65590.00002 00442.500005 94059.050008 1 94290000006050
