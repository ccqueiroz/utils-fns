import { emailValidator as email } from './email/index';
import { cnpjValidator as cnpj } from './cnpj/index';
import { nisValidator as nis } from './nis/index';
import { cpfValidator as cpf } from './cpf/index';
import { phoneValidator as phone } from './phone';
import { paymentCardValidator } from './paymentCardValidator/index';

import type {
  EmailValidator,
  MinMaxParamsEmail,
  ParamsValidatorEmail,
  PhoneValidator,
  ParamsPhoneValidator,
  CustomPatternPhone,
  BrandCard,
  ParamsPaymentCardValidator,
  PaymentCardValidator,
  TypeCard,
} from './contracts/index';

export type TypesValidators = {
  EmailValidator: EmailValidator;
  MinMaxParamsEmail: MinMaxParamsEmail;
  ParamsValidatorEmail: ParamsValidatorEmail;
  PhoneValidator: PhoneValidator;
  ParamsPhoneValidator: ParamsPhoneValidator;
  CustomPatternPhone: CustomPatternPhone;
  BrandCard: BrandCard;
  ParamsPaymentCardValidator: ParamsPaymentCardValidator;
  PaymentCardValidator: PaymentCardValidator;
  TypeCard: TypeCard;
};

const validators = {
  cpf,
  cnpj,
  email,
  nis,
  phone,
  paymentCardValidator,
};

export default validators;
