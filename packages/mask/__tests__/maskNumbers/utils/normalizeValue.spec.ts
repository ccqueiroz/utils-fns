import { normalizeValue } from './../../../src/lib/maskNumbers/utils/normalizeValue';
describe('[MASK: NORMALIZE_VALUE_MASK_NUMBERS]', () => {
  it('should be possible to pass a value of type string | number | null and return the value normalized.', () => {
    let numberNormalized = normalizeValue({
      value: 123.98,
      decimalPlaces: 2,
    });
    expect(numberNormalized).toEqual(123.98);

    numberNormalized = normalizeValue({
      value: '123.98',
      decimalPlaces: 2,
    });
    expect(numberNormalized).toEqual(123.98);

    numberNormalized = normalizeValue({
      value: '123.98',
      decimalPlaces: 1,
    });
    expect(numberNormalized).toEqual(1239.8);

    numberNormalized = normalizeValue({
      value: '-123.98',
      decimalPlaces: 3,
      allowNegative: true,
    });
    expect(numberNormalized).toEqual(-12.398);

    numberNormalized = normalizeValue({
      value: '1234567890123',
      decimalPlaces: 6,
      allowNegative: true,
    });
    expect(numberNormalized).toEqual(1234567.890123);

    numberNormalized = normalizeValue({
      value: '',
      decimalPlaces: 1,
    });
    expect(numberNormalized).toEqual('');
  });
  it('should be possible to pass a value of type string | number | null and prefix and/or sufix and return the value normalized without prefix and/or sufix.', () => {
    let numberNormalized = normalizeValue({
      value: 123.98,
      decimalPlaces: 2,
      prefix: 'R$ ',
      suffix: 'Reais',
    });
    expect(numberNormalized).toEqual(123.98);

    numberNormalized = normalizeValue({
      value: 'R$ 123.98 Reais',
      decimalPlaces: 2,
    });
    expect(numberNormalized).toEqual(123.98);

    numberNormalized = normalizeValue({
      value: 'ABCDEF',
      decimalPlaces: 2,
    });
    expect(numberNormalized).toEqual(null);
  });
});
