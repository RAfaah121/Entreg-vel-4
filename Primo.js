function isPrime(numero) {
  var n = parseInt(numero);
  var primo = true;

  if (n <= 1) {
    primo = false;
  } else {
    for (var i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        primo = false;
        break;
      }
    }
  }

  return primo;
}

module.exports = isPrime;
