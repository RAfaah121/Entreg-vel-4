function soma(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++){
        total +- numbers[i];
    }
    return total;
}

console.log(soma([1, 2, 3, 4, 5]));
console.log(soma([10, 20, 30]));

module.exports = soma