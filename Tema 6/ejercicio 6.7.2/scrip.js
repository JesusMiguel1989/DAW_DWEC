window.addEventListener("DOMContentLoaded",()=>{
    //previousElementSibling
    let secion = document.getElementById("s1");

    let elementos = document.querySelectorAll("section");

    for(par of elementos){
        par.addEventListener("click", (e) => {
            //el target coge el elemento que inicio el evento
            let hermano=e.target.previousElementSibling;
            hermano.remove();
            e.target.remove();
        }) 
    }    
})