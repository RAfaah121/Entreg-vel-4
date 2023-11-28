const somatorio = require('../Entreg-vel-4-main/Somatorio');

test('Calcula o somatório corretamente', () => {
  expect(somatorio(5)).toBe(15);
  expect(somatorio(10)).toBe(55);
  expect(somatorio(3)).toBe(6);
});
