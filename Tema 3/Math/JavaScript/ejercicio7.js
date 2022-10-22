/*
Realizar un programa que genere un número aleatorio entre 1 y 50 
que será el número de líneas que tiene que escribir. 
Para cada línea calculará otro número entre 1 y 50 
y escribirá tantos espacios en blanco como el número aleatorio y después el número
*/

let numero;//numero aleatorio filas
let numeroesp;//numero espacios
let cad="";//asterisco para probar

let i,j;//indices for

numero=Math.round(Math.random()*(50-1)+1);

for(i=0;i<numero;i++){
    cad="";
    numeroesp=Math.round(Math.random()*(50-1)+1);
    for(j=0;j<numeroesp;j++){
        cad=cad+"*";
    }
    document.write(cad+numeroesp+"<br>");
}