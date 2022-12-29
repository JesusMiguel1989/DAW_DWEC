let sidebar=document.getElementById("sidebar");
let contenido=document.getElementById("contenido");

//botones
let abrir=document.getElementById("abrir");
let cerrar=document.getElementById("cerrar");

abrir.addEventListener("click",()=>{
    contenido.style.width="300px";
    sidebar.style.marginLeft="300px";
    abrir.style.display="none";
    cerrar.style.display="block";
})

cerrar.addEventListener("click",()=>{
    abrir.style.display="block";
    cerrar.style.display="none";
    contenido.style.width="100%";
    sidebar.style.marginLeft="0";
})