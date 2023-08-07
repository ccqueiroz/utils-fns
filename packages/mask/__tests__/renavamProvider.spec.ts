import { mask } from '../src';
describe('[MASK: RENAVAM_PROVIDER]', () => {
  it('Should be able to pass a renavam value and return this value with mask applied.', () => {
    expect(mask.renavam({ value: '97553114045' })).toEqual({
      unmask: '97553114045',
      value: '97553114045',
    });
    expect(mask.renavam({ value: '9755311' })).toEqual({
      unmask: '9755311',
      value: '9755311',
    });
    expect(mask.renavam({ value: '97553114045999999999999' })).toEqual({
      unmask: '97553114045',
      value: '97553114045',
    });
    expect(mask.renavam({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
