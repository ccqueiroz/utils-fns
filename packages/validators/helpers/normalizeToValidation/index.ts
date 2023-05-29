type NormalizeToValidation = {
  value?: string | number;
  length?: number;
  canRepeatNumber?: boolean;
};
export const normalizeToValidation = ({
  value,
  length,
  canRepeatNumber = false,
}: NormalizeToValidation): string | undefined => {
  if (!value) return undefined;

  value = value.toString()?.replace(/\D/g, '');

  if (length) {
    if (value.length !== length) return undefined;
  }

  if (!canRepeatNumber) {
    const invalidSequences = new Set(
      Array.from(Array(10).keys()).map((f) => String(f).repeat(length ?? 0)),
    );
    if (invalidSequences.has(value)) return undefined;
  }

  return value;
};
