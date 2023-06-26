import { stateRegistrationValidator } from './stateRegistrationValidator/index';
import { emailValidator as email } from './email/index';
import { cnpjValidator as cnpj } from './cnpj/index';
import { nisValidator as nis } from './nis/index';
import { cpfValidator as cpf } from './cpf/index';
import { phoneValidator as phone } from './phone';
import { PaymentCardValidator as ClassPaymentCardValidator } from './paymentCardValidator/index';
import { PaymentSlipValidator as ClassPaymentSlipValidator } from './paymentSlipValidator/index';

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
  paymentSlipSegmentType,
  paymentSlipSegmentIdentification,
  PaymentSlipValidator,
  ParamsPaymentSlipValidator,
  ParamsStateRegistrationValidator,
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
  PaymentSlipSegmentIdentification: typeof paymentSlipSegmentIdentification;
  PaymentSlipSegmentType: typeof paymentSlipSegmentType;
  PaymentSlipValidator: PaymentSlipValidator;
  ParamsPaymentSlipValidator: ParamsPaymentSlipValidator;
  ParamsStateRegistrationValidator: ParamsStateRegistrationValidator;
};

const validators = {
  cpf,
  cnpj,
  email,
  nis,
  phone,
  paymentCardValidator: ClassPaymentCardValidator.init,
  paymentSlipValidator: ClassPaymentSlipValidator.init,
  stateRegistrationValidator,
};

export default validators;
