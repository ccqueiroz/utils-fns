import { checkIsBankSlipOrTaxCollection } from './../../../src/lib/paymentSlipValidator/utils/checkIsBankSlipOrTaxCollection/index';
describe('[VALIDATORS: CHECK_IS_BANK_SLIP_OR_TAX_COLLECTION]', () => {
  it('Should be return bank when first digit code not to be equal 8', () => {
    expect(checkIsBankSlipOrTaxCollection('290')).toBe('bank');
  });
  it('Should be return tax_collection when first digit code not to be equal 8', () => {
    expect(checkIsBankSlipOrTaxCollection('890')).toBe('tax_collection');
  });
});
