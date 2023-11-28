const isPrime = require('../Entreg-vel-4-main/Primo');

test('Verifica se um número é primo', () => {
  expect(isPrime(1)).toBe(false);
  expect(isPrime(2)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(4)).toBe(false);
  expect(isPrime(5)).toBe(true);
  expect(isPrime(13)).toBe(true);
  expect(isPrime(15)).toBe(false);
});
