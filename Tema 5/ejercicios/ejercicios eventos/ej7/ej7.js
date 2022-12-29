let visor = document.getElementById("visor");
let ImagenVisor = document.getElementById("ImagenVisor");
let titulo = document.getElementById("titulo");

//imagenes
let imagen1 = document.getElementById("Imagen1");
let imagen2 = document.getElementById("Imagen2");
let imagen3 = document.getElementById("Imagen3");
let imagen4 = document.getElementById("Imagen4");
let imagen5 = document.getElementById("Imagen5");
let imagen6 = document.getElementById("Imagen6");
let imagen7 = document.getElementById("Imagen7");
let imagen8 = document.getElementById("Imagen8");

window.addEventListener("load", (ev) => { })

//funcion de cambio de foto recibiendo un numero
function cambioFoto(num) {
    ImagenVisor.setAttribute("src", "./imagenesEjercicio7/foto" + num+".jpg");
    let descripcion = "";
    switch (num) {
        case 1:
            descripcion = imagen1.getAttribute("alt");
            break;
        case 2:
            descripcion = imagen2.getAttribute("alt");
            break;
        case 3:
            descripcion = imagen3.getAttribute("alt");
            break;
        case 4:
            descripcion = imagen4.getAttribute("alt");
            break;
        case 5:
            descripcion = imagen5.getAttribute("alt");
            break;
        case 6:
            descripcion = imagen6.getAttribute("alt");
            break;
        case 7:
            descripcion = imagen7.getAttribute("alt");
            break;
        case 8:
            descripcion = imagen8.getAttribute("alt");
            break;
    }
    titulo.textContent = descripcion;
}

imagen1.addEventListener("click",()=>{
    cambioFoto(1);
});

imagen2.addEventListener("click",()=>{
    cambioFoto(2);
});

imagen3.addEventListener("click",()=>{
    cambioFoto(3);
});

imagen4.addEventListener("click",()=>{
    cambioFoto(4);
});

imagen5.addEventListener("click",()=>{
    cambioFoto(5);
});

imagen6.addEventListener("click",()=>{
    cambioFoto(6);
});

imagen7.addEventListener("click",()=>{
    cambioFoto(7);
});

imagen8.addEventListener("click",()=>{
    cambioFoto(8);
});