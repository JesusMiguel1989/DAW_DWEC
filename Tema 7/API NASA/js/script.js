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

    if (texto.media_type == "image") {
        let nuevaFoto = document.createElement("img");
        nuevaFoto.src = texto.url;
        cuerpo.appendChild(nuevaFoto);
    }
    if (texto.media_type == "video") {
        let nuevoVideo = document.createElement("iframe");
        nuevoVideo.src = texto.url;
        nuevoVideo.title = "YouTube video player"
        nuevoVideo.frameborder = "0"
        nuevoVideo.width = "780px";
        nuevoVideo.height = "500px";
        nuevoVideo.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        nuevoVideo.allowfullscreen = true;
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
    let cuerpo = document.getElementById("cuerpo");
    let body = document.getElementsByTagName("body");
    body[0].removeChild(cuerpo);
    let nuevo = document.createElement("div");
    nuevo.id = "cuerpo";
    body[0].appendChild(nuevo);
}

function Crear() {

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

    let fechaUsuario = document.createElement("input");
    fechaUsuario.type = "date";
    fechaUsuario.id = "fechaUsuario";
    fechaUsuario.classList.add("btnctr");
    cuerpo.appendChild(fechaUsuario);

    let nuevoBtn2 = document.createElement("input");
    nuevoBtn2.type = "button";
    nuevoBtn2.value = "Buscar";
    nuevoBtn2.id = "btnBuscar";
    nuevoBtn2.classList.add("btnctr");
    cuerpo.appendChild(nuevoBtn2);
}

window.addEventListener("load", () => {
    let fotoDia = document.getElementById("btnFoto");
    let marte = document.getElementById("btnMarte");

    let marteSelector=document.getElementById("selectMarte");
    let bolas = document.getElementById("btnBolas");

    let cuerpo = document.getElementById("cuerpo");

    fotoDia.addEventListener("click", () => {
        borrar();
        let cuerpo = document.getElementById("cuerpo");
        /* cuerpo.children[0].style.display = "none"; */

        fotoDiaNasa(fecha);

        Crear();

        let btnPrevio = document.getElementById("btnPrevio");
        let btnProximo = document.getElementById("btnProximo");
        let btnBuscar = document.getElementById("btnBuscar");

        btnBuscar.addEventListener("click", () => {
            let date = document.getElementById("fechaUsuario");
            let fecha = new Date(date.value);
            let cuerpo = document.getElementById("cuerpo");

            borrar();

            Crear();

            fotoDiaNasa(fecha);
        })

        btnPrevio.addEventListener("click", () => {
            let milisegundos = fecha.getTime() - 1000 * 60 * 60 * 24;
            fecha = new Date(milisegundos);

            borrar();
            Crear();

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
                    Crear();
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

    selectMarte.addEventListener("change",()=>{
        
    })


})