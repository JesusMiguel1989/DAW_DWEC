//funcion grabar cookie (nombre, Valor, caducidad)
//caducidad en segundos a partir de ese dia.
//si es menor a 1 es de sesion.

//funcion leerCokie (nombre)
//lee las cookies y devuelve la cookie con ese nombre (valor)

//funcion borrarCookie(nombre)
//elimina esa cookie.

function grabarCookie(nombre,valor,caducidad){
    let fecha = new Date();
    let aux= fecha.getTime()+(caducidad*1000);

    if(caducidad<1){
        document.cookie=nombre+"="+valor+";";
        alert("Cookie creada");
    }else{
        let fechaCaducidad=new Date(aux);
        document.cookie=nombre+"="+valor+"; expires="+fechaCaducidad.toUTCString();
        alert("Cookie creada");
    }
}//grabarCookie

function leerCookie(nombre){
    let cookie=document.cookie;

    let arraycookie=cookie.split("; ");
    for(let i=0;i<arraycookie.length;i++){
        let cadena=arraycookie[i].split("=");
        if(cadena[0]==nombre){
            return cadena[1];
        }//if que devuelve el valor de la cookie pedida
    }
    return "No encontre esa cookie";
}//leerCookie

function borrarCookie(nombre){
    let cookie=document.cookie;

    let fechaNueva=new Date(1);

    let arraycookie=cookie.split("; ");
    for(let i=0;i<arraycookie.length;i++){
        let cadena=arraycookie[i].split("=");
        if(cadena[0]==nombre){
            document.cookie=cadena[0]+"="+cadena[1]+"; expires="+fechaNueva.toUTCString();
        }//if que borra la cookie pedida
    }
}//borrar cookie