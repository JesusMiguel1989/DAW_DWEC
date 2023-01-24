window.addEventListener("DOMContentLoaded",()=>{
/*
    window.addEventListener("scroll",()=>{
        let posicion_Nav=document.body.clientHeight;
        console.log(posicion_Nav);
        let pos=document.documentElement.clientHeight;
        console.log(pos);
        let posy = window.pageYOffset;
        console.log(posy);

        if(posicion_Nav-(posy*2)){

        }
    })*/

    
})

window.addEventListener("load",()=>{
    document.getElementById("cargando").style.display="none";
    document.getElementById("imagenes").style.display="block";


    window.addEventListener("scroll",()=>{
        let alturaParteVisibleVentana=document.documentElement.clientHeight;//parte visible 
        let alturaTotalPaginaWeb=document.body.clientHeight;//altura total
        let desplazamiento=window.scrollY;//posicion y
        if(alturaParteVisibleVentana+desplazamiento>=alturaTotalPaginaWeb){
            window.scroll(0,0);
            location.reload();
        }
    })
})