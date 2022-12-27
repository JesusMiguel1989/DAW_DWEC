let cookie = document.cookie;
let errores = document.getElementById("errores");
let intentos = document.getElementById("intentos");
let enviar = document.getElementById("enviar");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let edad = document.getElementById("edad");
let nif = document.getElementById("nif");
let email = document.getElementById("email");
let provincia = document.getElementById("provincia");
let fecha = document.getElementById("fecha");
let telefono = document.getElementById("telefono");
let hora = document.getElementById("hora");

//variables del programa
let validacion = false;
let validacion2;//variable que controla si existen errores


if (cookie = "") {
    document.cookie = "intentos=1";
    cookie = document.cookie;
    let cadena = cookie.split("=");
    intentos.innerHTML = "<h1>Intento de envios del formulario: " + cadena[1] + "</h1>";
}//si no existe cookie

//focusout por blur
nombre.addEventListener("blur", (evento) => {
    let cadena = nombre.value;
    nombre.textContent = "";
    cadena = cadena.toUpperCase();
    nombre.value = cadena;
});//paso a mayusculas

apellidos.addEventListener("blur", (evento) => {
    let cadena = apellidos.value;
    cadena = cadena.toUpperCase();
    apellidos.value = cadena;
});//paso a mayusculas apellidos

/*
let ponerFoco= new Event("Focus");
capa.dispatchEvent(ponerFoco);
*/
let ponerFoco = new Event("Focus");


function nombreApellidos(nom, ape) {
    let validacion = true;
    nombre.style.border = "1px solid black";
    apellidos.style.border = "1px solid black";
    if (nom == "" && ape == "") {
        validacion = false;
        nombre.style.border = "2px solid red";
        apellidos.style.border = "2px solid red";
        errores.textContent += "Nombre Apellidos";
    } else {
        if (nombre.value == "") {
            nombre.dispatchEvent(ponerFoco);
            validacion = false;
            nombre.style.border = "2px solid red";
            errores.textContent = "Nombre ";
        } else {
            if (apellidos == "") {
                apellidos.dispatchEvent(ponerFoco);
                validacion = false;
                apellidos.style.border = "2px solid red";
                errores.textContent = "Apellidos";
            }
        }
    }
    return validacion;
}//validacion de apellios y nombre (vacio)

function edadValidacion(num) {
    let validacion = true;
    if (isNaN(num) || num < 0 || num > 105) {
        edad.dispatchEvent(ponerFoco);
        validacion = false
        //////////////////////////////////////////////////////////////////////
    }
    return validacion;
}

function nifValidacion(nif) {
    let validacion = true;
    let expresion = /^\d{8}[a-zA-Z]/;
    validacion = expresion.test(nif);
    if (validacion == false) {
        //nif.dispatchEvent(ponerFoco);
        //////////////////////////////////////////////////////////////////////
        //    nif.style.border = "1px solid red";
    }

    return validacion;
}

function mailValidacion(email) {
    let validacion = true;
    let expresion = /^[a-z0-9\.\-\_]{3,}\@[a-z0-9\.\-\_]{3,}\.[a-z0-9]{2,3}/i;
    validacion = expresion.test(email);
    //////////////////////////////////////////////////////////////////////
    return validacion;
}

function provinciaValidacion(validacion) {
    if (validacion == "0") {
        provincia.dispatchEvent(ponerFoco);
        return false;
    } else {
        return true;
    }
}

function fechaValidacion(fecha) {
    let expresion = /\d{2}\/\d{2}\/\d{4}/;
    if (expresion.test(fecha)) {
        //fecha.dispatchEvent(ponerFoco);
        return true;
    } else {
        return false;
    }

    ////////////////////////////////////////////////////////////////////////
}

function telefonoValidacion(telefono) {
    telefono = parseInt(telefono);
    let expresion = /[0-9]{9}/;
    if (expresion.test(telefono)) {
        return true;
    } else {
        return false;
    }

    ////////////////////////////////////////////////////////////////////////
}

function horaValidacion(hora) {
    let expresion = /[0-2]{1}[0-9]{1}\:{1}[0-5]{1}[0-9]{1}/;
    if (expresion.test(hora)) {
        return true;
    } else {
        return false;
    }
    /////////////////////////////////////////////////////////////////////////////
}

enviar.addEventListener("click", (e) => {
    e.preventDefault();
    validacion2 = true;
    validacion = nombreApellidos(nombre.value, apellidos.value);
    if (validacion == false) {
        validacion2 = false;
    }

    validacion = edadValidacion(parseInt(edad.value));
    edad.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += " Edad ";
        edad.style.border = "2px solid red";
        validacion2 = false;
    }

    validacion = nifValidacion(nif.value);
    nif.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += "\nNIF";
        nif.style.border = "2px solid red";
        validacion2 = false;
    }
    validacion = mailValidacion(email.value);
    email.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += "\nEmail";
        email.style.border = "2px solid red";
        validacion2 = false;
    }

    validacion = provinciaValidacion(provincia.value);
    provincia.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += "\nProvincia";
        provincia.style.border = "2px solid red";
        validacion2 = false;
    }

    validacion = fechaValidacion(fecha.value);
    fecha.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += "\nFecha";
        fecha.style.border = "2px solid red";
        validacion2 = false;
    }//fecha

    validacion = telefonoValidacion(telefono.value);
    telefono.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += "\nTelefono";
        telefono.style.border = "2px solid red";
        validacion2 = false;
    }//telefono

    validacion = horaValidacion(hora.value);
    hora.style.border = "1px solid black";
    if (validacion == false) {
        errores.textContent += "\nHora ";
        hora.style.border = "2px solid red";
        validacion2 = false;
    }//hora

    if (validacion2 == true) {
        let cadena = confirm("Quieres enviar los datos");
        if (cadena == true) {
            enviar.addEventListener("submit",()=>{});
        }
    }
});