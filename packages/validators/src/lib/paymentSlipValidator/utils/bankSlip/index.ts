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

  const isBarCodeOrTypeableLine =
    digits.length === 44
      ? barCodeOrTypeableLine.barcode.key
      : digits.length === 47
        ? barCodeOrTypeableLine.typeable_line.key
        : undefined;

  const validByIfIsBarCodeOrTypeableLine = paramsPaymentSlipValidator?.validByIfIsBarCodeOrTypeableLine;

  const isTypeMismatch = validByIfIsBarCodeOrTypeableLine &&
    validByIfIsBarCodeOrTypeableLine !== barCodeOrTypeableLine[isBarCodeOrTypeableLine as keyof typeof barCodeOrTypeableLine]?.type;

  if (isTypeMismatch) {
    return false;
  }

  if (isBarCodeOrTypeableLine === barCodeOrTypeableLine.barcode.key) {
    return bankSlipBarCode({ digits, paramsPaymentSlipValidator });
  }
  else if (
    isBarCodeOrTypeableLine === barCodeOrTypeableLine.typeable_line.key
  ) {
    return bankSlipTypeableLine({ digits, paramsPaymentSlipValidator });
  } else {
    return false;
  }
};
