import {
  mapBankData,
  filterBankByCode,
  filterBankByName,
} from '../src/lib/paymentSlip/index';
describe('[UTILS: PAYMENT_SLIP]', () => {
  it('Should be checked if the object exists and if it is of type MapBankData', () => {
    expect(typeof mapBankData).toBeDefined();
    expect(typeof mapBankData).toBe('object');
  });
  it('Should be filter bank by code in object mapBankData', () => {
    expect(filterBankByCode('001')).toBe('Banco do Brasil S.A.');
  });
  it('Should be filter bank by name in object mapBankData', () => {
    expect(filterBankByName('Banco do Brasil S.A.')).toBe('001');
  });
});
