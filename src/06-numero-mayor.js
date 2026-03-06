// * 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const num = parseInt(prompt("Ingrese un numero"));
const num2 = parseInt(prompt("Ingrese otro"));
const pantalla = document.getElementById("pantalla");

if (!isNaN(num) && !isNaN(num2)) {
  if (num > num2) {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero mayor es:  </span> " +
      "<b>" +
      num +
      "</b>";
  } else if (num === num2) {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>Ambos números son iguales  </span> ";
  } else {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero mayor es:  </span> " +
      "<b>" +
      num2 +
      "</b>";
  }
} else {
  alert(
    "Algún dato ingresado no es numerico, recargue la página e intente nuevamente"
  );
}
