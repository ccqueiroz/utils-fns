import { mask } from '../src';
describe('[MASK: PHONE_PROVIDER]', () => {
  it('Should be able to pass a phone numbering and return a this numbering masked according to the phone type.', () => {
    expect(
      mask.phone({
        value: '911',
      }),
    ).toEqual({
      unmask: '911',
      value: '911',
    });
    expect(
      mask.phone({
        value: '9114',
      }),
    ).toEqual({
      unmask: '9114',
      value: '911-4',
    });
    expect(
      mask.phone({
        value: '8599999999',
      }),
    ).toEqual({
      unmask: '8599999999',
      value: '(85) 9999-9999',
    });
    expect(
      mask.phone({
        value: '85999999999',
      }),
    ).toEqual({
      unmask: '85999999999',
      value: '(85) 99999-9999',
    });
    expect(
      mask.phone({
        value: '85999999999',
      }),
    ).toEqual({
      unmask: '85999999999',
      value: '(85) 99999-9999',
    });
  });
  it('Should be able to pass a international phone numbering and pass too param internationalNumber and return this numbering masked according to the international mask.', () => {
    expect(
      mask.phone({
        value: '558599999999',
        internationalNumber: true,
      }),
    ).toEqual({
      unmask: '558599999999',
      value: '+55 85 9999-9999',
    });
    expect(
      mask.phone({
        value: '5585999999999',
        internationalNumber: true,
      }),
    ).toEqual({
      unmask: '5585999999999',
      value: '+55 85 99999-9999',
    });
    expect(
      mask.phone({
        value: '+55 85 9999-9999',
        internationalNumber: true,
      }),
    ).toEqual({
      unmask: '558599999999',
      value: '+55 85 9999-9999',
    });
    expect(
      mask.phone({
        value: '',
        internationalNumber: true,
      }),
    ).toEqual({
      unmask: '',
      value: '',
    });
  });
  it('Should be able to pass a numbering and pass too param customPattern phone and return this numbering masked according to the custom pattern mask.', () => {
    expect(
      mask.phone({
        value: '393461234567',
        customPattern: '+99 999 999-9999',
      }),
    ).toEqual({
      unmask: '393461234567',
      value: '+39 346 123-4567',
    });
    expect(
      mask.phone({
        value: '393461234567',
        customPattern: '+99 (999) 999-9999',
      }),
    ).toEqual({
      unmask: '393461234567',
      value: '+39 (346) 123-4567',
    });
    expect(
      mask.phone({
        value: '393461',
        customPattern: '+99 (999) 999-9999',
      }),
    ).toEqual({
      unmask: '393461',
      value: '+39 (346) 1',
    });
  });
});
