import { TypesUtils } from '@utils-fns/utils';
export type ParamsStateRegistrationValidator = {
  digits?: string;
  uf: TypesUtils['StateAbbreviations'];
};

export type ParamsFactoryStateRegistrationValidatorByState = {
  [key in TypesUtils['StateAbbreviations']]: (digits: string) => boolean;
};
