/*
Al pulsar en “añadir principio” agregará al principio del array el
contenido del cuadro de texto y mostrará el array en el área de texto

Al pulsar en “añadir final” agregará al final del array el contenido del 
cuadro de texto y mostrará el array en el área de texto

Al pulsar en “extraer principio” extraerá del array el primer elemento 
y lo mostrará en el cuadro de texto, también mostrará en el área de texto el array sin el elemento

Al pulsar en “extraer final” extraerá del array el último elemento y
 lo mostrará en el cuadro de texto, también mostrará en el área de texto el array sin el elemento
*/

let texto = document.getElementById("texto");//variable que recoge el input
let txtarea = document.getElementById("txtarea");//variable que reoge el text area del DOM
let btn1 = document.getElementById("btn1");//variable que recoge el boton 1 añadir al principio
let btn2 = document.getElementById("btn2");//variable que recoge el boton 2 añadir al final
let btn3 = document.getElementById("btn3");//variable que recoge el boton 3 extraer al principio
let btn4 = document.getElementById("btn4");//variable que recoge el boton 4 extraer al final
let btn5 = document.getElementById("btn5");//variable que recoge el boton 5 mostrar
let btn6 = document.getElementById("btn6");//variable que recoge el boton 5 limpiar

let arrayTexto = new Array();//array donde se guardara los elementos
let cadena1="";//variable cadena para todos

//funcion que muestra el array
btn5.addEventListener("click",()=>{
    for(cadena of arrayTexto){
        cadena1+=cadena+"\n";
    }
    txtarea.innerHTML=cadena1;
    cadena1="";
});

//funcion que limpia el textarea
btn6.addEventListener("click",()=>{
    txtarea.innerHTML="";
});

//añade al inicio
btn1.addEventListener("click",()=>{
    cadena="";
    cadena=texto.value;
    arrayTexto.unshift(cadena);
    //limpiamos primero
    txtarea.innerHTML="";

    //mostramos
    for(cadena of arrayTexto){
        cadena1+=cadena+"\n";
    }
    
    txtarea.innerHTML=cadena1;
    cadena="";
    cadena1="";
});

btn2.addEventListener("click",()=>{
    cadena=texto.value;
    arrayTexto.push(cadena);

    //limpiamos primero
    txtarea.innerHTML="";

    //mostramos
    for(cadena of arrayTexto){
        cadena1+=cadena+"\n";
    }
    
    txtarea.innerHTML=cadena1;
    cadena="";
    cadena1="";
});

btn3.addEventListener("click",()=>{
    cadena=arrayTexto.shift(arrayTexto);
    texto.value=cadena;

    //limpiamos primero
    txtarea.innerHTML="";

    //mostramos
    for(cadena of arrayTexto){
        cadena1+=cadena+"\n";
    }
    
    txtarea.innerHTML=cadena1;
    cadena="";
    cadena1="";
});

btn4.addEventListener("click",()=>{
    cadena=arrayTexto.pop(arrayTexto);
    texto.value=cadena;

    //limpiamos primero
    txtarea.innerHTML="";

    //mostramos
    for(cadena of arrayTexto){
        cadena1+=cadena+"\n";
    }
    
    txtarea.innerHTML=cadena1;
    cadena="";
    cadena1="";
});
//shif por el principio
//pop