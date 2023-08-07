import {
  MaskPhoneInterface,
  patternsToUseInProvider,
} from '../../../contracts';

export const controllerProviderPhone = ({
  customPattern,
  internationalNumber,
  value,
}: Pick<
  MaskPhoneInterface,
  'customPattern' | 'internationalNumber' | 'value'
>) => {
  if (customPattern) return customPattern;
  value = value ? value.toString() : '';
  value = value.replace(/\D/g, '');
  let pattern = '';
  if (internationalNumber) {
    pattern =
      value.length >= 13
        ? patternsToUseInProvider.phone.phoneWithDDI.b
        : patternsToUseInProvider.phone.phoneWithDDI.a;
  } else {
    if (value.length <= 3) {
      pattern = patternsToUseInProvider.phone.phonePublicServices.a;
    } else if (value.length > 3 && value.length <= 4) {
      pattern = patternsToUseInProvider.phone.phonePublicServices.b;
    } else if (value.length > 4 && value.length <= 10) {
      pattern = patternsToUseInProvider.phone.default.a;
    } else if (value.length > 10) {
      pattern = patternsToUseInProvider.phone.default.b;
    }
  }

  return pattern;
};
