/*
Pide una cadena y dos caracteres por teclado (valida que sea un carácter),
sustituye la aparición del primer carácter en la cadena por el segundo carácter.
*/

var texto = "", caracter = "", caracter2=""; //string

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
    caracter=prompt("Dame el caracter que va a desaparecer");

    //contamos los caracteres
    longitud=caracter.length;
    if (!isNaN(caracter) && longitud!=1) {
        alert("no es un caracter");
    }//if
}while (!isNaN(caracter) || longitud!=1);

do{
    //pedimos el caracter
    caracter2=prompt("Dame el caracter que va a desaparecer");

    //contamos los caracteres
    longitud=caracter2.length;
    if (!isNaN(caracter2) && longitud!=1) {
        alert("no es un caracter");
    }//if
}while (!isNaN(caracter2) || longitud!=1);

texto=texto.replaceAll(caracter,caracter2);


alert("Tras la evolucion tu frase quedo: \n"+texto);
document.write("Tras la evolucion tu frase quedo: <br>"+texto);