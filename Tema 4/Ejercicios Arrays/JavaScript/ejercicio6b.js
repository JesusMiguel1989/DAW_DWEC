/*
Crea una aplicación web que muestre una combinación de 7 números distintos del 1 al 9.
*/


let numeros = [];//donde se guardaran los numeros
let i, j, aux = 0;//variable del programa
let esta = false;//variable booleana
let cadena = "";//variable cadena para la impresion

let caja = document.getElementById("texto");//variable del textarea
let boton = document.getElementById("boton");//variable boton
let btn = document.getElementById("btn");
let foto = document.getElementById("gif");//variable img

//metemos el 1 numero porque no puede haber otro igual dentro
numeros[0] = Math.floor(Math.random() * (10 - 1) + 1);

//iniciamos comprobacion e insercion
for (i = 1; i < 7; i++) {
    //comprobacion
    do {
        esta = false;
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

boton.addEventListener("click", () => {
    for (i = 0; i < 7; i++) {
        cadena += numeros[i] + " ";
    }
    caja.textContent = cadena;
    foto.setAttribute('src',"estilos/bingo.gif");
    btn.style.display = "block";
    boton.style.display = "none";
    cadena="";
})

btn.addEventListener("click",() =>{
    numeros[0] = Math.floor(Math.random() * (10 - 1) + 1);
    for (i = 1; i < 7; i++) {
        //comprobacion
        do {
            esta = false;
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
    foto.setAttribute('src',"");
    btn.style.display = "none";
    boton.style.display = "block";
})