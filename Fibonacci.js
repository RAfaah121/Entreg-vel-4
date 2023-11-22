function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      let a = 0;
      let b = 1;
      let temp;
  
      for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
      }
  
      return b;
    }
  }
  
  module.exports = fibonacci;
  