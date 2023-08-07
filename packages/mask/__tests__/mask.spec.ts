import { mask } from '../src';
describe('[MASK: MASK]', () => {
  it('Should be importing and exporting mask factory', () => {
    expect(mask).toBeDefined();
    expect(typeof mask).toBe('object');
  });
});
