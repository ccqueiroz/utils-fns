import { mask } from '../src';
describe('[MASK: VOTE_REGISTER_PROVIDER]', () => {
  it('Should be able to pass a vote register value and return this value with mask applied.', () => {
    expect(mask.voteRegister({ value: '277258770140' })).toEqual({
      unmask: '277258770140',
      value: '2772.5877.0140',
    });
    expect(mask.voteRegister({ value: '4253.0481.0175' })).toEqual({
      unmask: '425304810175',
      value: '4253.0481.0175',
    });
    expect(mask.voteRegister({ value: '4253.04810' })).toEqual({
      unmask: '425304810',
      value: '4253.0481.0',
    });
    expect(mask.voteRegister({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
