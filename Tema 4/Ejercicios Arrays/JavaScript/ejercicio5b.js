/*
Crea un array multidimensional de 10 filas por 10 columnas que almacene números aleatorios entre 1 y 9. 
El programa debe crear una página web que muestre el anterior array pero con una columna y una fila más. 
El valor de cada elemento de la nueva columna será la suma de todos los valores de su fila correspondiente. 
El valor de cada elemento de la nueva fila será la suma de todos los valores de su columna correspondiente.
*/

let numeros = [];//array de numeros
let i, j;//variables numericas del programa
let aux = 0;//variable suma
let cadena = "";//cadena para el texarea

let caja = document.getElementById("texto");//variable del textarea
let boton = document.getElementById("boton");//variable boton

//insercion de numeros aleatorios
for (i = 0; i < 10; i++) {
    //array inicializado dentro para guardar los datos de cada iteracion del bucle
    let num = [];
    for (j = 0; j < 10; j++) {
        num[j] = Math.floor(Math.random() * (10 - 1) + 1);
        aux += num[j];
    }
    num[10] = aux;
    numeros[i] = num;
    aux = 0;
}

let columna = [];
for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        aux += numeros[j][i];
    }
    columna[i] = aux;
    aux = 0;
}
numeros[10] = columna;

//mostrar mediante boton
boton.addEventListener("click", () => {
    for (i = 0; i < 11; i++) {
        for (j = 0; j < numeros[i].length; j++) {
            if (numeros[i][j] < 10) {
                cadena += "0" + numeros[i][j] + " ";
            } else {
                cadena += numeros[i][j] + " ";
            }

        }
        cadena += "\n";
    }
    caja.textContent = cadena;
})


