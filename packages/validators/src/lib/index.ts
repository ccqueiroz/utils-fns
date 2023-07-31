import { renavamValidator as renavam } from './renavamValidator/index';
import { cnhValidator as cnh } from './cnhValidator/index';
import { stateRegistrationValidator as stateRegistration } from './stateRegistrationValidator/index';
import { emailValidator as email } from './email/index';
import { cnpjValidator as cnpj } from './cnpj/index';
import { nisValidator as nis } from './nis/index';
import { cpfValidator as cpf } from './cpf/index';
import { phoneValidator as phone } from './phone';
import { PaymentCardValidator as ClassPaymentCardValidator } from './paymentCardValidator/index';
import { PaymentSlipValidator as ClassPaymentSlipValidator } from './paymentSlipValidator/index';
import { voterRegistrationValidation as voterRegistration } from './voterRegistrationValidation/index';
import { CepValidator } from './cep';

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
  paymentCard: ClassPaymentCardValidator.init,
  paymentSlip: ClassPaymentSlipValidator.init,
  stateRegistration,
  voterRegistration,
  cnh,
  renavam,
  cep: CepValidator.init,
};

export default validators;
