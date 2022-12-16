/*
INICIO
document.cookie="nombre=Jesus";

let cadena;
let fecha = new Date();
let day,month,year;
day=fecha.getDate();
month=fecha.getMonth();
year=fecha.getFullYear();

document.cookie="fechaHoy="+day+"/"+month+"/"+year;

//console.log(document.cookie);

arrayCadena=document.cookie.split("; ");

for(cookie of arrayCadena){
    let aux=cookie.split("=");
    console.log(aux[0]+" tiene un valor de "+aux[1])
}*/

//ejemplo de uso de cookie detecta si tenemos cookies, y si es asi nos saluda.
let cookie = document.cookie;
let formulario = document.getElementById("formulario");
let borrar = document.getElementById("borrar");

let saludo = document.getElementById("saludo");
let boton = document.getElementById("boton");
let nombre = document.getElementById("nombre");
let idioma = document.getElementById("idioma");
let titulo=document.getElementById("titulo");
let arrayCadena,aux,coockie=[];

if (cookie == "") {
    formulario.style.display = "block";
    boton.addEventListener("click", () => {
        let fecha = new Date();
        let hora, min;

        hora = fecha.getHours();
        min = fecha.getMinutes();

        document.cookie = "nombre=" + nombre.value+";expires="+fecha.toUTCString();
        document.cookie = "idioma=" + idioma.value;
        document.cookie = "Hora=" + hora+":"+min;
    })//captura del click
}else{
    saludo.style.display="block";

    arrayCadena=document.cookie.split("; ");
    for(cookie of arrayCadena){
        aux=cookie.split("=");
        coockie.push(aux);
    }

    titulo.textContent="Buenos dias " + coockie[0][1] + " y tu idioma es "+ coockie[1][1];
}

/*borrar.addEventListener("click",()=>{
    let fecha = new Date();
    let mili=fecha.getTime()-1;
    let fechaBorrar=new Date(mili);
    document.cookie = "nombre=" + nombre.value+";expires="+fechaBorrar.toUTCString();
    document.cookie = "idioma=" + idioma.value+";expires="+fechaBorrar.toUTCString();
})*/