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

/*for (let j = 0; j < 20; j++) {
    //mostramos el console con la barra para delimitar el texto
    console.log("| "+texto+" |");

    //con substring nos quedamos con la parte de la derecha, y añadimos el caracter inicial despues.
    texto=texto.substring(1,longitud)+texto.charAt(0);
    
    
    inicializamos la variable dentro, para que siempre se reinicie y espere los 0,5 seg
    dentro dle bucle no hace falta meter nada, lo usamos para esperar ese tiempo
    
    let tiempo = new Date();
    while (new Date() - tiempo <= 500);
    //console.log(texto2);
    //texto2="";
    console.clear();
}*/

let funcion = function(texto){
    let jodo="| "+texto+" |";
    document.getElementById('mario').innerHTML=jodo;
    texto=texto.substring(1,longitud)+texto.charAt(0);
    let tiempo = new Date();
    while (new Date() - tiempo <= 500);
}

setInterval(funcion(texto),2000);
