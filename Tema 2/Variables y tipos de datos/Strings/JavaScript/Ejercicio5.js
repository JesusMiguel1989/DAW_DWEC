/*
Que pida un texto y elimine los espacios en blanco
*/

var texto=""; //string

do {
    //pedimos la palabra
    texto = prompt("Dime una frase y le quitare los espacios");
    if(!isNaN(texto)){
        alert("no es un string");
    }
} while (!isNaN(texto));

//quitamos los espacios con replace
/* Regex
/\s+/g
\s busca espacios, tabulaciones y saltos de linea
+ lo elimina en conjunto junto al \s
g lo hace en todo el strin no solo en el 1 que encuentra
*/
texto=texto.replace(/\s+/g,"");

document.write(texto);
alert(texto);