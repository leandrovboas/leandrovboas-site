import { getAnosDeExperiencia } from './anosDeExperiencia';

describe('Experiencia', () => {
  describe('anosDeExperiencia()', () => {
    it('should return the number expected when passed as a parameter the value two thousand and ten ', () => {
      const anoInicial = 2010;
      const anoFinal = 2020;
      const expected = 10;
      const result = getAnosDeExperiencia(anoInicial, anoFinal);
      expect(result).toEqual(expected);
    });
  });
});
