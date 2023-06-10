/* eslint-disable prettier/prettier */
import {
  PaymentSlipValidator,
  paymentSlipSegmentIdentification,
  paymentSlipSegmentType,
} from '../../../../contracts';
import { validAmount } from '../../validAmount';
import { convertDatePaymentSlipTaxCollection } from '../convertDate';
import { moduleToBeUsedForValidation } from '../moduleToBeUsedForValidation';

interface TaxCollectionBarCode extends PaymentSlipValidator {
  digits: string;
}

export const taxCollectionBarCode = ({
  digits,
  paramsPaymentSlipValidator,
}: TaxCollectionBarCode) => {
  const regexBarCode = /^[0-9]{44}$/;
  if (!regexBarCode.test(digits)) return false;

  const digitBlocks = [
    digits.slice(0, 1), // serviceType
    digits.slice(1, 2), // segmentType
    digits.slice(2, 3), // referenceValue
    digits.slice(3, 4), // verifyingDigit
    digits.slice(4, 15), // amount
    digits.slice(15, 23), // cnpjOrMF
    digits.slice(23, digits.length), // blockFreeField
  ];

  const [
    serviceType,
    segmentType,
    referenceValue,
    verifyingDigit,
    amount,
    ,
    blockFreeField,
  ] = digitBlocks;

  if (serviceType !== '8') return false;

  const digitsToValidation = digitBlocks
    .filter((_, currentIndex) => currentIndex !== 3)
    .join('');

  const checkDigitsWithinModuleValidation = moduleToBeUsedForValidation(
    verifyingDigit,
    digitsToValidation,
    referenceValue,
  );

  if (!checkDigitsWithinModuleValidation) return false;

  if (paramsPaymentSlipValidator) {
    const { validByBank, validSegmentType, validByPrice, validByDate } =
      paramsPaymentSlipValidator;

    if (validByBank) return false;

    if (validSegmentType) {
      const getValidSegmentType =
        paymentSlipSegmentIdentification[
        segmentType as keyof typeof paymentSlipSegmentIdentification
        ];
      if (paymentSlipSegmentType[getValidSegmentType] !== validSegmentType)
        return false;
    }

    if (validByPrice) {
      const price = validAmount(amount, validByPrice);
      if (!price) return false;
    }

    if (validByDate) {
      const expiration = blockFreeField.slice(0, 8);
      const validDate = convertDatePaymentSlipTaxCollection(expiration, validByDate);
      if (!validDate) return false;
    }
  }

  return checkDigitsWithinModuleValidation;
};
