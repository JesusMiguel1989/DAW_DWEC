/*
Que genere número entero aleatorio entre min y max (ambos incluidos), que serán pasados como parámetros.
*/

let numero;//recogera el numero aleatorio
let min, max;//recogeremos el max y min

//pedimos los dos numeros y nos aseguramos de que es un numero
do {
    max = parseInt(prompt("Dime in número"));
    if(isNaN(max)){
        document.write("No es un Número");
    }//if que muestra el posible error
    min = parseInt(prompt("Dime otro número"));
    if(isNaN(min)){
        document.write("No es un Número")
    }
}while(isNaN(max) && isNaN(min));

//indicamos cual es el mayor y el menor
if(min>max){
    let aux=min;
    min=max;
    max=aux;
}

//generamos el numero aleatorio
numero = Math.round(Math.random()*(max - min)+min);
document.write("El numero mayor es " + max + " el menor es "+ min + "<br>El numero aleatorio ha sido el " + numero);