window.addEventListener("DOMContentLoaded", () => {
    let todasLasCapas = document.getElementsByTagName("div");
    let cont = 1;
    let capa2 = document.getElementById("capa2");

    for (let capa of todasLasCapas) {
        if (capa.id != "capa2") {
            capa.textContent = "Soy arratastrable" + cont;
            cont++;
            capa.addEventListener("dragleave", () => {
                capa2.addEventListener("dragover", (ev) => {
                    ev.preventDefault();
                })

                capa2.addEventListener("drop", (ev) => {
                    capa.style.display = "none";
                })
            })//addevenlistener dragleave
        }
    }//for


})