const calcularMDC = require('../MDC');

test('Calcula o Máximo Divisor Comum corretamente', () => {
  expect(calcularMDC(12, 8)).toBe(4);
  expect(calcularMDC(25, 15)).toBe(5);
});
