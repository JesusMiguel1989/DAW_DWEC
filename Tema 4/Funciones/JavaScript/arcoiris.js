let intervalo;
let empezar = document.getElementById("empezar")
let terminar = document.getElementById("terminar");
let enlace = document.getElementById("enlace");



let cambiar = () => {

    let num1 = Math.floor(Math.random() * 256);
    let num2 = Math.floor(Math.random() * 256);
    let num3 = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor = "rgb(" + num1 + "," + num2 + "," + num3 + ")";
}

let intervaloCambiar = () => {
    intervalo = setInterval(cambiar, 2000);
    empezar.removeEventListener("click", intervaloCambiar);
}

let intervaloParar = () => {
    clearInterval(intervalo);
    empezar.addEventListener("click", intervaloCambiar);
}

//empezar.addEventListener("click",cambiar);
//boton empezar que llama a cambiar
empezar.addEventListener("click", intervaloCambiar);


//boton que para el intervalo.
terminar.addEventListener("click", intervaloParar);


//anulacion del comportamiento del evento
enlace.addEventListener("click", (ev) => {
    //alert que devuelve un true o un false
    let respuesta= confirm("¿estas seguro?");
    if(!respuesta){
        ev.preventDefault();
    }
    
})

