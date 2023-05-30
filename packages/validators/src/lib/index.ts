import { emailValidator as email } from './email/index';
import { cnpjValidator as cnpj } from './cnpj/index';
import { nisValidator as nis } from './nis/index';
import { cpfValidator as cpf } from './cpf/index';
import { phoneValidator as phone } from './phone';
export type {
  EmailValidator,
  MinMaxParamsEmail,
  ParamsValidatorEmail,
  PhoneValidator,
  ParamsPhoneValidator,
  CustomPatternPhone,
} from './contracts/index';

const validators = {
  cpf,
  cnpj,
  email,
  nis,
  phone,
};

export default validators;
