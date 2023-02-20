let fecha = new Date();
let evento = new Event("click");
let centinela = false;

async function fotoDiaNasa(fecha) {
    let cuerpo = document.getElementById("cuerpo");

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();

    let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b&date=" + year + "-" + mes + "-" + dia);
    let texto = await response.json();

    let nuevoh2 = document.createElement("h2");
    nuevoh2.textContent = texto.title;
    cuerpo.appendChild(nuevoh2);
    if (texto.media_type == "image") {
        let nuevaFoto = document.createElement("img");
        nuevaFoto.src = texto.url;
        cuerpo.appendChild(nuevaFoto);
    }
    if (texto.media_type == "video") {
        let nuevoVideo = document.createElement("video");
        nuevoVideo.src = texto.url;
        nuevoVideo.autoplay = true;
        cuerpo.appendChild(nuevoVideo);
    }

}

async function Marte() {
    let cuerpo = document.getElementById("cuerpo");
    let titulo = document.createElement("h1");
    titulo.textContent = "¿Que Camara del Curiosity quieres ver?";
    cuerpo.appendChild(titulo);

    let camaras = [];

    let response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b");
    let texto = await response.json();

    for (let i = 0; i < texto.photos.length; i++) {
        if (!camaras.includes(texto.photos[i].camera.name)) {
            camaras.push(texto.photos[i].camera.name);
        }
    }

    let nuevoSelect = document.createElement("select");
    let cad = "";
    for (i = 0; i < camaras.length; i++) {
        cad += "<option>" + camaras[i] + "</option>";
    }
    nuevoSelect.innerHTML = cad;
    nuevoSelect.id = "selectMarte";
    cuerpo.appendChild(nuevoSelect);
}

function borrar() {
    let body = document.getElementsByTagName("body");
    body[0].removeChild(body[0].children[2]);
    let cuerpo = document.createElement("div");
    cuerpo.id = "cuerpo";
    body[0].appendChild(cuerpo);
}

window.addEventListener("load", () => {
    let fotoDia = document.getElementById("btnFoto");
    let marte = document.getElementById("btnMarte");
    let bolas = document.getElementById("btnBolas");

    let cuerpo = document.getElementById("cuerpo");

    fotoDia.addEventListener("click", () => {
        borrar();
        let cuerpo = document.getElementById("cuerpo");
        /* cuerpo.children[0].style.display = "none"; */
        let dia = fecha.getDate();
        let mes = fecha.getMonth() + 1;
        let year = fecha.getFullYear();

        //elementos nuevos
        let titulo = document.createElement("h1");
        titulo.textContent = "Foto del dia";
        cuerpo.appendChild(titulo);

        let date = document.createElement("h3");
        date.textContent = dia + "/" + mes + "/" + year;
        cuerpo.appendChild(date);

        fotoDiaNasa(fecha);

        let nuevoBtn = document.createElement("input");
        nuevoBtn.type = "button";
        nuevoBtn.value = "Previo";
        nuevoBtn.id = "btnPrevio";
        nuevoBtn.classList.add("btnizq");
        cuerpo.appendChild(nuevoBtn);

        let nuevoBtn1 = document.createElement("input");
        nuevoBtn1.type = "button";
        nuevoBtn1.value = "Siguiente";
        nuevoBtn1.id = "btnProximo";
        nuevoBtn1.classList.add("btndrc");
        cuerpo.appendChild(nuevoBtn1);

        let btnPrevio = document.getElementById("btnPrevio");
        let btnProximo = document.getElementById("btnProximo");

        btnPrevio.addEventListener("click", () => {
            let milisegundos = fecha.getTime() - 1000 * 60 * 60 * 24;
            fecha = new Date(milisegundos);

            borrar();

            fotoDia.dispatchEvent(evento);
            centinela = false;
        })

        btnProximo.addEventListener("click", (e) => {
            if (!centinela) {
                let fechaActual = new Date();
                let cadena = fechaActual.getFullYear() + "-" + fechaActual.getMonth() + "-" + (fechaActual.getDate() + 1);
                let milisegundos = fecha.getTime() + 1000 * 60 * 60 * 24;
                fecha = new Date(milisegundos);
                let cad = fecha.getFullYear() + "-" + fecha.getMonth() + "-" + fecha.getDate();

                if (cadena != cad) {
                    borrar();
                    fotoDia.dispatchEvent(evento);
                } else {
                    btnProximo.style.disabled;
                    centinela = true;
                    fecha = new Date();
                    e.preventDefault();
                }
            }
        })
    })

    marte.addEventListener("click", () => {
        borrar();

        Marte();

    })


})