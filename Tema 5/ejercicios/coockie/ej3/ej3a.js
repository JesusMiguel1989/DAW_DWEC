//contador de visitas en una web con la misma cookie
//una cookie contador que cuenta visitas=> duracion un año
//se crea con 1 
//si existe cont++ 
//alert cuando aumente y se guarde V
//cookie sesionAbierta si o no segun conteste en el cuadro de dialogo
//si no existe crea la cookie con su valor
//si existe muestra o no las visitas
//si el usuario no acepta las cookies se borran

//FALTA GUARDAR LA COOKIE DE RESPUESTA

let respuesta = confirm("Quieres guardar las cookies");

if (respuesta == true) {
    let cookie = document.cookie;
    if (cookie == "") {//si existe la cookie
        //calculamos un año
        let fecha = new Date();
        let aux = fecha.getTime() + (1000 * 60 * 60 * 24 / 365);
        let fechaExpiracion = new Date(aux);  //fecha dentro de un año

        document.cookie="contador=1; expires="+fechaExpiracion.toUTCString();
        alert(document.cookie);
    } else {//si existe
        let cont = parseInt(cookie.split("="));
        let fecha = new Date();
        let aux = fecha.getTime() + (1000 * 60 * 60 * 24 / 365);
        let fechaExpiracion = new Date(aux);  //fecha dentro de un año
        cont++;

        //Modifico la cookie
        document.cookie="contador=" + cont + "; expires=" + fechaExpiracion.toUTCString();
        alert("Visita registrada");
        alert("Van "+cont + " visitas");
    }
}else{
    let cookie = document.cookie;
    if (cookie != "") {//si existe la cookie
        //calculamos un año
        let fecha = new Date();
        let aux = fecha.getTime() + (1000 * 60 * 60 * 24 / 365);
        let fechaExpiracion = new Date(aux);  //fecha dentro de un año

        document.cookie = "contador=1; expires=" + fechaExpiracion.toUTCString();
    }
}

//se borran todas si no quiere