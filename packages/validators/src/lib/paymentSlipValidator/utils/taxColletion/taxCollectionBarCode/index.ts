import { TaxCollectionSlip } from '..';
import {
  paymentSlipSegmentIdentification,
  paymentSlipSegmentType,
} from '../../../../contracts';
import { convertAmount } from '../../convertAmount';
import { convertDatePaymentSlipTaxCollection } from '../convertDate';
import { moduleToBeUsedForValidation } from '../moduleToBeUsedForValidation';

export const taxCollectionBarCode = ({
  digits,
  mapPaymentSlipData,
}: TaxCollectionSlip) => {
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

  const segmentTypeKey =
    paymentSlipSegmentIdentification[
      segmentType as keyof typeof paymentSlipSegmentIdentification
    ];

  mapPaymentSlipData.set(
    'segmentPaymentSplip',
    paymentSlipSegmentType[
      segmentTypeKey as keyof typeof paymentSlipSegmentType
    ],
  );

  mapPaymentSlipData.set('price', convertAmount(amount));

  const expiration = blockFreeField.slice(0, 8);

  mapPaymentSlipData.set(
    'expirationDate',
    convertDatePaymentSlipTaxCollection(expiration),
  );

  return checkDigitsWithinModuleValidation;
};
