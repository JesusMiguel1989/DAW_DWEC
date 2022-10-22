let reloj = document.getElementById("reloj");
let iniciar = document.getElementById("iniciar");
let parar = document.getElementById("parar");
let intervalo;

let reloj2;

let actualizar = function () {
    let fechaActual = new Date();
    let hora; //variable hora
    let minuto;//minuto 
    let seg;//segundos
    let mili="";//milisegundos

    hora = fechaActual.getHours();
    if (hora < 10) {
        hora = "0" + hora;
    }

    minuto = fechaActual.getMinutes();
    if (minuto < 10) {
        minuto="0"+minuto;
    }

    seg = fechaActual.getSeconds();
    if (seg < 10) {
        seg="0"+seg;
    }

    mili=Math.floor(Math.round(fechaActual.getMilliseconds())/10);

    reloj2 = hora + ":" + minuto + ":" + seg + ":" + mili;
    reloj.value = reloj2;
}

iniciar.addEventListener("click",()=>{
    intervalo = setInterval(actualizar, 5);
})

parar.addEventListener("click",()=>{
    clearInterval(intervalo);
})

//10 tiempo que ha pasado en escribir nuestro nombre 5-12 probar el 13 fotos en papas