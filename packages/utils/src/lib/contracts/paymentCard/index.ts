export type BrandCardType =
  | 'american-express'
  | 'diners-club'
  | 'discover'
  | 'elo'
  | 'hiper'
  | 'hipercard'
  | 'jcb'
  | 'maestro'
  | 'mastercard'
  | 'mir'
  | 'unionpay'
  | 'visa'
  | 'visa-electron';

export type NameBrandCard =
  | 'American Express'
  | 'Diners Club'
  | 'Discover'
  | 'Elo'
  | 'Hiper'
  | 'Hipercard'
  | 'JCB'
  | 'Maestro'
  | 'Mastercard'
  | 'Mir'
  | 'UnionPay'
  | 'Visa'
  | 'Visa Electron';

export type PaymentCardDataList = {
  [key in BrandCardType]: {
    innPattern: Array<number | Array<number>>;
    lengthsNumber: Array<number>;
    brandCardType: BrandCardType;
    nameBrandCard: NameBrandCard;
  };
};
