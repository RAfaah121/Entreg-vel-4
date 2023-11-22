function contarElementos(arr, elemento) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === elemento) {
        count++;
      }
    }
    return count;
  }
  
  module.exports = contarElementos;
  