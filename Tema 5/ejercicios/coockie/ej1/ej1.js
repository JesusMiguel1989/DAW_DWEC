
let cookie = document.cookie;
let capaFormulario = document.getElementById("capaFormulario");
let capaSaludo = document.getElementById("capaSaludo");
let cTextoUsuario = document.getElementById("cTextoUsuario");
let parrafoSaludo = document.getElementById("parrafoSaludo");
let botonSaludo = document.getElementById("botonSaludo");

if (cookie == "") {
    capaFormulario.style.display = "block";

    let fecha = new Date();
    let aux = fecha.getTime() + (1000 * 60 * 60 * 24 * 7);
    let fechaCaducidad = new Date(aux);
    
    console.log(fechaCaducidad);
    cTextoUsuario.addEventListener("keyup", (evento) => {
        if (evento.key == "Enter") {
            alert("Introducido");
            grabarCookie("nombre",cTextoUsuario.value,aux);
            console.log("nombre=" + cTextoUsuario.value + "; expires=" + fechaCaducidad.toUTCString())
            //document.cookie = "nombre=" + cTextoUsuario.value + "; expires=" + fechaCaducidad.toUTCString();
        }
    })
    
    
} else {
    capaFormulario.style.display = "none";
    capaSaludo.style.display = "block";

    coockie=leerCookie("nombre");
    parrafoSaludo.textContent="Bienvenido " +  cookie;
    /*
    cookie = document.cookie;
    let nombre = cookie.split("=");
    parrafoSaludo.textContent="Bienvenido " + nombre[1];//leerCookie(nombre);
*/
    botonSaludo.addEventListener("click", () => {
        /*let fecha = new Date();
        let aux = fecha.getTime() - 1;
        let fechaBorrado = new Date(aux);*/

        borrarCookie("nombre");
        //document.cookie = "nombre=" + cTextoUsuario.value + ";expires=" + fechaBorrado.toUTCString();
    })

}
