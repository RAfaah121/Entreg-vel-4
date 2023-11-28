const contarElementos = require('../Entreg-vel-4-main/Contagem');

test('Conta elementos corretamente', () => {
  const arr = [1, 2, 3, 4, 4, 4, 5, 5];
  expect(contarElementos(arr, 4)).toBe(3);
  expect(contarElementos(arr, 5)).toBe(2);
});
