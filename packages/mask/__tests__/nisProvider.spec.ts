import { mask } from '../src';
describe('[MASK: NIS_PROVIDER]', () => {
  it('Should be able to pass a nis value and return this value with mask applied.', () => {
    expect(mask.nis({ value: '95726254769' })).toEqual({
      unmask: '95726254769',
      value: '957.26254.76-9',
    });
    expect(mask.nis({ value: '111.83280.90-9' })).toEqual({
      unmask: '11183280909',
      value: '111.83280.90-9',
    });
    expect(mask.nis({ value: '111.832809' })).toEqual({
      unmask: '111832809',
      value: '111.83280.9',
    });
    expect(mask.nis({ value: '' })).toEqual({
      unmask: '',
      value: '',
    });
  });
});
