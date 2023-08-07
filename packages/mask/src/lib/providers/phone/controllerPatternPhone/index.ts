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
    switch (value.length) {
      case 3:
        pattern = patternsToUseInProvider.phone.phonePublicServices.a;
        break;
      case 4:
        pattern = patternsToUseInProvider.phone.phonePublicServices.b;
        break;
      case 10:
        pattern = patternsToUseInProvider.phone.default.a;
        break;
      case 11:
        pattern = patternsToUseInProvider.phone.default.b;
        break;
      default:
        break;
    }
  }
  return pattern;
};
