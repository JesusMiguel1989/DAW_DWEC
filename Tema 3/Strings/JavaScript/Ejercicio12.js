/*
Suponiendo que hemos introducido una cadena por teclado que representa una frase (palabras separadas por espacios), 
realiza un programa que cuente cuantas palabras tiene.
*/

var texto = "", caracter = " "; //string
var longitud = 0, veces = 0;//numerico

//pedimos y exigimos que es un texto1
do {
    //pedimos la palabra
    texto = prompt("Dime una frase inicial");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//eliminamos los posibles espacios al principio y al final
texto=texto.trimStart();
texto=texto.trimEnd();

//contamos la longitud
longitud=texto.length;

//recorremos la cadena y contamos los espacios
for(let i=0;i<longitud;i++){
    if(texto.charAt(i)==caracter){
        veces++;
    }
}//for

//le añadimos la ultima palabra
veces++;

//mostramos resultados
document.write("En la cadena :<br>" + texto + "<br>Hay " + veces + " palabras");
alert("En la cadena :\n" + texto + "\nHay " + veces + " palabras");