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

    this.mostrarInicial=()=>{
        this.indice=0;
        return this.misFotos[0];
    }//inicio

    this.mostrarFinal=()=>{
        this.indice=7;
        return this.misFotos[7];
    }//final

    this.mostrarSiguiente=()=>{
        if(this.indice<7){
            this.indice++;
            return this.misFotos[this.indice];
        }else{
            return this.misFotos[this.indice];
        }
    }//siguiente

    this.mostrarAnterior=()=>{
        if(this.indice>0){
            this.indice--;
            return this.misFotos[this.indice];
        }else{
            return this.misFotos[this.indice];
        }
    }//anterior

    this.descripcion=()=>{
        let cadena="";
        cadena=this.misFotos[this.indice].split("alt='");
        return cadena[1].substring(0,cadena[1].length-2);
    }//devolucion de la descripcion
}

//variables
let fotoActual=document.getElementById("fotoActual");//div que contiene la foto
let inicio=document.getElementById("inicio");//boton inicio
let anterior=document.getElementById("anterior");//boton anterior
let siguiente=document.getElementById("siguiente");//boton siguiente
let final=document.getElementById("final");//boton final

let miTitulo=document.getElementById("mititulo");// div con la descripcion de la foto

let fotos = new Fotos();

window.addEventListener("load", (ev) => { })

inicio.addEventListener("click",()=>{

    fotoActual.innerHTML=fotos.mostrarInicial();
    miTitulo.innerHTML=fotos.descripcion();
})//boton inicio

final.addEventListener("click",()=>{
    fotoActual.innerHTML=fotos.mostrarFinal();
    miTitulo.innerHTML=fotos.descripcion();
})//boton final

siguiente.addEventListener("click",()=>{
    fotoActual.innerHTML=fotos.mostrarSiguiente();
    miTitulo.innerHTML=fotos.descripcion();
})//boton siguiente

anterior.addEventListener("click",()=>{
    fotoActual.innerHTML=fotos.mostrarAnterior();
    miTitulo.innerHTML=fotos.descripcion();
})