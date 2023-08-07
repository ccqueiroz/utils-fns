import { mask } from '../src';
describe('[MASK: CPF_PROVIDER]', () => {
  it('Should be able to pass a cpf value and return this value with mask applied.', () => {
    expect(mask.cpf({ value: '75178780000' })).toEqual({
      unmask: '75178780000',
      value: '751.787.800-00',
    });
    expect(mask.cpf({ value: '773.053.110-06' })).toEqual({
      unmask: '77305311006',
      value: '773.053.110-06',
    });
    expect(mask.cpf({ value: '773.053.1100' })).toEqual({
      unmask: '7730531100',
      value: '773.053.110-0',
    });
    expect(mask.cpf({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
