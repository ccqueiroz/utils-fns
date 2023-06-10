import { checkIsBankSlipOrTaxCollection } from './utils/checkIsBankSlipOrTaxCollection/index';
import { normalizeToValidation } from '../../helpers/normalizeToValidation';
import { PaymentSlipValidator } from '../contracts/paymentSlipValidator';
import { bankSlip } from './utils/bankSlip';
import { taxColletionSlip } from './utils/taxColletion';

/**
 *
  @param {Object} PaymentSlipValidator
  @returns boolean

  @summary
  Motivation:
    - Testing payment slip with types bank slip and tax collection.

  Details:
    - It is possible to validate payment slips (banking) and collection slips, in typeable line formats and barcode numbering.
    - Among the validations are: validation by the issuing bank of the bill; segment type, payment amount; due date.

  Limitations:
    - In accordance with FEBRABAN (Brazilian Federation of Banks) regulations: "Layout" Standard for Collection/Receipt Using Bar Codes, version 06,
    for collection-type slips, due dates do not follow a pattern. The issuing bank is responsible for inserting this data in the blocks of free or
    unavailable fields, and, if inserted, it must be have the format YYYYMMDD. As a result, validation of the due date for payment slips does not have
    a standard, so it is not recommended that the validation of a payment slip is verified only by the due date.
  @link https://cmsarquivos.febraban.org.br/Arquivos/documentos/PDF/Layout%20-%20C%C3%B3digo%20de%20Barras%20ATUALIZADO.pdf.
*/
export const paymentSlipValidator = ({
  digits,
  paramsPaymentSlipValidator,
}: PaymentSlipValidator) => {
  digits = normalizeToValidation({ value: digits });
  if (!digits) return false;
  const regexLengthDigitsValidator = new RegExp(/^[0-9]{44,48}/);

  if (!regexLengthDigitsValidator.test(digits)) return false;
  const typesOfPaymentSlip = {
    bank: { type: 'Boleto Bancário', key: 'bank' },
    tax_collection: { type: 'Boleto de Arrecadação', key: 'tax_collection' },
  };

  const isBankSlipOrTaxCollection = checkIsBankSlipOrTaxCollection(digits);
  if (
    paramsPaymentSlipValidator &&
    paramsPaymentSlipValidator?.validByTypeOfPaymentSlip !==
      typesOfPaymentSlip[isBankSlipOrTaxCollection].type
  )
    return false;

  if (isBankSlipOrTaxCollection === typesOfPaymentSlip.bank.key) {
    return bankSlip({ digits, paramsPaymentSlipValidator });
  }

  if (isBankSlipOrTaxCollection === typesOfPaymentSlip.tax_collection.key)
    return taxColletionSlip({ digits, paramsPaymentSlipValidator });

  return false;
};
