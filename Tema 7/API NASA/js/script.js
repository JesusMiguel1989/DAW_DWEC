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

async function fotoDiaNasa(fecha1) {
    //esta funcion se mete en la API de la NASA para coger la foto del dia de la nasa, y las de dias anteriores
    //cojo el elemento cuerpo del DOM
    let cuerpo = document.getElementById("cuerpo");

    //hago que el objeto fecha global sea el mismo que el indicado en la pagina de la foto
    fecha=fecha1;
    //saco el dia.mes y año de la foto
    let dia = fecha1.getDate();
    let mes = fecha1.getMonth() + 1;
    let year = fecha1.getFullYear();

    //hago la peticion a la API de la nasa para que me devuelva la informacion de la foto de ese día en particular
    let response = await fetch("https://api.nasa.gov/planetary/apod?api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b&date=" + year + "-" + mes + "-" + dia);
    let texto = await response.json();

    //reo un elemento h1 que se utilizara para poner el titulo de la foto
    let titulo = document.createElement("h1");
    //establezco el textconten de la foto a lo que me devuelve la peticion (en este caso es title.)
    titulo.textContent = texto.title;
    //añado el elemento al cuerpo
    cuerpo.appendChild(titulo);

    //de la informacion devuelta por la promesa, sacoel tipo de archivo que es, si es video o imagen
    if (texto.media_type == "image") {
        //si es imagen hago un img y lo añado
        let nuevaFoto = document.createElement("img");
        nuevaFoto.src = texto.url;
        cuerpo.appendChild(nuevaFoto);
    }
    if (texto.media_type == "video") {
        //si es un video creo un elemento video y lo añado, le indico las dimensiones del reproductor
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
    //esta funcion cuenta las fotos que tiene la nasa de las diferentes camaras del Curiosity.
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
    //esta funcion convierte el acronimo de la camara en un numero, que se utilizara despues para saber la posicion en el array de camara
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
    //funcion asincrona que busca las fotos de la camara seleccionada en la API
    //cuento las fotos de cada camara 
    Camaras();
    let cad = "";//se usara para la insercion de las camaras
    let cuerpo2 = document.getElementById("cuerpo2");
    //creo e inserto un elemento h1 que sera el titulo del campo
    let titulo = document.createElement("h1");
    titulo.textContent = "¿Que Camara del Curiosity quieres ver?";
    cuerpo2.appendChild(titulo);

    //elimino el campo 1 por si estuviera de otro campo
    borrar();
    //creo el elemento select donde estaran las camaras, estas se podran seleccionar
    let nuevoSelect = document.createElement("select");

    for (i = 0; i < arrayCamaras.length; i++) {
        cad += "<option>" + arrayCamaras[i] + "</option>";
    }
    nuevoSelect.innerHTML = cad;
    nuevoSelect.id = "selectMarte";
    cuerpo2.appendChild(nuevoSelect);

    //los siguientes elementos seran los causantes de los eventos, botones o select
    let marteSelector = document.getElementById("selectMarte");
    let anterior = document.getElementById("anterior");
    let siguiente = document.getElementById("siguiente");

    let camara
    marteSelector.addEventListener("change", () => {
        //se modifica el select y salta
        camara = dispositivo();
        fotomartebtn = 0;
        Marte2(camara, 0);

    })

    anterior.addEventListener("click", (e) => {
        //este boton se usa para navegar dentro de las camaras elegidas
        if (fotomartebtn >= 1) {
            fotomartebtn--;
            Marte2(camara, fotomartebtn);
        } else {
            e.preventDefault();
        }
    })

    siguiente.addEventListener("click", (ev) => {
        //este boton se usa para navegar dentro de las camaras elegidas
        if (fotomartebtn < arrayFotos[camara + 1]) {
            fotomartebtn++;
            Marte2(camara, fotomartebtn);
        } else {
            ev.preventDefault();
        }
    })
}

/////fotos de Marte
async function Marte2(camara, fotomartebtn) {
    //hago la peticion a la api para sacar la foto que quiere el usuario, dandole la camara, y el numeor de la foto
    let response = await fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=fBkefbv4EJ9jhvI7wBpSFbzpF2MPFegGAwXJfL2b&camera=" + arrayCamaras[camara + 1]);
    let texto2 = await response.json();

    //borro posibles campos de otras opcioens
    borrar();
    let cuerpo = document.getElementById("cuerpo");

    //indico el nombre completo de la camara
    let nombre = document.createElement("h3");
    switch (arrayCamaras[camara + 1]) {
        case "FHAZ":
            nombre.textContent = "Front Hazard Avoidance Camera";
            break;
        case "RHAZ":
            nombre.textContent = "Rear Hazard Avoidance Camera";
            break;
        case "MAST":
            nombre.textContent = "Mast Camera";
            break;
        case "FHAZ":
            nombre.textContent = "Front Hazard Avoidance Camera";
            break;
        case "CHEMCAM":
            nombre.textContent = "Chemestry and Camera Complex";
            break;
        case "NAVCAM":
            nombre.textContent = "Navigation Camera";
            break;
    }
    nombre.classList.add("titulo");
    cuerpo.appendChild(nombre);

    //inserto el elemento foto
    let img = texto2.photos[fotoMarte].img_src;
    let foto = document.createElement("img");
    foto.src = texto2.photos[fotomartebtn].img_src;
    cuerpo.appendChild(foto);
}

async function Meteoros(num) {
    
    //funcion que pide informacion a la API de cneos que devuelve informacion d elos meteoritos avistados
    let nuevodiv = document.createElement("div");
    nuevodiv.id = "datos";
    nuevodiv.classList.add("datos");
    cuerpo.appendChild(nuevodiv);

    //creo un div para el mapa
    let mapa = document.createElement("div");
    mapa.id = "map";
    cuerpo.appendChild(mapa);

    //pido informacion a la API
    let response = await fetch("https://ssd-api.jpl.nasa.gov/fireball.api");
    //,{ method:"get", mode:"no-cors"}
    let texto = await response.json();

    topeMeteoritos = texto.count;

    //saco la latitud y longitud y compruebo su direccion para saber si es positivo o negativo (coordenadas)
    let latitud = texto.data[num][3];
    if (texto.data[num][4] == "S") {
        latitud *= -1;
    }

    let longitud = texto.data[num][5];
    if (texto.data[num][6] == "W") {
        longitud *= -1;
    }

    //pongo la fecha global a la fecha del avistamiento del meteorito
    let fecha = new Date(texto.data[num][0]);

    //hago una peticion a la API openWeather para sacar el tiempo que hacia en ese momento concreto
    response = await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + latitud + "&lon=" + longitud + "&appid=027c50a03ea971eac02eee0dd13efc1d&units=metric&dt=" + fecha.getTime() / 1000);
    let texto2 = await response.json();

    //creo un div para insertar toda la informacion que se tiene del avistamiento
    let datos = document.getElementById("datos");
    datos.innerHTML="<h2>Datos del Cometa</h2>"
    let dato = document.createElement("table");
    dato.innerHTML += "<tr><th class='encabezado'>DATOS</th><th class='encabezado'>VALORES</th></tr><tr><th>Momento del avistamiento</th><td>" + texto.data[num][0] + "</td></tr>" +
        "<tr><th>Energia </th><td>" + texto.data[num][1] + " J</td></tr>" +
        "<tr><th>Energia del impacto</th><td>" + texto.data[num][2] + " J</td></tr>" +
        "<tr><th>Latitud</th><td>" + texto.data[num][3] + " Grados</td></tr>" +
        "<tr><th>Direccion Latitud</th><td>" + texto.data[num][4] + "</td></tr>" +
        "<tr><th>Longitud</th><td>" + texto.data[num][5] + " Grados</td></tr>" +
        "<tr><th>Direccion Longitud</th><td>" + texto.data[num][6] + "</td></tr>" +
        "<tr><th>Altitud</th><td>" + texto.data[num][7] + " KM</td></tr>" +
        "<tr><th>Velocidad</th><td>" + texto.data[num][8] + " m/s</td></tr>" +
        "<tr><th>Tiempo</th><td>" + texto2.weather[0].main + "</td></tr>" +
        "<tr><th>Velocidad del Viento</th><td>" + texto2.wind.speed + " Km/h</td></tr>" +
        "<tr><th>Humedad</th><td>" + texto2.main.humidity + " %</td></tr>";
    datos.appendChild(dato);

    //div mapa, "llama" a la "API" que muestra el mapa, al cual le paso las coordenadas del avistamiento, y el zoom que queremos
    //el zoom puede ir desde 20 a 1, siendo 1 el mas alejado
    let map = L.map('map').setView([latitud, longitud], 3);

    //llamamiento a la "API" del mapa
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    //marcamos el punto exacto del avistamiento con una marca en el mapa
    let marker = L.marker([latitud, longitud]).addTo(map);
}

function borrar() {
    //funcion que elimitna el div cuepor
    let cuerpo = document.getElementById("cuerpo");
    let body = document.getElementsByTagName("body");
    body[0].removeChild(cuerpo);
    
    //lo vuelvo a crear para trabajar con el
    let nuevo = document.createElement("div");
    nuevo.id = "cuerpo";
    body[0].appendChild(nuevo);
}

function Crear(fecha) {
    //funcion que crea los campos para la opcion foto del dia
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

    //campo para poder indicar la fecha que se desea y su boton que busca dicho dia
    let fechaUsuario = document.createElement("input");
    fechaUsuario.type = "date";
    fechaUsuario.id = "fechaUsuario";
    fechaUsuario.classList.add("date");
    cuerpo.appendChild(fechaUsuario);

    let nuevoBtn2 = document.createElement("input");
    nuevoBtn2.type = "button";
    nuevoBtn2.value = "Buscar";
    nuevoBtn2.id = "btnBuscar";
    nuevoBtn2.classList.add("btnctr");
    cuerpo.appendChild(nuevoBtn2);
}

window.addEventListener("load", () => {

    //execCommand('C:\Program Files\Google\Chrome\Application\chrome.exe', '--disable-web-security');
    //una vez que carga la página se trabaja con ella
    let fotoDia = document.getElementById("btnFoto");
    let marte = document.getElementById("btnMarte");

    //let marteSelector = document.getElementById("selectMarte");
    let bolas = document.getElementById("btnBolas");

    //let cuerpo = document.getElementById("cuerpo");

    fotoDia.addEventListener("click", () => {
        //se elige opcion foto del dia
        borrar();

        let cuerpo2 = document.getElementById("cuerpo2");

        if (cuerpo2 != null) {
            let siguiente = document.getElementById("siguiente");
            let anterior = document.getElementById("anterior");
            let body = document.getElementsByTagName("body");
            body[0].removeChild(cuerpo2);
            if(siguiente!=null){
                body[0].removeChild(siguiente);
                body[0].removeChild(anterior);
            }
        }

        let cuerpo = document.getElementById("cuerpo");
        /* cuerpo.children[0].style.display = "none"; */

        fotoDiaNasa(fecha);

        Crear(fecha);

        let btnPrevio = document.getElementById("btnPrevio");
        let btnProximo = document.getElementById("btnProximo");
        let btnBuscar = document.getElementById("btnBuscar");

        btnBuscar.addEventListener("click", () => {
            let date = document.getElementById("fechaUsuario");
            let fecha = new Date(date.value);
            //let cuerpo = document.getElementById("cuerpo");
            console.log(fecha);

            borrar();

            Crear(fecha);

            fotoDiaNasa(fecha);
        })

        btnPrevio.addEventListener("click", () => {
            let milisegundos = fecha.getTime() - 1000 * 60 * 60 * 24;
            fecha = new Date(milisegundos);

            borrar();
            Crear(fecha);

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
                    Crear(fecha);
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
        //se elige la opcion de fotos de marte
        borrar();

        let body = document.getElementsByTagName("body");
        let cuerpo2 = document.getElementById("cuerpo2");

        if (cuerpo2 != null) {
            let siguiente = document.getElementById("siguiente");
            let anterior = document.getElementById("anterior");

            body[0].removeChild(cuerpo2);
        }

        //let body = document.getElementsByTagName("body");
        let nuevo = document.createElement("div");
        nuevo.id = "cuerpo2";
        body[0].appendChild(nuevo);

        let anterior = document.createElement("input");
        anterior.type = "button";
        anterior.id = "anterior";
        anterior.value = "<=";
        anterior.classList.add("flechas");
        body[0].appendChild(anterior);

        let siguiente = document.createElement("input");
        siguiente.type = "button";
        siguiente.id = "siguiente";
        siguiente.value = "=>";
        siguiente.classList.add("flechas");
        body[0].appendChild(siguiente);
        Marte();
    })
    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    bolas.addEventListener("click", () => {
        //opcion cometas
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
        let padre = cuerpo.parentElement;
        let btndiv = document.createElement("div");
        btndiv.id = "cuerpo2";
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
        //let body = document.getElementsByTagName("body");
    })
})