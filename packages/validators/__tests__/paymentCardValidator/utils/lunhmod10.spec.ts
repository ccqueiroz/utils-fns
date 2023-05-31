import { lunhMod10Algorithm } from '../../../src/lib/paymentCardValidator/utils/lunhMod10Algorithm';
describe('[VALIDATORS:LUNHMODE10]', () => {
  it('Should be return true when passed a valid payment card number', () => {
    expect(lunhMod10Algorithm('5067225213820014')).toBeTruthy();
    expect(lunhMod10Algorithm('5067225213820013')).toBeFalsy();
    expect(lunhMod10Algorithm('5251 4947 2647 1220')).toBeTruthy();
  });
  it('Should be return false when not passed arguments', () => {
    expect(lunhMod10Algorithm('')).toBeFalsy();
  });
});
