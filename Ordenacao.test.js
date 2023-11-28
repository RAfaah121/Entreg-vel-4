const ordenarArray = require('../Entreg-vel-4-main/Ordenacao');

test('Ordena o array corretamente', () => {
  const arr = [5, 3, 8, 1, 2];
  expect(ordenarArray(arr)).toEqual([1, 2, 3, 5, 8]);
});
