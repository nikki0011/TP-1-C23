// * 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

const num = parseInt(prompt('Ingrese numero'))
const pantalla=document.getElementById('pantalla')

if(!isNaN(num) && num > 1){
    if(!(num%2)){
pantalla.innerHTML = num + " es divisible por 2"
}else if(!(num%3)){
pantalla.innerHTML = num + " es divisible por 3"
}else if(!(num%5)){
pantalla.innerHTML = num + " es divisible por 5"
}else if(!(num%7)){
pantalla.innerHTML = num + " es divisible por 7"
}else{
    pantalla.innerHTML = num + " no es divisible por 2, ni por 3, ni por 5, ni por 7"
}

}else{
   alert("el valor deber ser numerico y mayor a 1, refresque la página y vuelva a intentarlo") 
}