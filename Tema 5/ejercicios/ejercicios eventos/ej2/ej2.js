let velocity=document.getElementById("velocity");
let semaforo=document.getElementById("semaforo");

let aux=0;
document.addEventListener("keydown", (evento) => {
    console.log(event.key);
    if (evento.key=="ArrowUp") {
        semaforo.innerHTML="<img src='./verde.png'>";
        if(aux>=120){
            velocity.textContent=120;
        }else{
            aux++;
            velocity.textContent=aux;
        }
    }
    if (evento.key=="ArrowDown") {
        semaforo.innerHTML="<img src='./rojo.png'>";
        if(aux<=0){
            velocity.textContent=0;
        }else{
            aux--;
            velocity.textContent=aux;
        }
    }
})

document.addEventListener("keyup",()=>{
    semaforo.innerHTML="<img src='./ambar.png'>";
})

