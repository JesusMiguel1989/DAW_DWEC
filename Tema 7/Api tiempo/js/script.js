async function buscar() {
    try {
        let localidad = document.getElementById("localidad");
        let seleccion = document.querySelector("#localidades");
        let response = await fetch("http://dev.virtualearth.net/REST/v1/Locations?query=" + localidad.value + "&key=An7FNlKFn3yTJ-iM_i-GJ1auVbNwIfvnGWO-Zww8uCR8Ok8JXpKlEyP3bIKVVeOe&maxResults=20");
        let texto = await response.json();
        let arrayResultados = texto.resourceSets[0].resources;

        for (let elem of arrayResultados) {
            let nuevaOpcion = document.createElement("option");
            nuevaOpcion.textContent = elem.name;
            seleccion.appendChild(nuevaOpcion);
        }

        mostrar(seleccion.options.selectedIndex);
    } catch (error) {
        console.log("Error :" + error);
    }
}

async function mostrar(eleccion) {
    let seleccion = document.querySelector("#localidades");
    let opcion=seleccion[eleccion].value;
    let response = await fetch("http://dev.virtualearth.net/REST/v1/Locations?query=" + opcion + "&key=An7FNlKFn3yTJ-iM_i-GJ1auVbNwIfvnGWO-Zww8uCR8Ok8JXpKlEyP3bIKVVeOe&maxResults=20");
    let texto = await response.json();
    /* console.log(texto); */
    let latitud=texto.resourceSets[0].resources[0].point.coordinates[0];
    let longitud=texto.resourceSets[0].resources[0].point.coordinates[1];
    
    //segunda promesa
    let tiempo = await fetch("https://api.openweathermap.org/data/2.5/weather?lat="+latitud+"&lon="+longitud+"&appid=027c50a03ea971eac02eee0dd13efc1d&units=metric");
    let texto2= await tiempo.json();
    let temperatura=document.getElementById("temperatura");
    let viento=document.getElementById("viento");
    let humedad=document.getElementById("humedad");
    let imagen=document.getElementById("imagenTiempo");
    let titulo=document.getElementById("localidadEncontrada");
    let descripcion=document.getElementById("descripcion");

    titulo.textContent=opcion;
    imagen.src="https://openweathermap.org/img/wn/"+texto2.weather[0].icon+".png";

    //https://openweathermap.org/img/wn/ .png
    temperatura.textContent="Temperatura actual "+texto2.main.temp + "º";
    viento.textContent="Velocidad del viento  "+ texto2.wind.speed +" Km/h";
    humedad.textContent="Humedad actual: "+ texto2.main.humidity + " %";
    descripcion.textContent=texto2.weather[0].description;
}

window.addEventListener("load", () => {
    let localidad = document.getElementById("localidad");
    let btnbuscar = document.getElementById("buscar");
    let seleccion = document.querySelector("#localidades");

    btnbuscar.addEventListener("click", () => {
        seleccion.innerHTML="";
        buscar();
        //let numero=seleccion.options.selectedIndex;
        //console.log(numero);
        //mostrar(seleccion.options.selectedIndex);
    })

    seleccion.addEventListener("change", () => {
        mostrar(seleccion.options.selectedIndex);
    })
})
