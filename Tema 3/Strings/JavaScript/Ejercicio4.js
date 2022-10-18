/*
Que pida un texto y diga si es capicúa
*/

var texto="", texto2=""; //string
var longitud;// numericos
var palindromo=true;//boleano

do {
    //pedimos la palabra
    texto = prompt("Dime una frase y te dire si es un palindromo");
    if(!isNaN(texto)){
        alert("no es un string");
    }
} while (!isNaN(texto));

//quitamos los espacios con replace
//texto=texto.replace(" ","");
texto=texto.replace(/\s+/g,"");

//pasamos a minusculas por si acaso
texto=texto.toLowerCase();

//calculamos su longitud
longitud=texto.length;

//recorremos el texto y lo metemos en una segunda variable
for(let i=longitud;i>=0;i--){
    texto2=texto2+texto.charAt(i);
}

//comprobacion de cadenas
alert(texto );

//comprobacion caracter a caracter para saber si es capicua
for(i=0;i<longitud;i++){
    if(texto.charAt(i)!=texto2.charAt(i)){
        palindromo=false;
    }
}

//motramos el resultado
if(palindromo==true){
    document.write("es palindromo");
    alert("Es palindromo");
}else{
    document.write("Lo siento pero no es palindromo");
    alert("Lo siento no es palindromo");
}