/*
A lo largo de la historia ha sido muy importante el intercambio de mensajes entre diferentes personas o grupos de ellas. 
Muchos de estos mensajes son privados y, para evitar el acceso al contenido del texto, 
se han creado diferentes métodos para protegerlos de miradas indiscretas.
Durante sus campañas de guerra, Julio César ideó un sistema de cifrado que, con el tiempo ha recibido su nombre.
El cifrado César parte de un texto donde todos los caracteres son latinos, en mayúsculas (no incluye tildes, ñ, diéresis,...) o, 
en su caso, símbolos de puntuación básicos (espacios, comas o puntos) que no serán codificados.

Los caracteres alfabéticos se codificarán utilizando un desplazamiento de letras. 
Este desplazamiento dependerá de la clave de cifrado. Si, por ejemplo, 
la clave es 3, el mensaje "A,B.Y Z" pasaría a cifrarse como "D,E.B C" 
ya que, una vez llegado al final del abecedario comenzaríamos por el principio de nuevo.
La clave de descifrado sería igualmente 3 pero el valor sería negativo, convirtiendo mensaje cifrado en el mensaje original. 
Debes hacer un programa en el que se pida una cadena de texto y una clave numérica 
en dos campos de texto. Debes añadir dos botones "Cifrar" y "Descifrar" junto con un campo de texto que muestre el resultado de cifrar o descifrar 
el mensaje con la clave indicada. (Utiliza un array con las letras del alfabeto posible)

NOTA:
• El programa necesitará el siguiente array del ejercicio anterior
o arrayAbecedario -> array con todas las letras del alfabeto en minúscula
• Utiliza la función del ejercicio anterior transformarStringBasico(cadena).
• Deberás crear la función codificarCaracter(desplazamiento,caracter,array). 
Calculará la posición del carácter en el array, le sumará el desplazamiento y devolverá el carácter correspondiente. 
Si al sumarle el desplazamiento sobrepasa los límites del array seguirá desde el principio. 
Si caracter no se encuentra en el array (un punto. Una, un espacio, etc) devolverá -1
• Deberás crear la función descodificarCaracter(desplazamiento,caracter,array). Igual que la anterior pero restará el desplazamiento
• Haz uso de las anteriores funciones para hallar la solución
*/
//variables del DOM
let texto = document.getElementById("texto");
let clave = document.getElementById("clave");
let bt1cod = document.getElementById("bt1cod");
let bt2des = document.getElementById("bt2des");
let txt = document.getElementById("txt");

//array
let arrayAbecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let acentos = ['á', 'é', 'í', 'ó', 'ú'];
let vocales = ['a', 'e', 'i', 'o', 'u'];
let dieresis = ['ä', 'ö', 'ü'];
let vocales1 = ['a', 'o', 'u'];
let cadena = [];//array para el paso del texto del usuario
let codificado = [];
//variables programa
let paso;//variables dadas por el usuario
let i, j, cad;//var del programa

function transformarStringBasico(cadena) {

    for (i = 0; i < cadena.length; i++) {
        for (j = 0; j < acentos.length; j++) {
            if (cadena[i] == acentos[j]) {
                cadena[i] = vocales[j];
            }
        }//for que recorre el array acentos
        for (j = 0; j < dieresis.length; j++) {
            if (cadena[i] == dieresis[j]) {
                cadena[i] = vocales1[j];
            }
        }//for para las dieresis
    }//for que recorre cadena
}

//funcion que codifica la cadena, primero lo recorremos y cuando tengamos coincidencia cambiamos la letra
//si el cambio da un numero mayor de 27 cogemos al partesobrante y ponemos esa letra
function codificar(aux, cadena) {
    for (i = 0; i < cadena.length; i++) {
        for (j = 0; j < arrayAbecedario.length; j++) {
            //por si la clave es mayor de 27
            while(aux>=27){
                aux-=27;
            }
            if (cadena[i] == arrayAbecedario[j]) {
                if ((j + aux) >= 27) {
                    //whille
                    codificado[i] = arrayAbecedario[(j + aux) - 27];
                } else {
                    codificado[i] = arrayAbecedario[(j + aux)];
                }
            }
            if(cadena[i]==" "){
                codificado[i] = " ";
            }
        }
    }
}

function descodificar(aux, cadena) {
    for (i = 0; i < cadena.length; i++) {
        for (j = arrayAbecedario.length; j >= 0; j --) {
            while(aux>=27){
                aux-=27;
            }
            if (cadena[i] == arrayAbecedario[j]) {
                if ((j - aux) < 0) {
                    codificado[i] = arrayAbecedario[(j - aux) + 27];
                } else {
                    codificado[i] = arrayAbecedario[(j - aux)];
                }
                if(cadena[i]==" "){
                    codificado[i] = " ";
                }
            }
        }
    }
}

bt1cod.addEventListener("click", (cadena, paso) => {
    cadena = texto.value;
    paso = parseInt(clave.value);
    if (cadena.length > 0 && !isNaN(paso)){
        txt.innerHTML = "Clave y texto Correctos";
        //quitamos de la cadena los acentos y dieresis
        //primero lo paso a minusculas y despues lo divido en un array
        cadena = cadena.toLowerCase();
        cadena = cadena.split("");
        transformarStringBasico(cadena);
        codificar(paso, cadena);
        cad = codificado.toString();
        cad = cad.replace(/,+/g, "");
        txt.innerHTML = "Su mensaje\n" + cad;
    } else {
        txt.innerHTML = "Revisa la Clave y el texto";
    }
    cad="";
});

bt2des.addEventListener("click", (cadena, paso) => {
    cadena = texto.value;
    paso = parseInt(clave.value);
    if (cadena.length > 0 && !isNaN(paso)) {
        txt.innerHTML = "Clave y texto Correctos";
        //quitamos de la cadena los acentos y dieresis
        //primero lo paso a minusculas y despues lo divido en un array
        cadena = cadena.toLowerCase();
        cadena = cadena.split("");
        transformarStringBasico(cadena);
        descodificar(paso, cadena);
        cad = codificado.toString();
        cad = cad.replace(/,+/g, "");
        txt.innerHTML = "Su mensaje\n" + cad;
    } else {
        txt.innerHTML = "Revisa la Clave y el texto";
    }
    cad="";
});

