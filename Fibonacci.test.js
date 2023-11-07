const fibonaci = require('../funcoes/Fibonacci');

test('os 10 primeiros números da contagem fibonacci devem ser os corretos', () => {
    expect(fibonaci(10)).toMachObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});
test('os 2 primeiros números da contagem fibonacci devem ser os corretos', () => {
    expect(fibonaci(2)).toMachObject([0, 1]);
});