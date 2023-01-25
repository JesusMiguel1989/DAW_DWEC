window.addEventListener("DOMContentLoaded",()=>{
    let capa=document.getElementById("capa");
    let p=capa.getElementsByTagName("p");

    for(let parrafo of p){
        parrafo.addEventListener("click",(e)=>{
            let primero=capa.firstChild;
            capa.insertBefore(parrafo,primero);
        })
    }
})

//sergio usa el html del 1 y usaria el ev.currentTarget en la linea 8 para indicarle el elemento a cambiar
//lo hace porque en ese html tiene mas cosas el parrafo (texto y nodo)