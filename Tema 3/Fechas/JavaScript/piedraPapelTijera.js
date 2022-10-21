/*
Como el ejercicio anterior, pero a piedra papel o tijera
*/

//variables jugador
let elejug;//numerico

//variables maquina
let elepc;//string
let aux;//numerico para el random

//variables programa
var resultado;
let jugador, pc,marcador;//variables para las fotos

jugador = document.getElementById("jugador");
pc = document.getElementById("pc");
marcador = document.getElementById("marcador");

//turno jugador
do{
    elejug=parseInt(prompt("1 =Piedra, 2=papel, 3=tijeras"));
}while(elejug<1 || elejug>3 || isNaN(elejug));

//mostramos foto
if(elejug==1){
    jugador.innerHTML = "<img src='./imagenes/0.png'>";
}else{
    if(elejug==2){
        jugador.innerHTML = "<img src='./imagenes/5.png'>";
    }else{
        jugador.innerHTML = "<img src='./imagenes/2.png'>";
    }
}

//turno pc
elepc=Math.floor(Math.random() * (3 - 1) + 1);

//mostrar eleccion pc
if(elepc==1){
    pc.innerHTML = "<img src='./imagenes/0.png'>";
}else{
    if(elepc==2){
        pc.innerHTML = "<img src='./imagenes/" + 5 + ".png'>";
    }else{
        pc.innerHTML = "<img src='./imagenes/2.png'>";
    }
}

//imprimimos resultados
if((elejug==1 && elepc==3) || (elejug==2 && elepc==1) || (elejug==3 && elepc==2)){
    resultado = "acierto";
}else{
    if((elejug==1 && elepc==2) || (elejug==2 && elepc==3) || (elejug==3 && elepc==1)){
        resultado = "error";
    }
}

if((elejug==1 && elepc==1) || (elejug==2 && elepc==2) || (elejug==3 && elepc==3)){
    resultado = "empate";
}
marcador.innerHTML = "<img src='./imagenes/" + resultado + ".png'>";