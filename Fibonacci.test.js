const fibonacci = require('../Entreg-vel-4-main/Fibonacci');

test('Calcula a sequência de Fibonacci corretamente', () => {
  expect(fibonacci(0)).toBe(0);
  expect(fibonacci(1)).toBe(1);
  expect(fibonacci(5)).toBe(5);
  expect(fibonacci(10)).toBe(55);
});
