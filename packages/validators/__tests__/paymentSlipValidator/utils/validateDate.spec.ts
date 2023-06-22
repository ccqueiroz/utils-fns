import { convertDatePaymentoSlip } from '../../../src/lib/paymentSlipValidator/utils/bankSlip/convertDate';
import { validateDatePaymentoSlipToDate } from '../../../src/lib/paymentSlipValidator/utils/bankSlip/validateDate';
import { convertDatePaymentSlipTaxCollection } from '../../../src/lib/paymentSlipValidator/utils/taxColletion/convertDate';
import { validateDatePaymentSlipTaxCollection } from '../../../src/lib/paymentSlipValidator/utils/taxColletion/validateDate';

describe('[VALIDATORS: VALIDATE_DATE]', () => {
  it('Should be return true when the elapsed date has correctly passed the number of days since the base date stipulated for payment slips according to FEBRABAN', () => {
    expect(
      validateDatePaymentoSlipToDate(
        convertDatePaymentoSlip('9378'),
        new Date('2023-06-11'),
      ),
    ).toBeTruthy();
    expect(
      validateDatePaymentoSlipToDate(
        convertDatePaymentoSlip('9378'),
        new Date('2023-06-01'),
      ),
    ).toBeFalsy();
    expect(
      validateDatePaymentoSlipToDate(
        convertDatePaymentoSlip('-21021'),
        new Date('2023-06-01'),
      ),
    ).toBeFalsy();
    expect(
      validateDatePaymentoSlipToDate('abcdef', new Date('2023-06-01')),
    ).toBeFalsy();
    expect(
      validateDatePaymentoSlipToDate('', new Date('2023-06-01')),
    ).toBeFalsy();
  });
  it('Should be return true when the expiration date has correctly to format AAAAMMDD and match the Reference date passed with argument', () => {
    expect(
      validateDatePaymentSlipTaxCollection(
        convertDatePaymentSlipTaxCollection('20230601'),
        new Date('2023-06-01'),
      ),
    ).toBeTruthy();
    expect(
      validateDatePaymentSlipTaxCollection(
        convertDatePaymentSlipTaxCollection('78178958'),
        new Date('2023-06-01'),
      ),
    ).toBeFalsy();
    expect(
      validateDatePaymentSlipTaxCollection(
        convertDatePaymentSlipTaxCollection('abcdef'),
        new Date('2023-06-01'),
      ),
    ).toBeFalsy();
    expect(
      validateDatePaymentSlipTaxCollection(
        convertDatePaymentSlipTaxCollection('abcdef'),
        new Date('2023-16-01'),
      ),
    ).toBeFalsy();
    expect(
      validateDatePaymentSlipTaxCollection(
        convertDatePaymentSlipTaxCollection('20230601'),
        'abcjhsjhjhj',
      ),
    ).toBeFalsy();
    expect(validateDatePaymentSlipTaxCollection('20230601')).toBeFalsy();
  });
});
