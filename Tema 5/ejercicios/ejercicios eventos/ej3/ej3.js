let capa=document.getElementById("capa"); 
let boton=document.getElementById("boton"); 
let cerrar=document.getElementById("cerrar");

capa.addEventListener("scroll",()=>{
    //el top es la barra de la derecha del scroll
    //offheigth es la total del scroll
    let aux=parseInt(Math.ceil(capa.scrollTop+capa.offsetHeight));
    //let aux=parseInt(Math.ceil(capa.scrollTop+capa.offsetHeight*0.9)); Da la posicion al 90% del desplazamiento.
    if(aux>=capa.scrollHeight){
        console.log("llego al final");
        boton.style.display="block";
    }else{
        console.log("Se mueve");
        boton.style.display="none";
    }
});

cerrar.addEventListener("click",()=>{
    //capa.style.display="none";
    //boton.style.display="none";
    document.body.removeChild(capa);
})
