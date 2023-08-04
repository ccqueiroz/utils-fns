import { defaultMasks } from '../../../src/lib/generalMask/utils/defaultMask';
import { validCaretPositions } from '../../../src/lib/generalMask/utils/validCaretPosition';
describe('[MASK: VALIDATE_CARE_POSITION]', () => {
  it('should return an array with the position of each char that makes up the pattern passed as an argument.', () => {
    const patternCpf = '999.999.999-99';

    let positionsByPattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const maskDefinitions = defaultMasks;
    let returnValidCaretPosition = validCaretPositions(
      patternCpf,
      maskDefinitions,
    );

    expect(positionsByPattern).toEqual(returnValidCaretPosition);

    returnValidCaretPosition = [];
    const patternName = 'FooBar';

    positionsByPattern = [4, 5];
    returnValidCaretPosition = validCaretPositions(
      patternName,
      maskDefinitions,
    );
    expect(positionsByPattern).toEqual(returnValidCaretPosition);
    returnValidCaretPosition = [];

    const patternPhone = '9 9999-9999';
    positionsByPattern = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    returnValidCaretPosition = validCaretPositions(
      patternPhone,
      maskDefinitions,
    );
    expect(positionsByPattern).toEqual(returnValidCaretPosition);

    returnValidCaretPosition = [];

    const patternError = '';
    positionsByPattern = [];
    returnValidCaretPosition = validCaretPositions(
      patternError,
      maskDefinitions,
    );
    expect(positionsByPattern).toEqual(returnValidCaretPosition);
    returnValidCaretPosition = [];
  });
});
