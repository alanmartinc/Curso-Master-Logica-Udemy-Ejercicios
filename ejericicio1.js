function tablaMultiplicar(number) {
  let resultado = `# Tabla del ${number} \n`;

  for (let i = 1; i <= 10; i++) {
    let multiplicacion = number * i;
    resultado += `${i} x ${number} = ${multiplicacion} \n`;
  }

  return resultado;
}

console.log(tablaMultiplicar(5));
