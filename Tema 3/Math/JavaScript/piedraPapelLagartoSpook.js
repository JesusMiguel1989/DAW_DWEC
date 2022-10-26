
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
    elejug=parseInt(prompt("1 =Piedra, 2=papel, 3=tijeras, 4=Largato, 5=Spook"));
}while(elejug<1 || elejug>5 || isNaN(elejug));

//mostramos foto
if(elejug==1){
    jugador.innerHTML = "<img src='./imagenes/0.png'>";
}else{
    if(elejug==2){
        jugador.innerHTML = "<img src='./imagenes/5.png'>";
    }else{
        if(elejug==3){
            jugador.innerHTML = "<img src='./imagenes/2.png'>";
        }else{
            if(elejug==4){
                jugador.innerHTML = "<img src='./imagenes/lagarto.png'>";
            }else{
                if(elejug==5){
                    jugador.innerHTML = "<img src='./imagenes/spook.png'>";
                }
            }
        }
        
    }
}

//turno pc
elepc=Math.floor(Math.random() * (5 - 1) + 1);

//mostrar eleccion pc
if(elepc==1){
    pc.innerHTML = "<img src='./imagenes/0.png'>";
}else{
    if(elepc==2){
        pc.innerHTML = "<img src='./imagenes/5.png'>";
    }else{
        if(elepc==3){
            pc.innerHTML = "<img src='./imagenes/2.png'>";
        }else{
            if(elepc==4){
                pc.innerHTML = "<img src='./imagenes/lagarto.png'>";
            }else{
                if(elepc==5){
                    pc.innerHTML = "<img src='./imagenes/spook.png'>";
                }
            }
        }
        
    }
}

//imprimimos resultados
if((elejug==1 && elepc==3) || (elejug==1 && elepc==4) || 
    (elejug==2 && elepc==1) || (elejug==2 && elepc==5) || 
    (elejug==3 && elepc==2) || (elejug==3 && elepc==4) ||
    (elejug==4 && elepc==5) || (elejug==4 && elepc==2) ||
    (elejug==5 && elepc==1) || (elejug==2 && elepc==3)){
    resultado = "acierto";
}else{
    if((elejug==1 && elepc==2) || (elejug==1 && elepc==5) ||
        (elejug==2 && elepc==3) || (elejug==2 && elepc==4) ||
        (elejug==3 && elepc==1) || (elejug==3 && elepc==5) ||
        (elejug==4 && elepc==1) || (elejug==4 && elepc==3) ||
        (elejug==5 && elepc==4) || (elejug==5 && elepc==2)){
        resultado = "error";
    }
}

if(elejug==elepc){
    resultado = "empate";
}
marcador.innerHTML = "<img src='./imagenes/" + resultado + ".png'>";