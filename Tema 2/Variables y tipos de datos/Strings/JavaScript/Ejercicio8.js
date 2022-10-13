/*
Que pida un texto y lo escriba en mayúsculas
*/

var texto = ""; //string

//pedimos y exigimos que es un texto
do {
    //pedimos la palabra
    texto = prompt("Dime una frase y te lo pondre en Mayusculas");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//lo pasamos a mayusculas
texto=texto.toUpperCase();

//mostramos
document.write(texto);
alert(texto);