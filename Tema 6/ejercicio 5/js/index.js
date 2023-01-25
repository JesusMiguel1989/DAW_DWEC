window.addEventListener("DOMContentLoaded", () => {
    let tarea = document.getElementById("tarea");
    let mas = document.getElementById("mas");
    let lista = document.getElementById("lista");
    let li = lista.getElementsByTagName("li");
    let a = lista.getElementsByTagName("a");

    mas.addEventListener("click", (ev) => {
        ev.preventDefault();
        if (tarea.value != "") {
            let nuevoSpan = document.createElement('li');
            nuevoSpan.innerHTML = "<span>" + tarea.value + "</span><a href='#'>Quitar</a>";
            lista.appendChild(nuevoSpan);
            nuevoSpan.firstElementChild.addEventListener("click",()=>{
                lista.insertBefore(nuevoSpan,lista.firstChild)
            })

            nuevoSpan.children[1].addEventListener("click",()=>{
                ev.preventDefault();
                lista.removeChild(nuevoSpan);
            })
        }

        /*
        for (let recorrer of li) {
            recorrer.addEventListener("click", (e) => {
                let primero = lista.firstChild;
                lista.insertBefore(recorrer, primero);
            })
        }//for

        for(let btn of a){
            btn.addEventListener("click",(e)=>{
                let borrar=e.target.parentElement;
                console.log(borrar);
                lista.removeChild(borrar);
            })
        }*/
        tarea.focus();

    });//evento click


})
