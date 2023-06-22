import { normalizeWords } from './../src/lib/normalizeWords/index';
describe('[UTILS: NORMALIZE_WORDS]', () => {
  it('Should remove accents from letters and return text without accents', () => {
    expect(normalizeWords('Ceará')).toEqual('Ceara');
    expect(normalizeWords('Ceará Criança São Paulo')).toEqual(
      'Ceara Crianca Sao Paulo',
    );
    expect(normalizeWords('Fortaleza')).toEqual('Fortaleza');
    expect(normalizeWords('Jalapeños')).toEqual('Jalapenos');
  });
});
