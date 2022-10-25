/*
Crea una aplicación web que muestre una combinación de 7 números distintos del 1 al 9.
*/

let numeros = [];//donde se guardaran los numeros
let i, j, aux = 0;//variable del programa
let esta = false;//variable booleana

//metemos el 1 numero porque no puede haber otro igual dentro
numeros[0] = Math.floor(Math.random() * (10 - 1) + 1);

//iniciamos comprobacion e insercion
for (i = 1; i < 7; i++) {
    //comprobacion
    do {
        esta=false;
        aux = Math.floor(Math.random() * (10 - 1) + 1);
        for (j = 0; j < numeros.length; j++) {
            if (aux == numeros[j]) {
                esta = true;
            }
        }
    } while (esta == true);

    //insercion si no esta repetido
    numeros[i] = aux;
}

for(i=0;i<7;i++){
    document.write(numeros[i] + "&nbsp&nbsp");
}