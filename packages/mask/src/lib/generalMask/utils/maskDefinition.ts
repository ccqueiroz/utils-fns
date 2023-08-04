import { MasksInterface } from '../../contracts';

export type Char = keyof MasksInterface;

export const maskDefinition = (char: Char, maskDefinitions: MasksInterface) =>
  maskDefinitions[char];
