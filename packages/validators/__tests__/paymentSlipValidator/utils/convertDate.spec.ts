import { convertDatePaymentSlipTaxCollection } from './../../../src/lib/paymentSlipValidator/utils/taxColletion/convertDate/index';
import { convertDatePaymentoSlipToDate } from './../../../src/lib/paymentSlipValidator/utils/bankSlip/convertDate/index';
describe('[VALIDATORS: CONVERT_DATE]', () => {
  it('Should be return true when the elapsed date has correctly passed the number of days since the base date stipulated for payment slips according to FEBRABAN', () => {
    expect(
      convertDatePaymentoSlipToDate('9378', new Date('2023-06-11')),
    ).toBeTruthy();
    expect(
      convertDatePaymentoSlipToDate('9378', new Date('2023-06-01')),
    ).toBeFalsy();
    expect(
      convertDatePaymentoSlipToDate(-21021, new Date('2023-06-01')),
    ).toBeFalsy();
    expect(
      convertDatePaymentoSlipToDate('abcdef', new Date('2023-06-01')),
    ).toBeFalsy();
  });
  it('Should be return true when the expiration date has correctly to format AAAAMMDD and match the Reference date passed with argument', () => {
    expect(
      convertDatePaymentSlipTaxCollection('20230601', new Date('2023-06-01')),
    ).toBeTruthy();
    expect(
      convertDatePaymentSlipTaxCollection('78178958', new Date('2023-06-01')),
    ).toBeFalsy();
    expect(
      convertDatePaymentSlipTaxCollection('abcdef', new Date('2023-06-01')),
    ).toBeFalsy();
    expect(
      convertDatePaymentSlipTaxCollection('abcdef', new Date('2023-16-01')),
    ).toBeFalsy();
    expect(
      convertDatePaymentSlipTaxCollection('20230601', 'abcjhsjhjhj'),
    ).toBeFalsy();
    expect(convertDatePaymentSlipTaxCollection('20230601')).toBeFalsy();
  });
});
