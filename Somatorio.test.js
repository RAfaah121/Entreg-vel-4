const somatorio = require('../Somatorio');

test('Calcula o somatório corretamente', () => {
  expect(somatorio(5)).toBe(15); // O somatório de 1 a 5 é 15
  expect(somatorio(10)).toBe(55); // O somatório de 1 a 10 é 55
  expect(somatorio(3)).toBe(6); // O somatório de 1 a 3 é 6
});
