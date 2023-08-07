import { mask } from '../src';
describe('[MASK: CEP_PROVIDER]', () => {
  it('Should be able to pass a zip code value and return this value with mask applied.', () => {
    expect(mask.cep({ value: '89015133' })).toEqual({
      unmask: '89015133',
      value: '89015-133',
    });
    expect(mask.cep({ value: '89015-133' })).toEqual({
      unmask: '89015133',
      value: '89015-133',
    });
    expect(mask.cep({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
