/*
Que pida un texto y lo muestre por pantalla invertido
*/

var texto;//cadena
var longitud;//numerico

do {
    //pedimos la palabra
    texto = prompt("Dime una frase y lo leeras del reves");
    if(!isNaN(texto)){
        alert("no es un string");
    }
} while (!isNaN(texto));

//calculamo sla lonitud
longitud=texto.length;

//recorremos el texto y lo imprimimos del reves
for(let i=longitud;i>=0;i--){
    document.write(texto.charAt(i))
}