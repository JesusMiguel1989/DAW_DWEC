let capa = document.getElementById("capa");

capa.addEventListener("mouseover",() => {
    capa.style.backgroundColor = "green";
})//cambio a verde

capa.addEventListener("mouseout",()=>{
    capa.style.backgroundColor = "transparent";
})//vuelta al transparente

capa.addEventListener("contextmenu",(e)=>{
    e.preventDefault();
    capa.style.backgroundColor = "blue";
})//en azul

capa.addEventListener("mousedown",()=>{
    capa.style.backgroundColor = "red";
})
//a rojo
capa.addEventListener("mouseup",()=>{
    capa.style.backgroundColor = "green";
})//vuelta al verde

