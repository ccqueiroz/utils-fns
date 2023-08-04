import { defaultMasks } from '../../../src/lib/generalMask/utils/defaultMask';
import { removePattern } from '../../../src/lib/generalMask/utils/removePattern';
describe('[MASK: REMOVE_PATTERNS]', () => {
  it('should be pass string with paterns and must return an string without pattern.', () => {
    const patternCpf = '999.999.999-99';
    const valueCpf = '053.179.013-40';
    const maskDefinitions = defaultMasks;
    let returnRemovePattern = removePattern(
      valueCpf,
      patternCpf,
      maskDefinitions,
    );

    expect(returnRemovePattern).toEqual('05317901340');

    const patternPhone = '99 9 9999-9999';
    const valuePhone = '85 9 9516-4703';
    returnRemovePattern = removePattern(
      valuePhone,
      patternPhone,
      maskDefinitions,
    );
    expect(returnRemovePattern).toEqual('85995164703');

    const patternError = '123999-99';
    const valueError = '123789-65';
    returnRemovePattern = removePattern(
      valueError,
      patternError,
      maskDefinitions,
    );
    expect(returnRemovePattern).toEqual('78965');
  });
});
