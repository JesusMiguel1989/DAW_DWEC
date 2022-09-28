let imagen =document.getElementById("imagen");
let botonOcultar = document.getElementById("ocultar");
let botonVer = document.getElementById("ver");

botonOcultar.addEventListener("click", ()=>{
    imagen.style.display="none";
});

botonVer.addEventListener("click", ()=>{
    imagen.style.display="inline-block";
})