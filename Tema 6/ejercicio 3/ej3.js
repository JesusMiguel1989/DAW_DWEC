window.addEventListener("DOMContentLoaded", () => {
    window.setTimeout(() => {
        let capa=document.getElementById("capa");
        let parrafos = capa.querySelectorAll("p");
        let oculto =document.getElementById("oculta");
        let par=oculto.querySelectorAll("p");//nose porque no va
        let inverso = 0;

        for (let i = 0; i < parrafos.length / 2; i++) {
            //console.log(parrafos[longitud-i]);
            let parrafoViejo = capa.replaceChild(parrafos[(parrafos.length - 1) - inverso], parrafos[i]);
            oculto.appendChild(parrafoViejo);
            inverso++;
        }//cambia el orden fase 1
        console.log(oculto.querySelectorAll("p").length);
        
        for(i=inverso-1;i>=0;i--){
            capa.appendChild(oculto.querySelectorAll("p")[i]);
        }
    }, 5000);
})