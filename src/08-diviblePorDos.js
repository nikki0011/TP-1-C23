//  * 8.- Escribe un programa que pida un número y diga si es divisible por 2

const num = parseInt(prompt("Ingrese un número"));
const pantalla = document.getElementById("pantalla");
console.log(num);

if (!isNaN(num)) {
  if (!(num % 2)) {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero " +
      num +
      " es visible por 2  </span> ";
  } else {
    pantalla.innerHTML =
      "<span class='text-secundary ms-3'>El numero " +
      num +
      " no es visible por 2 </span> ";
  }
} else {
  alert(
    "El dato ingresado no es numerico, recargue la página e intente nuevamente",
  );
}
