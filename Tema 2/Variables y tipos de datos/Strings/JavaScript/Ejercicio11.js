/*
Que pida una cadena y un carácter por teclado (valida que sea un carácter) 
y muestra cuantas veces aparece el carácter en la cadena
*/

var texto = "", caracter = ""; //string
var longitud = 0, veces = 0;//numerico

//pedimos y exigimos que es un texto1
do {
    //pedimos la palabra
    texto = prompt("Dime una frase inicial");
    if (!isNaN(texto)) {
        alert("no es un string");
    }
} while (!isNaN(texto));

//pedimos un caracter
do{
    //pedimos el caracter
    caracter=prompt("Dame un caracter y te dire cuantas veces sale en la cadena principal");

    //contamos los caracteres
    longitud=caracter.length;
    alert(longitud);
    if (!isNaN(texto) && longitud!=1) {
        alert("no es un caracter unico");
    }//if
}while (!isNaN(texto) || longitud!=1);

//contar caracteres del texto
longitud=texto.length;

//recorremos la cadena inicial y contamos las veces que aparece el caracter
for(let i=0;i<longitud;i++){
    if(texto.charAt(i)==caracter){
        veces++;
    }
}

//mostramos esultados
document.write("En la cadena:<br>"+texto+"<br>Encontre "+veces + " " + caracter);
alert("En la cadena:\n"+texto+"\nEncontre "+veces + " " + caracter);