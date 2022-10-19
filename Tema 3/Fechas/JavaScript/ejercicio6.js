/*
Programa que reciba un texto y devuelva una letra y su posición al azar.
*/

let cadena=""; //string
let aleatorio;//int aleatorio

cadena = prompt("Dime una cadena");

aleatorio=Math.round(Math.random()*(cadena.length-1));
aleatorio1=aleatorio+1;

document.write("El caracter aleatorio es : " + cadena.charAt(aleatorio) + " y su posicion es " + aleatorio1);
