import { checkIsBankSlipOrTaxCollection } from './utils/checkIsBankSlipOrTaxCollection/index';
import { normalizeToValidation } from '../../helpers/normalizeToValidation';
import { PaymentSlipValidator } from '../contracts/paymentSlipValidator';
import { bankSlip } from './utils/bankSlip';

export const paymentSlipValidator = ({
  digits,
  paramsPaymentSlipValidator,
}: PaymentSlipValidator) => {
  digits = normalizeToValidation({ value: digits });
  if (!digits) return false;
  const regexLengthDigitsValidator = new RegExp(/^[0-9]{44,47}/);
  if (!regexLengthDigitsValidator.test(digits)) return false;
  const typesOfPaymentSlip = {
    bank: { type: 'Boleto Bancário', key: 'bank' },
    tax_collection: { type: 'Boleto de Arrecadação', key: 'tax_collection' },
  };
  //é boleto ou taxa de arrecadação?
  const isBankSlipOrTaxCollection = checkIsBankSlipOrTaxCollection(digits);
  if (
    paramsPaymentSlipValidator?.validByTypeOfPaymentSlip !==
    typesOfPaymentSlip[isBankSlipOrTaxCollection].type
  )
    return false;

  if (isBankSlipOrTaxCollection === typesOfPaymentSlip.bank.key)
    return bankSlip({ digits, paramsPaymentSlipValidator });

  if (isBankSlipOrTaxCollection === typesOfPaymentSlip.tax_collection.key)
    return false;

  return false;
};
