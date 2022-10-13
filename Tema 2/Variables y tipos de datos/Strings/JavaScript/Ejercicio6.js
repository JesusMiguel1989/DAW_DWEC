/*
Que pida un texto y cuente las vocales que tiene
*/

var texto=""; //string
var longitud, vocales=0;// numericos

//pedimos y exigimos que es un texto
do {
    //pedimos la palabra
    texto = prompt("Dime una frase y te contare las vocales");
    if(!isNaN(texto)){
        alert("no es un string");
    }
} while (!isNaN(texto));

//lo ponemos too a minusculas
texto=texto.toLowerCase();

//contamos la longitud
longitud=texto.length;

//recorremos y contamos las vocales
for(let i=0;i<longitud;i++){
    if(texto.charAt(i)=='a' || texto.charAt(i)=='e' || texto.charAt(i)=='i'
    || texto.charAt(i)=='o' || texto.charAt(i)=='u'){
        vocales++;
    }
}

//mostramos
alert(" Han salido : " + vocales + " vocales en el texto:\n"+texto);
document.write(" Han salido : " + vocales + " vocales en el texto:<br>"+texto);