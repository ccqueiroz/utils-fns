import { bankSlipBarCode } from './../../../src/lib/paymentSlipValidator/utils/bankSlip/bankSlipBarCode/index';
describe('[VALIDATOR: BANK_PAYMENTSLIP_VALIDATOR]', () => {
  it('Should be', () => {
    expect(
      bankSlipBarCode({
        digits: '00193373700000001000500940144816060680935031',
      }),
    ).toBe('');
  });
});
