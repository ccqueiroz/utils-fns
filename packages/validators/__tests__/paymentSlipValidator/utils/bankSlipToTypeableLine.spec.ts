import { bankSlipTypeableLine } from '../../../src/lib/paymentSlipValidator/utils/bankSlip/bankSlipTypeableLine';

describe('[VALIDATOR: BANK_PAYMENTS_TYPEABLE_LINE]', () => {
  it('Should be return true to bankSlipTypeableLine function call when passed digits correctly to bank slip in type typeable line and the data includes into map instance passed within argument', () => {
    const mapBankSlipTypeableLineTest = new Map();
    let bankSlipTypeableLineTest = bankSlipTypeableLine({
      digits: '65590000020044250000594059050008194290000006050', //valid code
      mapPaymentSlipData: mapBankSlipTypeableLineTest,
    });
    expect(bankSlipTypeableLineTest).toBeTruthy();
    expect(Object.fromEntries(mapBankSlipTypeableLineTest)).toEqual({
      bankCode: '655',
      bankName: 'Banco Votorantim S.A.',
      price: '60.50',
      expirationDate: '01/08/2023',
    });
    mapBankSlipTypeableLineTest.clear();
    bankSlipTypeableLineTest = bankSlipTypeableLine({
      digits: '00190500954014481606916809350314337370000000100', //invalid code
      mapPaymentSlipData: mapBankSlipTypeableLineTest,
    });
    expect(bankSlipTypeableLineTest).toBeFalsy();
    expect(Object.fromEntries(mapBankSlipTypeableLineTest)).toEqual({});
  });
});
