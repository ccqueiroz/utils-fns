import { mask } from '../src';
describe('[MASK: CNPJ_PROVIDER]', () => {
  it('Should be able to pass a cnpj value and return this value with mask applied.', () => {
    expect(mask.cnpj({ value: '46824095000169' })).toEqual({
      unmask: '46824095000169',
      value: '46.824.095/0001-69',
    });
    expect(mask.cnpj({ value: '24.037.267/0001-11' })).toEqual({
      unmask: '24037267000111',
      value: '24.037.267/0001-11',
    });
    expect(mask.cnpj({ value: '24.037.2670' })).toEqual({
      unmask: '240372670',
      value: '24.037.267/0',
    });
    expect(mask.cnpj({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
