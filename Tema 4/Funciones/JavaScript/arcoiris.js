let intervalo;
let empezar=document.getElementById("empezar")
let terminar=document.getElementById("terminar");

let cambiar= ()=>{

    let num1=Math.floor(Math.random()*256);
    let num2=Math.floor(Math.random()*256);
    let num3=Math.floor(Math.random()*256);

    document.body.style.backgroundColor="rgb("+num1+","+num2+","+num3+")";
}

//empezar.addEventListener("click",cambiar);
//boton empezar que llama a cambiar
empezar.addEventListener("click",()=>{
    intervalo=setInterval(cambiar,500);
});

//boton que para el intervalo.
terminar.addEventListener("click",()=>{
    clearInterval(intervalo);
})