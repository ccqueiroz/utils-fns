import { stateRegistrationDistritoFederal } from '../../src/lib/stateRegistrationValidator/states/DF/index';
describe('[VALIDATORS: STATE_REGISTRATION_DISTRITO_FEDERAL]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Distrito Federal', () => {
    expect(stateRegistrationDistritoFederal('')).toBeFalsy();
    expect(stateRegistrationDistritoFederal('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationDistritoFederal('218355732')).toBeFalsy();
    expect(
      stateRegistrationDistritoFederal('01460313986800146031398680'),
    ).toBeFalsy();
    expect(stateRegistrationDistritoFederal('0754282300183')).toBeTruthy();
    expect(stateRegistrationDistritoFederal('0754282300193')).toBeFalsy();
    expect(stateRegistrationDistritoFederal('0754282300185')).toBeFalsy();
    expect(stateRegistrationDistritoFederal('0732425400100')).toBeTruthy();
  });
});
