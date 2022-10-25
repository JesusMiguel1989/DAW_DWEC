/*
Repite el ejercicio anterior, pero con un array multidimensional
*/

let nombres = [];//array multidimensional
let cadena;
let i = 0;//variable del programa

cadena = prompt("Dime un  nombre, fin para terminar");

while (cadena!="fin") {
    //metemos dentro del bucle la creaccion para que no nos repita siempre el mismo array

    nombres[i]=[cadena,cadena.length];
    i++;

    cadena = prompt("Dime un  nombre, fin para terminar")
}

for (i = 0; i < nombres.length; i++) {
    for(let j=0;j<2;j++){
        document.write(nombres[i][j] + " ");
    }
    document.write(" <br>");
}