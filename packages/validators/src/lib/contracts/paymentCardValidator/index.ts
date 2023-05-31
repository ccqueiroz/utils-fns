import type { TypesUtils } from '@utils-fns/utils';
export type TypeCard = 'credit' | 'debit' | 'credit-debit';
export type BrandCard = TypesUtils['BrandCardType'];

export type ParamsPaymentCardValidator = {
  validationTypeCard?: TypeCard;
  specificBrandCard?: BrandCard;
  customPatternPaymentCard?: RegExp;
};

export type PaymentCardValidator = {
  cardNumber?: string;
  paramsPaymentCardValidator?: ParamsPaymentCardValidator;
};

export type FindCardBrandsCombinations = {
  cardNumber: string;
  cardBrandData?: TypesUtils['PaymentCardData'];
};
