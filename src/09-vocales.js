// * 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen

const frase = prompt('Ingrese la frase a examinar')
const pantalla = document.getElementById("pantalla");
const vocales = "aeiouAEIOU";
let vocalEncontradas= ""

for (let i = 0; i < frase.length; i++) {
  // Extrae el carácter actual
  let letra = frase.substring(i, i + 1);
  letra = letra.toLowerCase()
  
  // Comprueba si es una vocal
  if (vocales.indexOf(letra) !== -1) {
    vocalEncontradas = vocalEncontradas + letra
  }
}

pantalla.innerHTML =
      "<span class='text-secundary ms-3'>Frase ingresada:  </span> " +
      "<b>" +
      frase +
      "</b><br> <span class='text-secundary ms-3'>Vocales Encontradas:  </span> " +
      "<b>" +
      vocalEncontradas;