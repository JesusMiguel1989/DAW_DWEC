window.addEventListener("load", () => {

    let imagen = document.getElementById("imagen");
    let formulario = document.getElementById("formulario");
    let tipo = document.getElementById("tipo");
    let fDescripcion = document.getElementById("fDescripcion");
    let mostrarDescripcion = document.getElementById("mostrarDescripcion");
    let enviar = document.getElementById("enviar");
    let serie = document.getElementById("serie");
    let labelSerie = document.getElementById("labelSerie");
    let capaError = document.getElementById("capaError");

    let tipoElegido;

    formulario.addEventListener("change", () => {
        tipoElegido = tipo.value;
        switch (tipoElegido) {
            case "distribucion":
                imagen.setAttribute("src", "./distribucion.jpg");
                //imagen.src=listbox.value;
                break;
            case "oficina":
                console.log("llega");
                imagen.setAttribute("src", "./oficina.jpg");
                break;
            case "produccion":
                imagen.setAttribute("src", "./produccion.jpg");
                break;
            default:
                document.write("Nose como has llegado, pero Felicidades");
                break;
        }//switch
    })//evento change

    mostrarDescripcion.addEventListener("click", () => {
        fDescripcion.style.display = "inline-block";
        mostrarDescripcion.style.display = "none";
    })//click en mostrar

    enviar.addEventListener("click", (e) => {
        let expresionSerie = /^\d{3}[A-ZÑ]{4}[1-2]|A$/;
        //let expresionSerie = /^\d{3}[A-ZÑ]{4}[12A]$/;

        if (expresionSerie.test(serie.value)) {
            capaError.classList.remove("error");
            serie.classList.remove("erroneo");
            labelSerie.classList.remove("erroneo");
            capaError.style.display = "none";
        } else {
            //capaError.style.backgroundColor = "red";
            //capaError.style.color = "white";
            capaError.classList.add("error");
            capaError.textContent = "Codigo de numero de serie erroneo";
            serie.classList.add("erroneo");
            labelSerie.classList.add("erroneo");
            capaError.style.display = "block";
            e.preventDefault();
        }
    })

});