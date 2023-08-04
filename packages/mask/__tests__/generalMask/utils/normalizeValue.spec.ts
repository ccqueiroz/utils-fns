import { defaultMasks } from '../../../src/lib/generalMask/utils/defaultMask';
import { normalizeValue } from '../../../src/lib/generalMask/utils/normalizeValue';
import { removePattern } from '../../../src/lib/generalMask/utils/removePattern';
describe('[MASK: NORMALIZE_VALUE]', () => {
  it('Should be passed a string with apply patterns and returned this string without pattern', () => {
    const maskDefinitions = defaultMasks;
    const patternCpf = '999.999.999-99';
    const valueCpf = '053.179.013-40';
    const previousValueCpf = '053.179.013-4';
    let removedPattern = removePattern(patternCpf, patternCpf, maskDefinitions);
    let normalizeInput = normalizeValue({
      value: valueCpf,
      previousValue: previousValueCpf,
      pattern: patternCpf,
      maskDefinitions,
      allowEmpty: true,
      removedPattern,
    });

    expect(normalizeInput).toEqual('05317901340');

    const patternFooBar = 'Faa-Bar';
    const valueFooBar = 'Foo-Bar';
    removedPattern = removePattern(
      patternFooBar,
      patternFooBar,
      maskDefinitions,
    );
    normalizeInput = normalizeValue({
      value: valueFooBar,
      pattern: patternFooBar,
      maskDefinitions,
      allowEmpty: true,
      removedPattern,
    });
    expect(normalizeInput).toEqual('ooa');
  });
  it('Should be passed a string without patterns and returned this string without pattern', () => {
    const maskDefinitions = defaultMasks;
    const patternCpf = '999.999.999-99';
    const valueCpf = '05317901340';
    const previousValueCpf = '0531790134';
    let removedPattern = removePattern(patternCpf, patternCpf, maskDefinitions);
    let normalizeInput = normalizeValue({
      value: valueCpf,
      previousValue: previousValueCpf,
      pattern: patternCpf,
      maskDefinitions,
      allowEmpty: true,
      removedPattern,
    });

    expect(normalizeInput).toEqual('05317901340');

    const patternFooBar = 'FAa-Bar';
    const valueFooBar = 'ooa';
    removedPattern = removePattern(
      patternFooBar,
      patternFooBar,
      maskDefinitions,
    );
    normalizeInput = normalizeValue({
      value: valueFooBar,
      pattern: patternFooBar,
      maskDefinitions,
      allowEmpty: true,
      removedPattern,
    });
    expect(normalizeInput).toEqual('ooa');

    const patternError = '99999-999';
    const valueError = '';
    removedPattern = removePattern(patternError, patternError, maskDefinitions);
    normalizeInput = normalizeValue({
      value: valueError,
      pattern: patternError,
      maskDefinitions,
      allowEmpty: true,
      removedPattern,
    });
    expect(normalizeInput).toEqual('');
  });
});
