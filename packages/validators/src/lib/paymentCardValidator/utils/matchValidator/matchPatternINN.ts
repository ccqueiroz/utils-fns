export const matchPatternINN = (
  cardNumber: string,
  patternINN: number | string,
) => {
  patternINN = patternINN.toString();
  return (
    cardNumber.slice(0, patternINN.length) ===
    patternINN.slice(0, cardNumber.length)
  );
};
