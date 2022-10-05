/*
Como el ejercicio anterior peo que pida al usuario el último número de la suma
*/

var i = 0, tope = 0;;
var total = 0;

do {
    tope = parseInt(prompt("Dime el tope de la suma"));
    if (isNaN(tope)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(tope))

alert("vamos a hacer el bucle que lo recorra");
for (i = 0; i <= tope; i++) {
    total += i;
}

document.write("La suma total es: " + total)