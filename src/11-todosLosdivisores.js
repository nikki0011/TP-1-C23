// * 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

const num = parseInt(prompt("Ingrese numero"));
const pantalla = document.getElementById("pantalla");
let output = "";

if (!isNaN(num) && num > 0) {
  if (!(num % 2)) {
    output += num + " es divible por 2 ";
  }
  if (!(num % 2) && !(num % 3)) {
    output += ",y por 3";
  } else if (!(num % 3)) {
    output += num + " es divisible por 3 ";
  }
  if (
    (!(num % 2) && !(num % 3) && !(num % 5)) ||
    (!(num % 2) && !(num % 5)) ||
    (!(num % 3) && !(num % 5))
  ) {
    output += ",y por 5";
  } else if (!(num % 5)) {
    output += num + " es divisible por 5 ";
  }
  if (
    (!(num % 2) && !(num % 3) && !(num % 5) && !(num % 7)) ||
    (!(num % 2) && !(num % 3) && !(num % 7)) ||
    (!(num % 2) && !(num % 7)) ||
    (!(num % 2) && !(num % 5) && !(num % 7)) ||
    (!(num % 3) && !(num % 5) && !(num % 7)) ||
    (!(num % 3) && !(num % 7)) ||
    (!(num % 5) && !(num % 7))
  ) {
    output += ",y por 7";
  } else if (!(num % 7)) {
    output += num + " es divisible por 7 ";
  }
  if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0)
    output = num + " no es divisible por 2, ni por 3, ni por 5, ni por 7";
  pantalla.innerHTML = output;
} else {
  alert(
    "el valor deber ser numerico y mayor a 1, refresque la página y vuelva a intentarlo",
  );
}
