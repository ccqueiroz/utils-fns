import { mask } from './../../src/lib/index';
describe('[MASK: GENERAL_MASK]', () => {
  it('teste general mask', () => {
    const patternCpf = '999.999.999-99';
    expect(
      mask.generalMask({
        pattern: patternCpf,
        value: '05317901340',
      }),
    ).toBe('053.179.013-40');
  });
});
