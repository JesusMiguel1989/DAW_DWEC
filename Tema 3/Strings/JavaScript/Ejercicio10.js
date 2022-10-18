/*
Realizar un programa que compruebe si una cadena leída por teclado comienza por una subcadena introducida por teclado
*/

var texto = "", texto2 = ""; //string
var longitud = 0;//numerico
var identico = true;//booleano

//pedimos y exigimos que es un texto1
do {
    //pedimos la palabra
    texto = prompt("Dime una frase inicial");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//pedimos la subcadena
do {
    //pedimos la palabra
    texto2 = prompt("Dime la subcadena");
    if (!isNaN(texto2)) {
        alert("no es un string");
    }
} while (!isNaN(texto2));

//contamos la longitud de la subcadena
longitud=texto2.length;

for (let i = 0; i < longitud; i++) {
    if(texto2.charCodeAt(i)!=texto.charCodeAt(i)){
        identico=false;
    }
}

//mostramos resultados
if(identico==true){
    document.write("la subcadena es el inicio de la cadena inicial");
    alert("la subcadena es el inicio de la cadena inicial");
}else{
    document.write("Lo siento, la subcadena no es el inicio de la cadena inicial");
    alert("Lo siento, la subcadena no es el inicio de la cadena inicial");
}