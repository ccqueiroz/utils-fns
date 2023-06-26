import { stateRegistrationPara } from '../../src/lib/stateRegistrationValidator/states/PA/index';
describe('[VALIDATORS: STATE_REGISTRATION_PARA]', () => {
  it('Should return true when passed digits correctly to validate state registration into state Pará', () => {
    expect(stateRegistrationPara('')).toBeFalsy();
    expect(stateRegistrationPara('abc87GBJ198')).toBeFalsy();
    expect(stateRegistrationPara('218355732')).toBeFalsy();
    expect(stateRegistrationPara('01460313986800146031398680')).toBeFalsy();
    expect(stateRegistrationPara('156799731')).toBeTruthy();
    expect(stateRegistrationPara('158336160')).toBeTruthy();
  });
});
