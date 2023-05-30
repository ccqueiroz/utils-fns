import { ParamsPhoneValidator } from './../src/lib/contracts/phone/index';
import validators from '@utils-fns/validators/src/lib/index';

describe('[VALIDATOR: PHONE]', () => {
  it('Should be return false value when no arguments are passed to the phone validation', () => {
    expect(validators.phone({})).toBeFalsy();
  });
  it('Should be return false value when phone argument its not satisfy pattern validation', () => {
    expect(validators.phone({ phone: '988283' })).toBeFalsy();
  });
  it('Should be return false value when phone arguments passed are not number phone format', () => {
    expect(validators.phone({ phone: '912jkwe9232+102932' })).toBeFalsy();
  });
  it('Should be return false value when phone arguments not satisfy param paramsPhoneValidator.customPatternPhone', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      customPatternPhone: {
        coutryCode: RegExp(/^66/),
        areaStateCode: RegExp(/9{0,1}/),
        phoneNumber: RegExp(/([2-9]{1}\d{6,7})$/),
      },
    };
    expect(
      validators.phone({
        phone: '558599999999',
        paramsPhoneValidator: paramsPhoneValidator,
      }),
    ).toBeFalsy();
    const paramsPhoneValidatorErroRegex: ParamsPhoneValidator = {
      customPatternPhone: {
        coutryCode: RegExp(/^(\+)66/),
        areaStateCode: RegExp(/9{0,1}/),
        phoneNumber: RegExp(/([2-9]{1}\d{6,7})$/),
      },
    };
    expect(
      validators.phone({
        phone: '558599999999',
        paramsPhoneValidator: paramsPhoneValidatorErroRegex,
      }),
    ).toBeFalsy();
  });
  it('Should be return true value when phone arguments satisfy param paramsPhoneValidator.customPatternPhone', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      customPatternPhone: {
        coutryCode: RegExp(/66/),
        areaStateCode: RegExp(/9{0,1}/),
        phoneNumber: RegExp(/([2-9]{1}\d{6,7})$/),
      },
    };
    expect(
      validators.phone({
        phone: '66934451006',
        paramsPhoneValidator,
      }),
    ).toBeTruthy();
  });
  it('Should be return value true when phone arguments satisfy params paramsPhoneValidator.canReceiveInternationalNumbers to be truthy', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      canReceiveInternationalNumbers: true,
    };
    expect(
      validators.phone({ phone: '+1 (541) 708-3275', paramsPhoneValidator }),
    ).toBeTruthy();
  });
  it('Should be return false value when are passed paramsPhoneValidator.customPatternPhone and paramsPhoneValidator.canReceiveInternationalNumbers, but the validation must occur for the paramsPhoneValidator.canReceiveInternationalNumbers', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      canReceiveInternationalNumbers: true,
      customPatternPhone: {
        coutryCode: RegExp(/66/),
        areaStateCode: RegExp(/9{0,1}/),
        phoneNumber: RegExp(/([2-9]{1}\d{6,7})$/),
      },
    };
    expect(
      validators.phone({ phone: '+1 (541) 708-3275', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '66934451006', paramsPhoneValidator }),
    ).toBeTruthy();
  });
  it('Should be return true value when phone arguments satisfy pattern mobile number when paramsPhoneValidator.onlyMobilePhoneBR to be truthy', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      onlyMobilePhoneBR: true,
    };
    expect(
      validators.phone({ phone: '(11) 98509-0675', paramsPhoneValidator }),
    ).toBeTruthy();
    expect(
      validators.phone({ phone: '11985090675', paramsPhoneValidator }),
    ).toBeTruthy();
    expect(
      validators.phone({ phone: '(88) 3375-3727', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '8833753727', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '12345', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '(88) 8573-2530', paramsPhoneValidator }),
    ).toBeTruthy();
  });
  it('Should be return true value when phone arguments satisfy pattern mobile number when paramsPhoneValidator.onlyMobilePhoneBR to be truthy and paramsPhoneValidator.numberWithoutCodeAreas', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      onlyMobilePhoneBR: true,
      numberWithoutCodeAreas: true,
    };
    expect(
      validators.phone({ phone: '97948-9936', paramsPhoneValidator }),
    ).toBeTruthy();
    expect(
      validators.phone({ phone: '(11) 97948-9936', paramsPhoneValidator }),
    ).toBeFalsy();
  });
  it('Should be return true value when phone arguments satisfy pattern utility number BR', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      publicUtilityNumberBR: true,
    };
    expect(
      validators.phone({ phone: '230+1', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '190', paramsPhoneValidator }),
    ).toBeTruthy();
    expect(
      validators.phone({ phone: '133-2', paramsPhoneValidator }),
    ).toBeTruthy();
  });
  it('Should be return true value when phone arguments satisfy pattern default to validation phones BR with DDD', () => {
    expect(validators.phone({ phone: '(11) 99385-3318' })).toBeTruthy();
    expect(validators.phone({ phone: '(11) 91385-3318' })).toBeFalsy();
    expect(validators.phone({ phone: '(88) 3805-6232' })).toBeTruthy();
    expect(validators.phone({ phone: '(88) 1805-6232' })).toBeFalsy();
  });
  it('Should be return true value when phone arguments satisfy pattern default to validation phones BR without DDD', () => {
    const paramsPhoneValidator: ParamsPhoneValidator = {
      numberWithoutCodeAreas: true,
    };
    expect(
      validators.phone({ phone: '(11) 99385-3318', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '99385-3318', paramsPhoneValidator }),
    ).toBeTruthy();
    expect(
      validators.phone({ phone: '(88) 3805-6232', paramsPhoneValidator }),
    ).toBeFalsy();
    expect(
      validators.phone({ phone: '3805-6232', paramsPhoneValidator }),
    ).toBeTruthy();
    expect(
      validators.phone({ phone: '1805-6232', paramsPhoneValidator }),
    ).toBeFalsy();
  });
});
