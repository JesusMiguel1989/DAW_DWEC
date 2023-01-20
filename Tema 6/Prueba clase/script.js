window.addEventListener("load",()=>{
    let parrafo1=document.getElementsByTagName("p")[0];
    console.log(parrafo1.childNodes.length);//devuelve 3 porque indica que tiene 3 hijos, 2 textos y una etiqueta
    
    for(let nodo of parrafo1.childNodes){
        console.log(nodo);
    }

    /*
    for(let i=0;i<parrafo1.chlidNodes.length;i++){
        console.log(parrafo1.childNodes[i]);
    }
    */
    //CON la etiueta children solo muestra las ETIQUETAS hijas
    console.log(parrafo1.children.length);
    /*for(let i=0;i<parrafo1.chlidren.length;i++){
        console.log(parrafo1.children[i]);
    }*/

    //HERMANOS
    console.log(parrafo1.nextElementSibling.firstChild);
    //insertbefore inserta el primero (necesita el nodo a insertar y el nodo que lo seguira)
    //capa.insertBefore(parrafoNuevo,capa.firstElementChild);
    //.createTextNode crea un texto
    //.replaceChild sirve para cambiar nodos (recibe dos nodos el que reemplazara y el reemplazado)

    let parrafonuevo=document.createElement("p");
    parrafonuevo.textContent="Nuevo parrafo";
    //capa es de otro ejemplo de sergio
    //capa.replaceChild(parrafonuevo,parrafo1.firstElementChild.nextElementSibling);

    //capa.removeChild => se carga al hijo que le indiquemos

})