window.addEventListener("DOMContentLoaded",()=>{
    let capa=document.getElementById("capa");
    let p=capa.getElementsByTagName("p");

    for(let parrafo of p){
        parrafo.addEventListener("click",(e)=>{
            let primero=capa.firstChild;
            capa.insertBefore(parrafo,primero);
        })
    }
})