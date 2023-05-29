import { emailValidator as email } from './email/index';
import { cnpjValidator as cnpj } from './cnpj/index';
import { nisValidator as nis } from './nis/index';
import { cpfValidator as cpf } from './cpf/index';

export type {
  EmailValidator,
  MinMaxParamsEmail,
  ParamsValidatorEmail,
} from './contracts/index';

const validators = {
  cpf,
  cnpj,
  email,
  nis,
};

export default validators;
