// * 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// Nota: Tener en cuenta la siguiente función: parseInt

const num = parseInt(prompt('Ingrese un numero a sumar'))
const num2 = parseInt(prompt('Ingrese otro'))

document.writeln("<span class='text-secundary ms-3'>La suma de los numeros ingresados es:  </span> " + "<b>" +(num + num2)+"</b>")