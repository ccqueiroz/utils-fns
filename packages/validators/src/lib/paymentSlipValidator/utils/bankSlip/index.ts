/* eslint-disable prettier/prettier */
import { PaymentSlipValidator } from '../../../contracts/paymentSlipValidator';
import { bankSlipBarCode } from './bankSlipBarCode';
import { bankSlipTypeableLine } from './bankSlipTypeableLine';

interface BankSlip extends PaymentSlipValidator {
  digits: string;
}

export const bankSlip = ({ digits, paramsPaymentSlipValidator }: BankSlip) => {
  const barCodeOrTypeableLine = {
    barcode: { type: 'Cód. Barras', key: 'barcode' },
    typeable_line: { type: 'Linha Digitável', key: 'typeable_line' },
  };
  const isBankSlipOrTaxCollection =
    digits.length === 44
      ? barCodeOrTypeableLine.barcode.key
      : digits.length === 47
        ? barCodeOrTypeableLine.typeable_line.key
        : undefined;

  if (
    paramsPaymentSlipValidator?.validByTypeOfPaymentSlip !==
    isBankSlipOrTaxCollection
  )
    return false;

  if (digits.length === 44)
    return bankSlipBarCode({ digits, paramsPaymentSlipValidator });
  else if (digits.length === 47) return bankSlipTypeableLine({ digits, paramsPaymentSlipValidator });
  else false;
};
