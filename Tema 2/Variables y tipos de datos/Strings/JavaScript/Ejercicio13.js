/*
Si le pasamos una cadena con un nombre y apellidos, 
realizar un programa que muestre las iniciales en mayúsculas.
*/

var texto = "", texto2=""; //string
var longitud = 0;//numerico
var array;//array

//pedimos y exigimos que es un texto1
do {
    //pedimos la palabra
    texto = prompt("Dime tu nombre y tu apellido");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//calculamos la longitud del texto y pasamos a minusculas

texto=texto.toLowerCase();

//dividimos el texto en un array , cada posicion una palabra
array=texto.split(" ");

//Recorremos el array para poner la primera letra en mayusculas
for(let i=0;i<array.length;i++){
    array[i]=array[i].charAt(0).toUpperCase() + array[i].slice(1);
    //usamos slice(1) para decirle que tiene que agregar desde la posicion 1
}

//unimos todos los fragmentos mediante concatenacion
for(let i=0;i<array.length;i++){
    texto2=texto2+array[i]+"&nbsp";
}

document.write("Te llamas : " + texto2 + "?");
