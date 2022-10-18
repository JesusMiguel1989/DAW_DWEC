/*
Que pida un texto y diga si está escrito en mayúsculas
*/

var texto = "", texto2 = ""; //string
var longitud = 0;//numerico
var identico = true;//booleano

//pedimos y exigimos que es un texto
do {
    //pedimos la palabra
    texto = prompt("Dime una frase y te dire si esta en Mayusculas");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//lo pasamos a mayusculas
texto2 = texto.toUpperCase();

//sacamos la longitud
longitud=texto.length;

//hacemos la comprobacion caracter a caracter
for (let i = 0; i < longitud; i++) {
    if(texto.charCodeAt(i)!=texto2.charCodeAt(i)){
        identico=false;
    }
}

//mostramos resultados
if(identico==true){
    document.write("Esta en mayusculas");
    alert("Esta en mayusculas");
}else{
    document.write("Lo siento pero no esta en mayusculas");
    alert("Lo siento no esta en mayusculas");
}