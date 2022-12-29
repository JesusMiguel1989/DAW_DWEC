let capa=document.getElementById("capa"); 
let boton=document.getElementById("boton"); 
let cerrar=document.getElementById("cerrar");

capa.addEventListener("scroll",()=>{
    let aux=parseInt(Math.ceil(capa.scrollTop+capa.offsetHeight));
    if(aux>=capa.scrollHeight){
        console.log("llego al final");
        boton.style.display="block";
    }else{
        console.log("Se mueve");
        boton.style.display="none";
    }
});

cerrar.addEventListener("click",()=>{
    document.body.removeChild(capa);
})
