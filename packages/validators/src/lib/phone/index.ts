import { normalizeToValidation } from '../../helpers/normalizeToValidation';
import { PhoneValidator } from '../contracts/phone';
/**
 @param {Object} PhoneValidator
 @returns boolean

 @summary
  Motivation:
    - Phone number test with validations of mobile phone numbers (BR), public utility numbers (BR),
      numbers without area code (BR), international numbers and custom validations with regex patterns.

  Details:
    - Numbering structure of a telephone number:
        CC = Coutry Code;
        NDC = Number Area State Code (National Destination Code);
        N = Number phone;
        +CC NDC N => +55 85 99999-9999
        reference: https://www.itu.int/rec/T-REC-E.164-201011-I/en

    - Validation priority order:
      * If there is paramsPhoneValidator, the following order is parsed:
        1º: If there is param Phone Validator.custom Pattern Phone;
        2º: Whether validation should occur with international phone numbers, based on E.164;
        3º: Whether validation should only occur with mobile phone numbers (BR);
            - If paramsPhoneValidator.onlyMobilePhoneBR is true, there is a condition that
              validation occurs with or without the DDD digits, with paramsPhoneValidator.numberWithoutCodeAreas.
        4º: Whether validation should occur only for public utility numbers;
      * If there is no paramsPhoneValidator or if you have paramsPhoneValidator.numberWithoutCodeAreas},
            validation will occur with standard Brazilian numbers.

    - Rules for telephone numbering in Brazil:
      Cellular Telephony - Initial digit:
        - 9 for Bands A (96 to 99) and B (91 to 94);
        - 8 for Bands D and E;
        - 7 Cellular and Trunking (Nextel);
        - 6 for bands A, B, D and E*;
      Fixed Telephony - Initial digit
        - 2 to 5;
      Public utility numbers:
        - Composed of 3 to 4 numbers, starting with the digit 1.
      reference: https://www.teleco.com.br/num.asp
 */
export const phoneValidator = ({
  phone,
  paramsPhoneValidator,
}: PhoneValidator): boolean => {
  phone = normalizeToValidation({ value: phone });
  if (!phone) return false;
  let numbersWithouCodeAreas = false;

  if (paramsPhoneValidator) {
    const {
      onlyMobilePhoneBR,
      canReceiveInternationalNumbers,
      customPatternPhone,
      publicUtilityNumberBR,
    } = paramsPhoneValidator;

    if (
      customPatternPhone &&
      Object.values(customPatternPhone).every((item) => item)
    ) {
      const { coutryCode, areaStateCode, phoneNumber } = customPatternPhone;
      const regexCustomPatternPhone = new RegExp(
        `${coutryCode.source}${areaStateCode.source}${phoneNumber.source}`,
      );
      try {
        return Boolean(regexCustomPatternPhone.test(phone));
      } catch (err) {
        console.log('err', err);
        return false;
      }
    }

    if (canReceiveInternationalNumbers) {
      const regexE164 = /^([0-9]{1,3})(\d{2,4})(\d{7,9})$/;
      return Boolean(regexE164.test(phone));
    }

    numbersWithouCodeAreas = Boolean(
      paramsPhoneValidator?.numberWithoutCodeAreas,
    );

    if (onlyMobilePhoneBR) {
      if (
        !(
          phone.length > 4 && phone.length <= (!numbersWithouCodeAreas ? 11 : 9)
        )
      )
        return false;
      const regexDDD = !numbersWithouCodeAreas ? /(\d{2})$/g : '';
      const phoneFormat = phone
        .split('')
        .reverse()
        .join('')
        .replace(regexDDD, '');
      if (phoneFormat.length === 9 && phoneFormat.match(/(?:[6-9]9)$/))
        return true;
      if (phoneFormat.length === 8 && phoneFormat.match(/[6-9]$/)) return true;
      return false;
    }
    if (publicUtilityNumberBR) {
      return Boolean(
        phone.length >= 3 && phone.length <= 4 && phone.match(/^(1(\d){2,3}$)/),
      );
    }
  }
  return Boolean(
    phone.match(
      !numbersWithouCodeAreas
        ? /^([1-9]{2})(9{0,1})([2-9]{1}\d{6,7})$/
        : /^(9{0,1})([2-9]{1}\d{6,7})$/,
    ),
  );
};
