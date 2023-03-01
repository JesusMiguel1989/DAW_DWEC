let fecha = new Date();
let evento = new Event("click");
let centinela = false;
let meteorito = 0;
let fotoMarte = 0;
let topeMeteoritos = 1000;
let arrayCamaras = [' ', 'FHAZ', 'RHAZ', 'MAST', 'CHEMCAM', 'NAVCAM'];
let arrayFotos = [0, 0, 0, 0, 0, 0];
let fotomartebtn = 0;

/*Revisar Meteoritos y marte*/

async function fotoDiaNasa(fecha) {
    let cuerpo = document.getElementById("cuerpo");

    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let year = fecha.getFullYear();

    let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b&date=" + year + "-" + mes + "-" + dia);
    let texto = await response.json();

    ///////////////////////////////////////////////////titulo de la foto

    let titulo = document.createElement("h1");
    titulo.textContent = texto.title;
    cuerpo.appendChild(titulo);

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


async function Camaras() {
    let response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b");
    let texto = await response.json();

    let i, posicion = 0;
    for (i = 0; i < texto.photos.length; i++) {
        if (texto.photos[i].camera.name == arrayCamaras[posicion]) {
            arrayFotos[posicion]++;
        } else {
            posicion++;
        }
    }
}

function dispositivo() {
    let marteSelector = document.getElementById("selectMarte");
    //doy un valor a camara para saber que camara es y cuantas fotos tienen
    let camara;
    switch (marteSelector.value) {
        case "FHAZ":
            camara = 0;
            break;
        case "RHAZ":
            camara = 1;
            break;
        case "MAST":
            camara = 2;
            break;
        case "CHEMCAM":
            camara = 3;
            break;
        case "NAVCAM":
            camara = 4;
            break;
        default:
            break;
    }
    return camara;
}

async function Marte() {
    Camaras();
    let cad = "";
    let cuerpo = document.getElementById("cuerpo");
    let cuerpo2 = document.getElementById("cuerpo2");
    let titulo = document.createElement("h1");
    titulo.textContent = "¿Que Camara del Curiosity quieres ver?";
    cuerpo2.appendChild(titulo);

    borrar();
    let nuevoSelect = document.createElement("select");

    for (i = 0; i < arrayCamaras.length; i++) {
        cad += "<option>" + arrayCamaras[i] + "</option>";
    }
    nuevoSelect.innerHTML = cad;
    nuevoSelect.id = "selectMarte";
    cuerpo2.appendChild(nuevoSelect);
    let marteSelector = document.getElementById("selectMarte");
    let anterior = document.getElementById("anterior");
    let siguiente = document.getElementById("siguiente");

    //doy un valor a camara para saber que camara es y cuantas fotos tienen

    let camara
    marteSelector.addEventListener("change", () => {
        camara = dispositivo();
        fotomartebtn = 0;
        Marte2(camara, 0);

    })

    anterior.addEventListener("click", (e) => {
        if (fotomartebtn >= 1) {
            fotomartebtn--;
            Marte2(camara, fotomartebtn);
        } else {
            e.preventDefault();
        }
    })

    siguiente.addEventListener("click", (ev) => {
        if (fotomartebtn < arrayFotos[camara + 1]) {
            fotomartebtn++;
            Marte2(camara, fotomartebtn);
        } else {
            ev.preventDefault();
        }
    })
}

/////////////////////////////////////////////////////////////////fotos de Marte
async function Marte2(camara, fotomartebtn) {

    let response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b&camera=" + arrayCamaras[camara + 1]);
    let texto2 = await response.json();

    borrar();
    let cuerpo = document.getElementById("cuerpo");

    let img = texto2.photos[fotoMarte].img_src;
    let foto = document.createElement("img");
    foto.src = texto2.photos[fotomartebtn].img_src;
    cuerpo.appendChild(foto);
}

async function Meteoros(num) {

    let nuevodiv = document.createElement("div");
    nuevodiv.id = "datos";
    nuevodiv.classList.add("datos");
    cuerpo.appendChild(nuevodiv);

    //creo un div para el mapa
    let mapa = document.createElement("div");
    mapa.id = "map";
    cuerpo.appendChild(mapa);

    let response = await fetch("https://ssd-api.jpl.nasa.gov/fireball.api");
    //,{ method:"get", mode:"no-cors"}
    let texto = await response.json();

    /* for (let i = 0; i < texto.data.length; i++) {
        arrayBolas.push(texto.data[i]);
    } */
    topeMeteoritos = texto.count;

    let latitud = texto.data[num][3];
    if (texto.data[num][4] == "S") {
        latitud *= -1;
    }

    let longitud = texto.data[num][5];
    if (texto.data[num][6] == "W") {
        longitud *= -1;
    }
    let fecha = new Date(texto.data[num][0]);
    console.log(fecha.getMinutes());

    response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&appid=027c50a03ea971eac02eee0dd13efc1d&units=metric&dt=" + fecha.getTime() / 1000);
    let texto2 = await response.json();

    let datos = document.getElementById("datos");
    let dato = document.createElement("table");
    dato.innerHTML = "<tr><td>Momento impacto</td><td>" + texto.data[num][0] + "</td></tr>" +
        "<tr><td>Energia </td><td>" + texto.data[num][1] + " J</td></tr>" +
        "<tr><td>Energia del impacto</td><td>" + texto.data[num][2] + " J</td></tr>" +
        "<tr><td>Latitud</td><td>" + texto.data[num][3] + " Grados</td></tr>" +
        "<tr><td>Direccion Latitud</td><td>" + texto.data[num][4] + "</td></tr>" +
        "<tr><td>Longitud</td><td>" + texto.data[num][5] + " Grados</td></tr>" +
        "<tr><td>Direccion Longitud</td><td>" + texto.data[num][6] + "</td></tr>" +
        "<tr><td>Altitud</td><td>" + texto.data[num][7] + " KM</td></tr>" +
        "<tr><td>Velocidad</td><td>" + texto.data[num][8] + " m/s</td></tr>" +
        "<tr><td>Tiempo</td><td>" + texto2.weather[0].main + "</td></tr>" +
        "<tr><td>Velocidad del Viento</td><td>" + texto2.wind.speed + " Km/h</td></tr>" +
        "<tr><td>Humedad</td><td>" + texto2.main.humidity + " %</td></tr>";


    datos.appendChild(dato);

    //div mapa
    let map = L.map('map').setView([latitud, longitud], 3);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //punto
    let marker = L.marker([latitud, longitud]).addTo(map);


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

    let marteSelector = document.getElementById("selectMarte");
    let bolas = document.getElementById("btnBolas");

    let cuerpo = document.getElementById("cuerpo");

    fotoDia.addEventListener("click", () => {
        borrar();
        let cuerpo2 = document.getElementById("cuerpo2");

        if (cuerpo2 != null) {
            let siguiente = document.getElementById("siguiente");
            let anterior = document.getElementById("anterior");
            let body = document.getElementsByTagName("body");
            body[0].removeChild(cuerpo2);
            body[0].removeChild(siguiente);
            body[0].removeChild(anterior);
        }

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
    //////////////////////////////////////////////////////////////////////////////////////////////////////
    marte.addEventListener("click", () => {
        borrar();

        let cuerpo2 = document.getElementById("cuerpo2");

        if (cuerpo2 != null) {
            let siguiente = document.getElementById("siguiente");
            let anterior = document.getElementById("anterior");
            let body = document.getElementsByTagName("body");
            body[0].removeChild(cuerpo2);
            body[0].removeChild(siguiente);
            body[0].removeChild(anterior);
        }

        let body = document.getElementsByTagName("body");
        let nuevo = document.createElement("div");
        nuevo.id = "cuerpo2";
        body[0].appendChild(nuevo);

        let anterior = document.createElement("input");
        anterior.type = "button";
        anterior.id = "anterior";
        anterior.value = "<=";
        body[0].appendChild(anterior);

        let siguiente = document.createElement("input");
        siguiente.type = "button";
        siguiente.id = "siguiente";
        siguiente.value = "=>";
        body[0].appendChild(siguiente);
        Marte();

    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////


    bolas.addEventListener("click", () => {
        borrar();
        let cuerpo2 = document.getElementById("cuerpo2");
        let body = document.getElementsByTagName("body");
        body[0].removeChild(cuerpo2);

        let cuerpo = document.getElementById("cuerpo");
        let padre = cuerpo.parentElement;
        let btndiv = document.createElement("div");
        btndiv.innerHTML = "<input type='button' class='btnizq' value='Anterior' id='anteriorMeteorito'>";
        btndiv.innerHTML += "<input type='button' class='btndrc' value='Siguiente' id='siguienteMeteorito'>";
        padre.appendChild(btndiv);


        //creo un div para los datos


        //saco los id de los botones
        let anterior = document.getElementById("anteriorMeteorito");
        let siguiente = document.getElementById("siguienteMeteorito");

        anterior.addEventListener("click", (e) => {
            if (meteorito > 0) {
                meteorito--;
                borrar();
                Meteoros(meteorito);
            } else {
                e.preventDefault();
            }
        });//boton anterior

        siguiente.addEventListener("click", (e) => {
            if (meteorito == topeMeteoritos) {
                e.preventDefault();
            } else {
                meteorito++;
                borrar();
                Meteoros(meteorito);
            }
        });//boton siguiente

        Meteoros(meteorito);
    })


})