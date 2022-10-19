/*
Realiza un script que pida un nombre y dos apellidos e indique el tiempo que se tardó en introducir los datos en segundos 
con un solo decimal. La salida sería algo así como:
En introducir Luís Perez Alonso ha tardado 25.7 segundos.
*/

let tiempoini= new Date();
let nombre;//donde guardar el nombre
let diferencia;//numerico

nombre=prompt("Dime tu nombre y apellidos");

let tiempofinal = new Date();

diferencia=(tiempofinal-tiempoini)/1000;

tiempo.value="Has tardado "+diferencia+" segundos";