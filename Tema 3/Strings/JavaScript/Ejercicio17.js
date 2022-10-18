/*
Igual que el anterior, pero colocando la última letra de la cadena en primera posición
*/

var texto = ""; //string
var longitud;//numerico

//pedimos y exigimos que es un texto1
do {
    //pedimos la palabra
    texto = prompt("Dime una frase inicial");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//calculo longitud
longitud = texto.length;

//recorro la cadena y guardo el 1 caracter aparte para concatenarlo despues

for (let j = 0; j < 20; j++) {
    console.log("| "+texto+" |");
    texto=texto.charAt(longitud-1)+texto.substring(0,longitud-1);
    
    /*
    inicializamos la variable dentro, para que siempre se reinicie y espere los 0,5 seg
    dentro dle bucle no hace falta meter nada, lo usamos para esperar ese tiempo
    */
    let tiempo = new Date();
    while (new Date() - tiempo <= 500);
    //console.log(texto2);
    //texto2="";
    console.clear();
}
//substr(pos inicial, [longitud que quiero]);
//slice(posicion inicial al infinito);