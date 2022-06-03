function palindromo(texto) {
  let invertido = texto.split("").reverse().join("");

  invertido == texto
    ? console.log("Es palindromo")
    : console.log("No es palindromo");
}

palindromo("alan");
