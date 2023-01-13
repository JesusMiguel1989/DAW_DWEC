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
let reset = document.getElementById("button");
let formulario = document.getElementById("formulario");

document.cookie = "intentos=0";
let cookie = document.cookie;

//variables del programa
let validacion = false;
let validacion2;//variable que controla si existen errores

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


function nombreApellidos(nom, ape) {
    let validacion = true;
    nombre.style.border = "1px solid black";
    apellidos.style.border = "1px solid black";
    if (nom == "" && ape == "") {
        validacion = false;
        nombre.style.border = "2px solid red";
        apellidos.style.border = "2px solid red";
        errores.innerHTML = "Nombre " + "<br>" + "Apellidos" + "<br>" + errores.innerHTML;
    } else {
        if (nombre.value == "") {
            validacion = false;
            nombre.style.border = "2px solid red";
            nombre.focus();
            errores.innerHTML = "Nombre " + "<br>" + errores.innerHTML;
        } else {
            if (apellidos.value == "") {
                validacion = false;
                apellidos.style.border = "2px solid red";
                apellidos.focus();
                errores.innerHTML = "Apellidos" + "<br>" + errores.innerHTML;
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
    }
    return validacion;
}//validacion edad

function nifValidacion(nif) {
    let validacion = true;
    let expresion = /^\d{8}[a-zA-Z]/;
    validacion = expresion.test(nif);
    return validacion;
}//validacion nif

function mailValidacion(email) {
    let validacion = true;
    let expresion = /^[a-z0-9\.\-\_]{3,}\@[a-z0-9\.\-\_]{3,}\.[a-z0-9]{2,3}/i;
    validacion = expresion.test(email);
    return validacion;
}//validacion mail

function provinciaValidacion(validacion) {
    if (validacion == "0") {
        provincia.dispatchEvent(ponerFoco);
        return false;
    } else {
        return true;
    }
}//validacion provincia

function fechaValidacion(fecha) {
    let expresion = /\d{2}\/\d{2}\/\d{4}/;
    if (expresion.test(fecha)) {
        return true;
    } else {
        return false;
    }
}//validacion fecha

function telefonoValidacion(telefono) {
    telefono = parseInt(telefono);
    let expresion = /[0-9]{9}/;
    if (expresion.test(telefono)) {
        return true;
    } else {
        return false;
    }
}//validacion telefono

function horaValidacion(hora) {
    let expresion = /[0-2]{1}[0-9]{1}\:{1}[0-5]{1}[0-9]{1}/;
    if (expresion.test(hora)) {
        return true;
    } else {
        return false;
    }
}//validacion hora

formulario.addEventListener("submit", (e) => {
    errores.innerHTML = "";
    if (!cookie == "") {
        cookie = document.cookie;
        let contador = parseInt(cookie.split("=")[1]);
        contador++;
        document.cookie = "intentos=" + contador;
    }
    intentos.textContent = "Intento de envio de formulario: " + document.cookie.split("=")[1];

    validacion2 = true;
    validacion = nombreApellidos(nombre.value, apellidos.value);
    if (validacion == false) {
        validacion2 = false;
    }

    validacion = edadValidacion(parseInt(edad.value));
    edad.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "Edad " + "<br>" + errores.innerHTML;
        edad.style.border = "2px solid red";
        edad.focus();
        validacion2 = false;
    }

    validacion = nifValidacion(nif.value);
    nif.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "NIF" + "<br>" + errores.innerHTML;
        nif.style.border = "2px solid red";
        nif.focus();
        validacion2 = false;
    }
    validacion = mailValidacion(email.value);
    email.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "Email" + "<br>" + errores.innerHTML;
        email.style.border = "2px solid red";
        email.focus();
        validacion2 = false;
    }

    validacion = provinciaValidacion(provincia.value);
    provincia.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "Provincia" + "<br>" + errores.innerHTML;
        provincia.style.border = "2px solid red";
        provincia.focus();
        validacion2 = false;
    }

    validacion = fechaValidacion(fecha.value);
    fecha.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "Fecha" + "<br>" + errores.innerHTML;
        fecha.style.border = "2px solid red";
        fecha.focus();
        validacion2 = false;
    }//fecha

    validacion = telefonoValidacion(telefono.value);
    telefono.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "Telefono" + "<br>" + errores.innerHTML;
        telefono.style.border = "2px solid red";
        telefono.focus();
        validacion2 = false;
    }//telefono

    validacion = horaValidacion(hora.value);
    hora.style.border = "1px solid black";
    if (validacion == false) {
        errores.innerHTML = "Hora" + "<br>" + errores.innerHTML;
        //hora.classList.add("error");
        hora.style.border = "2px solid red";
        hora.focus();
        validacion2 = false;
    }//hora

    if (validacion2 == true) {
        let cadena = confirm("Quieres enviar los datos");
        if (cadena == false) {
            e.preventDefault();
        }
    } else {
        e.preventDefault();
    }
});//captura submit del formulario

reset.addEventListener("click", () => {
    errores.innerHTML = "";
    edad.style.border = "1px solid black";
    nombre.style.border = "1px solid black";
    apellidos.style.border = "1px solid black";
    nif.style.border = "1px solid black";
    email.style.border = "1px solid black";
    provincia.style.border = "1px solid black";
    fecha.style.border = "1px solid black";
    telefono.style.border = "1px solid black";
    hora.style.border = "1px solid black";
});//captura del evento reset

//para añadir una clase a un elemento
//nombre.classList.add("clase"); AÑADE
//nombre.classList.remove("clase"); elimina
//poniendo un solo & en el if final, la evaluacion sigue a pesar de no cumplirse la anterior