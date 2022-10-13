/*
Script que pida un texto y muestre su longitud
*/

var texto;//string
var longitud;//numerico

do {
    //pedimos la palabra
    texto = prompt("Dime una frase y te dire su longitud");
    if(!isNaN(texto)){
        alert("no es un string");
    }
} while (!isNaN(texto));


//calculamos longitud
longitud = texto.length;

//imprimimos resultado
document.write("El texto: " + texto + " tiene " + longitud + " caracteres");
alert("El texto: " + texto + " tiene " + longitud + " caracteres");