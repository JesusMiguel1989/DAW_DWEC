window.addEventListener("DOMContentLoaded", () => {
    //durante el arratre la opacidad sera 0.5 y la segunda capa se pondra en rojo
    //al soltar sobre la capa 2 la 1 desaparece y el texto cambia a Lo has logrado
    let capa1 = document.getElementById("capa1");
    let capa2 = document.getElementById("capa2");

    capa1.addEventListener("dragstart", () => {
        capa1.style.opacity = 0.5;
    })

    capa1.addEventListener("dragend", () => {
        capa1.style.opacity = 1;
    })

    capa2.addEventListener("dragover", (over) => {
        capa2.style.backgroundColor = "red";
    })

    capa2.addEventListener("dragleave", () => {
        capa2.style.backgroundColor = "transparent";
    })

    capa2.addEventListener("dragover", (over) => {
        over.preventDefault();
    })

    capa2.addEventListener("drop", () => {
        capa2.textContent = "!Lo has logrado¡";
        capa2.style.backgroundColor = "transparent";
        //capa1.style.opacity = 0;
        capa1.style.display = "none";
    })
})