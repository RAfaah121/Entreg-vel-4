const fibonacci = require('../Fibonacci');

test('Calcula a sequência de Fibonacci corretamente', () => {
  expect(fibonacci(0)).toBe(0); // O 0º número de Fibonacci é 0
  expect(fibonacci(1)).toBe(1); // O 1º número de Fibonacci é 1
  expect(fibonacci(5)).toBe(5); // O 5º número de Fibonacci é 5
  expect(fibonacci(10)).toBe(55); // O 10º número de Fibonacci é 55
});
