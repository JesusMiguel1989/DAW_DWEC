/*
Que pida un texto y lo divida en dos partes. 
Si el texto tiene un número impar de caracteres la primera parte debe de tener un carácter más.
*/

var texto = "", texto2 = ""; //string
var longitud;// numericos

//pedimos y exigimos que es un texto
do {
    //pedimos la palabra
    texto = prompt("Dime una frase y te lo pondre en dos lineas con una sorpresa");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//contamos caracteres
longitud = texto.length;

//comprobamos si es par o impar e insertamos un salto de linea
if (longitud % 2 == 0) {
    texto2 = texto.slice(0, longitud / 2);
    texto2 = texto2 + "<br>";
    texto2 = texto2 + texto.slice(longitud / 2, longitud);
    document.write(texto2);
} else {
    texto2 = texto.slice(0, Math.round(longitud / 2));
    texto2 = texto2 + "<br>";
    texto2 = texto2 + texto.slice(Math.round(longitud / 2), longitud);
    document.write(texto2);
}