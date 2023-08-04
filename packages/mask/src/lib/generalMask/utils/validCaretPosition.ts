import { MasksInterface } from '../../contracts';
import { maskDefinition } from './maskDefinition';

export const validCaretPositions = (pattern: string, maskDefinitions: any) => {
  const validPosition: Array<number> = [];

  if (!pattern || typeof pattern !== 'string' || pattern.length === 0) {
    return validPosition;
  }

  if (
    maskDefinition(pattern.charAt(0) as keyof MasksInterface, maskDefinitions)
  ) {
    validPosition.push(0);
  }
  for (let index = 1; index < pattern.length; index++) {
    const charBefore = pattern.charAt(index - 1) as keyof MasksInterface;
    const charAfter = pattern.charAt(index) as keyof MasksInterface;

    if (
      maskDefinition(charBefore, maskDefinitions) ||
      maskDefinition(charAfter, maskDefinitions)
    ) {
      validPosition.push(index);
    }
  }

  if (
    maskDefinition(
      pattern.charAt(pattern.length - 1) as keyof MasksInterface,
      maskDefinitions,
    )
  ) {
    validPosition.push(pattern.length);
  }

  return validPosition;
};
