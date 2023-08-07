import { mask } from '../src';
describe('[MASK: CNH_PROVIDER]', () => {
  it('Should be able to pass a cnh value and return this value with mask applied.', () => {
    expect(mask.cnh({ value: '37079809228' })).toEqual({
      unmask: '37079809228',
      value: '370798092-28',
    });
    expect(mask.cnh({ value: '370798092-28' })).toEqual({
      unmask: '37079809228',
      value: '370798092-28',
    });
    expect(mask.cnh({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
    expect(mask.cnh({ value: '3707980922837079809228' })).toEqual({
      unmask: '37079809228',
      value: '370798092-28',
    });
  });
});
