/*
Implemente el siguiente juego: el programa seleccionará un número aleatorio entre 0 y 99 y el jugador debe acertarlo. 
En cada intento el jugador propondrá una solución (prompt) y se le informará si el número a acertar es menor o mayor 
que el propuesto (alert). El juego termina cuando se acierte la cifra o haya realizado un máximo de 12 intentos 
en cuyo caso se le mostrará al jugador la calificación obtenida según la siguiente tabla (document.write):
1-3 Suertudo 
4-6 Genio 
7 No está mal
8 Se puede mejorar 
9-12 Que pasa amigo
>12 Eres un paquete!!!
*/

let numeale;//numero a,leatorio
let num;//numero jugador
let turnos = 1;//contador turnos
let verificador = false;//booleano

numale = Math.round(Math.random() * (99));
alert("Acertaras en que numero estoy pensando")

do {
    do {
        num = prompt("Dime el número del turno " + turnos);
    } while (isNaN(num));

    if (num == numale) {
        verificador = true;
    } else {
        turnos++;
        if(num>numale){
            alert("El número es mas pequeño");
        }else{
            alert("El número es mayor");
        }
    }
} while (turnos < 12 && verificador==false);

if(verificador && turnos>0 && turnos<4){
    alert("Suertudo");
}
if(verificador && turnos>4 && turnos<7){
    alert("Genio");
}
if(verificador && turnos==7){
    alert("No esta mal");
}
if(verificador && turnos==8){
    alert("Se puede mejorar");
}
if(verificador && turnos>9 && turnos<=12){
    alert("No esta mal");
}

if(verificador && turnos>12){
    alert("No esta mal");
}