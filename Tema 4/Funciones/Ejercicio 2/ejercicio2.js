/*
Halla la letra de un DNI. Crea una página HTML con un cuadro de texto en el que se pueda escribir el número del DNI,
un botón para calcularlo y otro cuadro de texto donde aparezca la letra del DNI resultante.

NOTA: Utiliza un array con las letras posibles para que utilices 
el número obtenido en la operación como índice de este array para averiguar la letra
*/

//recogemos los elementos del DOM
let numero = document.getElementById("numero");
let btn = document.getElementById("btn");
let letra = document.getElementById("letra");
let aux = 0, resto = 0;//variable numerica

//let arrayLetras = ('T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E');

btn.addEventListener("click", () => {
    let arrayLetras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    //pasamos el texto del input a numerico
    aux = parseInt(numero.value);


    //comprobamos si es un numero
    if (isNaN(aux) && aux.length != 7) {
        numero.value = "lo siento eso no es un numero";
        letra.value = "Sigue sin serlo";
    } else {
        //dividimos entre 23 y nos quedamos con el resto
        resto = aux % 23;
        letra.value = arrayLetras[resto];
    }
});