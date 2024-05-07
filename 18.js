function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

  if (a === 0 || b === 0) {
    return 0;
  }

  var producto = 1;
  var inicio = Math.min(a, b);
  var fin = Math.max(a, b);

  if (inicio < 0 && fin > 0) {
    return 0;
  }

  for (var i = inicio; i <= fin; i++) {
    producto *= i;
  }
  
  return producto;
}


module.exports = productoEntreNúmeros;
