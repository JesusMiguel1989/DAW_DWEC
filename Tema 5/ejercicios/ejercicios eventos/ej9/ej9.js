function Fotos(){
    this.misFotos=[
        "<img src='../ej7/imagenesEjercicio7/foto1.jpg' alt='1. India - Agra - El Taj Majal.'>",
        "<img src='../ej7/imagenesEjercicio7/foto2.jpg' alt='2. Albania - Region de Ballsh.'>",
        "<img src='../ej7/imagenesEjercicio7/foto3.jpg' alt='3. Atenas- Partenón.'>",
        "<img src='../ej7/imagenesEjercicio7/foto4.jpg' alt='4. Bélgica - Amberes.'>",
        "<img src='../ej7/imagenesEjercicio7/foto5.jpg' alt='5. Costa Rica - Parque nacional de la Amistad.'>",
        "<img src='../ej7/imagenesEjercicio7/foto6.jpg' alt='6. Egipto - Templo de Abu Simbel.'>",
        "<img src='../ej7/imagenesEjercicio7/foto7.jpg' alt='7. España - Albacete ciudad.'>",
        "<img src='../ej7/imagenesEjercicio7/foto8.jpg' alt='8. España - Tarragona - Acueducto romano.'>"];
    this.indice=0;

    this.mostrarAleatorio=()=>{
        this.indice=Math.floor(Math.random()*(8-1)+1);//sacamos un numero aleatorio del 0 al 7
        return this.misFotos[this.indice];
    }

    this.descripcion=()=>{
        let cadena="";
        cadena=this.misFotos[this.indice].split("alt='");
        return cadena[1].substring(0,cadena[1].length-2);
    }//devolucion de la descripcion
}

let aleatorio=document.getElementById("aleatorio");
let parar=document.getElementById("parar");
let miTitulo=document.getElementById("mititulo");// div con la descripcion de la foto

let fotos = new Fotos();
let intervalo;

window.addEventListener("load", (ev) => { })

aleatorio.addEventListener("click",()=>{
    intervalo=setInterval(()=>{
        fotoActual.innerHTML=fotos.mostrarAleatorio();
        miTitulo.innerHTML=fotos.descripcion();
    },3000);
})//inicio presentacion

parar.addEventListener("click",()=>{
    clearInterval(intervalo);
})