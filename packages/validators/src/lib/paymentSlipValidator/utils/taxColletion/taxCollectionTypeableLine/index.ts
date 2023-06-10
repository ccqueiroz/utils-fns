/* eslint-disable prettier/prettier */
import {
  PaymentSlipValidator,
  paymentSlipSegmentIdentification,
  paymentSlipSegmentType,
} from '../../../../contracts';
import { validAmount } from '../../validAmount';
import { convertDatePaymentSlipTaxCollection } from '../convertDate';
import { moduleToBeUsedForValidation } from '../moduleToBeUsedForValidation';

interface TaxCollectionTypeableLine extends PaymentSlipValidator {
  digits: string;
}

export const taxCollectionTypeableLine = ({
  digits,
  paramsPaymentSlipValidator,
}: TaxCollectionTypeableLine) => {
  const regexTypeableLine = /^[0-9]{48}$/;
  if (!regexTypeableLine.test(digits)) return false;

  const [
    blockMainInfosValidation,
    blockWithAmount,
    blockFreeField1,
    blockFreeField2,
  ] = [
      digits.slice(0, 12), // blockMainInfosValidation
      digits.slice(12, 24), // blockWithAmount
      digits.slice(24, 36), // blockFreeField1
      digits.slice(36, digits.length), // blockFreeField2
    ];

  const serviceType = blockMainInfosValidation.slice(0, 1);
  const segmentType = blockMainInfosValidation.slice(1, 2);
  const referenceValue = blockMainInfosValidation.slice(2, 3);

  if (serviceType !== '8') return false;

  const checkDigitsWithinModuleValidation =
    moduleToBeUsedForValidation(
      blockMainInfosValidation.charAt(blockMainInfosValidation.length - 1),
      blockMainInfosValidation.slice(0, blockMainInfosValidation.length - 1),
      referenceValue,
    )
    && (moduleToBeUsedForValidation(
      blockWithAmount.charAt(blockWithAmount.length - 1),
      blockWithAmount.slice(0, blockMainInfosValidation.length - 1),
      referenceValue,
    ))
    && (moduleToBeUsedForValidation(
      blockFreeField1.charAt(blockFreeField1.length - 1),
      blockFreeField1.slice(0, blockFreeField1.length - 1),
      referenceValue,
    ))
    && (moduleToBeUsedForValidation(
      blockFreeField2.charAt(blockFreeField2.length - 1),
      blockFreeField2.slice(0, blockFreeField2.length - 1),
      referenceValue,
    ));

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
      const amount = blockMainInfosValidation.slice(4, 11) + blockWithAmount.slice(0, 4);
      const price = validAmount(amount, validByPrice);
      if (!price) return false;
    }

    if (validByDate) {
      const expiration = blockFreeField2.slice(0, 8);
      const validDate = convertDatePaymentSlipTaxCollection(
        expiration,
        validByDate,
      );
      if (!validDate) return false;
    }
  }

  return checkDigitsWithinModuleValidation;
};
