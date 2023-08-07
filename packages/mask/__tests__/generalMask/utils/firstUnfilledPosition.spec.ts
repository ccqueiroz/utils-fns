import { firstUnfilledPosition } from './../../../src/lib/generalMask/utils/firstUnfilledPosition';
import { defaultMasks } from '../../../src/lib/generalMask/utils/defaultMask';
describe('[MASK: FIRST_UNFILLED_POSITION]', () => {
  it('should be return unfilled first position of the sentence', () => {
    const patternCpf = '999.999.999-99';

    const maskDefinitions = defaultMasks;
    let returnFirstUnfilledPosition = firstUnfilledPosition({
      value: '053179013',
      pattern: patternCpf,
      maskDefinitions,
    });
    expect(returnFirstUnfilledPosition).toBe(9);

    returnFirstUnfilledPosition = firstUnfilledPosition({
      value: '053.179.013-40',
      pattern: patternCpf,
      maskDefinitions,
    });

    expect(returnFirstUnfilledPosition).toBe(14);
    returnFirstUnfilledPosition = firstUnfilledPosition({
      value: '',
      pattern: patternCpf,
      maskDefinitions,
    });
    expect(returnFirstUnfilledPosition).toBe(0);
  });
});
