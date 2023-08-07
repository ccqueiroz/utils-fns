import { goNestedValidPosition } from './../../../src/lib/generalMask/utils/goNestedValidPosition';
describe('[MASK: GO_NESTED_VALID_POSITION]', () => {
  it('should set selection range based on valid positions', () => {
    const mockTarget: any = {
      setSelectionRange: jest.fn(),
    };
    const validPosition = [2, 5, 8];
    goNestedValidPosition(mockTarget, 3, validPosition, 'left');
    expect(mockTarget.setSelectionRange).toHaveBeenCalledWith(2, 2);

    goNestedValidPosition(mockTarget, 3, validPosition, 'right');
    expect(mockTarget.setSelectionRange).toHaveBeenCalledWith(5, 5);

    goNestedValidPosition(mockTarget, 9, validPosition, 'right');
    expect(mockTarget.setSelectionRange).toHaveBeenCalledTimes(3);

    goNestedValidPosition(mockTarget, 1, validPosition, 'left');
    expect(mockTarget.setSelectionRange).toHaveBeenCalledWith(2, 2);
  });
  it('should handle undefined caretPos', () => {
    const mockTarget: any = {
      setSelectionRange: jest.fn(),
    };
    const validPosition = [2, 5, 8];

    goNestedValidPosition(mockTarget, 10, validPosition, 'right');
    expect(mockTarget.setSelectionRange).toHaveBeenCalledTimes(1);

    goNestedValidPosition(mockTarget, 1, validPosition, 'left');
    expect(mockTarget.setSelectionRange).toHaveBeenCalledWith(2, 2);
  });
});
