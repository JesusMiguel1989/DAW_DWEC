let respuesta = confirm("¿Quieres guardar cookies?");

if(respuesta==true){
    let fecha = new Date();
    let miliAño=fecha.getTime()+(1000*60*60*24*365);
    let fechaCaducidad=new Date(miliAño);
    

    if(document.cookie==""){
        grabarCookie("Visitas",1,fechaCaducidad.toUTCString());
        //document.cookie="Visitas="+1+"; expires="+fechaCaducidad.toUTCString();
        console.log(document.cookie);
    }else{
        let cookie=document.cookie;
        let visitas=cookie.split("=");

        visitas[1]=parseInt(visitas[1])+1;
        grabarCookie("Visitas",visitas[1],fechaCaducidad.toUTCString());
        //document.cookie="Visitas="+visitas[1]+"; expires="+fechaCaducidad.toUTCString();
        alert("Visita registrada");
        alert("Van "+visitas[1] + " visitas");
    }
}else{
    let cookie = document.cookie;
    if (cookie != "") {//si existe la cookie
        //calculamos un año
        let fechaExpiracion = new Date(1);  //fecha dentro de un año

        //document.cookie = "Visitas=1; expires=" + fechaExpiracion.toUTCString();
        borrarCookie("Visitas");
    }
}