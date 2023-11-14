const { default: expect } = require('expect');
const soma = require('../funcoes/Somatorio')

test('calcula corretamente o somatório de um array de números', () => {
    expect(1, 2, 3, 4, 5).toBe(15)
});
test('calcula corretamente o somatório de um array com números maiores', () => {
    expect(10, 20, 30).toBe(60);
});