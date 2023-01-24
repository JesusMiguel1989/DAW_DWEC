window.addEventListener("DOMContentLoaded",()=>{
    
let btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    let valor=document.getElementsByTagName("input");
    if(valor[0].checked){
        //window.open() abre una ventana nueva
        open("http://www.google.es");
        //window.location.href="  " abre la pagina seleccionado
        //.reload recarga la pag
    }
    else if(valor[1].checked){
        location.href="http://www.google.es";
    }
    
})
})