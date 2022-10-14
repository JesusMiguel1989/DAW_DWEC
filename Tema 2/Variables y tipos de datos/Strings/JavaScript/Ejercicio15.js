/*
Pide una cadena y muéstrela mediante un cuadro de diálogo “alert” entre comillas
*/

var texto = ""; //string

//pedimos y exigimos que es un texto1
do {
    //pedimos la palabra
    texto = prompt("Dime una frase inicial");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

alert('\"'+texto+'\"');