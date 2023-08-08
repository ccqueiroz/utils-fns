import { formatValue } from './../../../src/lib/maskNumbers/utils/formatValue';
describe('[MASK: FORMAT_VALUE_MASK_NUMBERS]', () => {
  it('should be possible to pass a value of type string | number | null and return the value with mask and unmask.', () => {
    let numberFormated = formatValue({
      value: 123.98,
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
    });
    expect(numberFormated).toEqual({ unmask: '123.98', value: '123,98' });

    numberFormated = formatValue({
      value: 123.98,
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'en-US',
    });
    expect(numberFormated).toEqual({ unmask: '123.98', value: '123.98' });

    numberFormated = formatValue({
      value: '123.98',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
    });
    expect(numberFormated).toEqual({ unmask: '123.98', value: '123,98' });

    numberFormated = formatValue({
      value: '-123.98',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
    });
    expect(numberFormated).toEqual({ unmask: '123.98', value: '123,98' });

    numberFormated = formatValue({
      value: '-123.98',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '-123.98', value: '-123,98' });

    numberFormated = formatValue({
      value: '-123.98',
      decimalPlaces: 3,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '-123.980', value: '-123,980' });

    numberFormated = formatValue({
      value: '-12312',
      decimalPlaces: 3,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
      allowNegative: true,
      numberWithoutPonctuation: true,
    });
    expect(numberFormated).toEqual({ unmask: '-12312', value: '-12312' });

    numberFormated = formatValue({
      value: '-12312',
      decimalPlaces: 0,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '-12312', value: '-12.312' });

    numberFormated = formatValue({
      value: '',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '', value: '' });
  });
  it('should be possible to pass a value of type string | number | null and prefix and/or sufix and return the value formated with prefix and/or sufix.', () => {
    let numberFormated = formatValue({
      value: 123.98,
      decimalPlaces: 2,
      prefix: 'R$ ',
      suffix: ' Reais',
    });
    expect(numberFormated).toEqual({
      unmask: '123.98',
      value: 'R$ 123.98 Reais',
    });

    numberFormated = formatValue({
      value: '123.98',
      decimalPlaces: 2,
      prefix: 'R$ ',
      suffix: ' Reais',
    });
    expect(numberFormated).toEqual({
      unmask: '123.98',
      value: 'R$ 123.98 Reais',
    });

    numberFormated = formatValue({
      value: null,
      decimalPlaces: 2,
      prefix: 'R$ ',
      suffix: ' Reais',
    });
    expect(numberFormated).toEqual({
      unmask: '',
      value: '',
    });
  });
  it('should be possible to pass a value of type string | number | null and the locale you want to be the format of the number and the return is the value formatted according to the specified locale and unmask without formatting.', () => {
    let numberFormated = formatValue({
      value: '-1237.98',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'pt-BR',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '-1237.98', value: '-1.237,98' });

    numberFormated = formatValue({
      value: '-1237.98',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'en-US',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '-1237.98', value: '-1,237.98' });

    numberFormated = formatValue({
      value: '-1237.98',
      decimalPlaces: 2,
      prefix: '',
      suffix: '',
      locale: 'zh-CN',
      allowNegative: true,
    });
    expect(numberFormated).toEqual({ unmask: '-1237.98', value: '-1,237.98' });
  });
});
