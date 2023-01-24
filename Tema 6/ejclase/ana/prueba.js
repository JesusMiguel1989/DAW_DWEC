window.addEventListener("DOMContentLoader",()=>{
    let boton=document.getElementById("btnAbrir1");
    console.log("Se ha cargado la pagina");
    boton.addEventListener("click",(ev)=>{
        console.log('Se ha pulsado el boton');
    })
 })