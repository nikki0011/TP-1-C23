// * 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const num = parseInt(prompt("Ingrese primer número"));
const num2 = parseInt(prompt("Ingrese segundo número"));
const num3 = parseInt(prompt("Ingrese tercer número"));
const pantalla = document.getElementById("pantalla");

if (!isNaN(num) && !isNaN(num2) && !isNaN(num3)) {
  if ((num > num2) && (num > num3) ) {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero mayor es:  </span> " +
      "<b>" +
      num +
      "</b>";
  } else if ((num === num2) && (num3 === num2)) {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>Ambos tres números son iguales  </span> ";
  } else if ((num2 > num) && (num2 > num3)){
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero mayor es:  </span> " +
      "<b>" +
      num2 +
      "</b>";
  }else{
     pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero mayor es:  </span> " +
      "<b>" +
      num3 +
      "</b>";
  }
} else {
  alert(
    "Algún dato ingresado no es numerico, recargue la página e intente nuevamente"
  );
}