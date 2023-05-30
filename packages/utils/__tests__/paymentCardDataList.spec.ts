import { utils } from '../src';
import dataJson from '../src/lib/paymentCardDataList/data.json';
describe('[UTILS: PAYMENTCARDDATALIST]', () => {
  it('Should be return the listing with the registered data payment cards', () => {
    Object.keys(dataJson).forEach((key) => {
      expect(
        Object.prototype.hasOwnProperty.call(utils.mapPaymentCardList, key),
      ).toBeTruthy();
    });
    expect(
      Object.prototype.hasOwnProperty.call(utils.mapPaymentCardList, 'unknown'),
    ).toBeFalsy();
  });
});
