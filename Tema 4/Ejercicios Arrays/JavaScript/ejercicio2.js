/*
En el ejercicio hay que crear dos arrays unidimensionales. 
El script pedirá que introduzcas nombres de personas hasta que pongas la palabra fin. 
Cada nombre de persona debe agregarse al primer array (fin no debe agregarse al primer array) 
y conforme se agrega un nombre al primer array se agrega la longitud del nombre al segundo array. 
Para finalizar mostrara en una página web una línea para cada nombre y su longitud.
*/

let nombres = [];//array de cadenas
let nombre;//variable que recoge el promt
let longitud = []; //array numerico
let i=0;//variable del programa

nombre=prompt("Dime un  nombre");
nombre=nombre.toLocaleLowerCase();
while(nombre!="fin"){
    nombres[i]=nombre;
    longitud[i]=nombre.length;
    i++;

    nombre=prompt("Dime un  nombre")
}

for(i=0;i<nombres.length;i++){
    document.write(nombres[i] + " tiene " + longitud[i] + " caracteres<br>");
}