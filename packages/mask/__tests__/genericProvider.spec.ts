import { mask } from '../src';
describe('[MASK: GENERIC_PROVIDER]', () => {
  it('should are passed how arguments the pattern and value without mask/pattern and the return value must be with the format of the pattern/mask passed with argument and unmask value withou pattern/mask.', () => {
    expect(mask.generic({ value: '89015133', pattern: '99999-999' })).toEqual({
      unmask: '89015133',
      value: '89015-133',
    });
    expect(
      mask.generic({ value: '999999999', pattern: '(85) 9 9999-9999' }),
    ).toEqual({
      unmask: '999999999',
      value: '(85) 9 9999-9999',
    });
    expect(mask.generic({ value: '', pattern: '(85) 9 9999-9999' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
