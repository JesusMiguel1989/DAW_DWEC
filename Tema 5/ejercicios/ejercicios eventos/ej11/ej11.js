let sidebar=document.getElementById("sidebar");
let contenido=document.getElementById("contenido");

//botones
let abrir=document.getElementById("abrir");
let cerrar=document.getElementById("cerrar");

abrir.addEventListener("click",()=>{
    sidebar.style.width="300px";
    contenido.style.marginLeft="300px";
    abrir.style.display="none";
    cerrar.style.display="block";
})

cerrar.addEventListener("click",()=>{
    abrir.style.display="block";
    cerrar.style.display="none";
    sidebar.style.width="0px";
    contenido.style.marginLeft="0";
})