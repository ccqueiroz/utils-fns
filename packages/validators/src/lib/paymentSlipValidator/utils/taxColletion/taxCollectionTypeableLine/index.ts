import { TaxCollectionSlip } from '..';
import {
  paymentSlipSegmentIdentification,
  paymentSlipSegmentType,
} from '../../../../contracts';
import { convertAmount } from '../../convertAmount';
import { convertDatePaymentSlipTaxCollection } from '../convertDate';
import { moduleToBeUsedForValidation } from '../moduleToBeUsedForValidation';

export const taxCollectionTypeableLine = ({
  digits,
  mapPaymentSlipData,
}: TaxCollectionSlip) => {
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
    ) &&
    moduleToBeUsedForValidation(
      blockWithAmount.charAt(blockWithAmount.length - 1),
      blockWithAmount.slice(0, blockMainInfosValidation.length - 1),
      referenceValue,
    ) &&
    moduleToBeUsedForValidation(
      blockFreeField1.charAt(blockFreeField1.length - 1),
      blockFreeField1.slice(0, blockFreeField1.length - 1),
      referenceValue,
    ) &&
    moduleToBeUsedForValidation(
      blockFreeField2.charAt(blockFreeField2.length - 1),
      blockFreeField2.slice(0, blockFreeField2.length - 1),
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

  const amount =
    blockMainInfosValidation.slice(4, 11) + blockWithAmount.slice(0, 4);
  mapPaymentSlipData.set('price', convertAmount(amount));

  const expiration = blockFreeField2.slice(0, 8);

  mapPaymentSlipData.set(
    'expirationDate',
    convertDatePaymentSlipTaxCollection(expiration),
  );

  return checkDigitsWithinModuleValidation;
};
