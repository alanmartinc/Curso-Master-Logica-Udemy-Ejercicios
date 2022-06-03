function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!¡.,-_?¿]/g, "");
  let resultado = 0;

  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");
    let mapa = {};

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }

    resultado = mapa[busqueda];
  } else {
    resultado = 0;
  }

  return resultado;
}

console.log(
  "Número de coincidencia de la frase: ",
  coincidencias("Hola Hola, ¿como estas?", "hola")
);
