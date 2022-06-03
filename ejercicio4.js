function invertir(texto) {
  let invertido = "";

  for (let letra of texto) {
    invertido = letra + invertido;
  }

  return invertido;
}

console.log("Texto invertido:", invertir("Hola"));
