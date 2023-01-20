window.addEventListener("DOMContentLoaded", () => {
    let secion = document.getElementById("s1");

    let parrafos = document.getElementsByTagName("p");
    for(par of parrafos){
        par.querySelector("input").addEventListener("click", (e) => {
            //el target coge el elemento que inicio el evento
            secion.removeChild(e.target.parentNode);
        }) 
    }    
})


//6.7.1-2-3