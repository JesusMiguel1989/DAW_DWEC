/*let boton1=document.getElementById("boton1");
let boton2=document.getElementById("boton2");

boton1.addEventListener("click",(ev)=>{
    document.body.style.backgroundColor="red";
})

boton2.addEventListener("click",(ev)=>{
    let evento = new Event("click");
    boton1.dispatchEvent(evento);
})*/

//para lanzar un evento usamos dispachtEvent sobre otro click

//al darle al boton subtmit se cancele y se envie cuando se le de a la flecha hacia abajo se envie "ArrowDown"

//Al pulsar el submit, se cancela el envío
let formulario = document.getElementsByTagName("form")[0];
formulario.addEventListener("submit", (ev) => {
    ev.preventDefault();//Cancelo el evento SUBMIT
})

document.body.addEventListener("keyup",(evento)=>{
   if (evento.key == "ArrowDown") {
        alert("pulsada");
        let enviar = new Event("submit");
        formulario.dispatchEvent(enviar);
    } 
})