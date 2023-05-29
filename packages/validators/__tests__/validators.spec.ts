import { validators } from '../src';
describe('[VALIDATORS: VALIDATORS]', () => {
  it('Should be importing and exporting validators factory', () => {
    expect(validators).toBeDefined();
    expect(typeof validators).toBe('object');
  });
});
