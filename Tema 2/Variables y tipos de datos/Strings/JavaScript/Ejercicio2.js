/*
Que pida un texto y muestre cada caracter del texto en un línea
*/

var texto;//string
var longitud;//numerico

do {
    //pedimos la palabra
    texto = prompt("Dime una frase y lo leeras como los asiaticos, verticalmente");
    if(!isNaN(texto)){
        alert("no es un string");
    }
} while (!isNaN(texto));

//calculamos la longitud para recorrer el string
longitud=texto.length;

//recorremos la palabra y la imprimimos de forma vertical
for(let i=0;i<longitud;i++){
    document.write(texto.charAt(i)+"<br>")
}