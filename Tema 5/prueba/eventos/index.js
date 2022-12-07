let texto = document.getElementById("texto");
let boton = document.getElementById("boton");
let capa = document.getElementById("capa");
let capa1 = document.getElementById("capa1");

//al dar al boton en textcontent sea lo que tiene que ser lo que contenga el input

function repetir(){
    //debe estar dentro para agregarle el listener
    for(let parrafo of document.getElementsByTagName("p")){
        parrafo.innerHTML=parrafo.textContent+'<input type="checkbox">';
        parrafo.style.border="1px solid red";


        parrafo.setAttribute("for","checkbox");

        //cuando le pinchamos en el parrafo
        parrafo.addEventListener("click",(e)=>{
            //e.target.style.display="none"; oculta elparrafo
            let input =document.getElementsByTagName("input");
            
            if(e.target.tagName="p"){
                if(e.target.children[0].checked){
                    e.target.children[0].checked=false;
                }else{
                    e.target.children[0].checked=true;
                }
            }

            
            console.log("esto es el target"+input.target);
            console.log("esto es el current target"+input.currenttarget);
            /*if(input.getAttributeNS=="checked"){
                input.removeAttribute("checked");
            }
            else{
                input.setAttribute("checked");
            } */
        })
    }
}

capa1.addEventListener("click",(ev)=>{
    if(ev.target.tagName=="DIV"){
        if(ev.target.children[0].children[0].checked){
            ev.target.children[0].children[0].checked=false;
        }else{
            ev.target.children[0].children[0].checked=true;
        }
    }
})


boton.addEventListener("click", () => {
    let tex1 = texto.value;
    let capaTexto = capa.innerHTML;
    //capa.textContent=tex1;

    //añadir al principio del div, insertar los nuevo elementos
    //con innerHTML insertamos el texto como etiqueta o texto
    capaTexto = tex1 + capaTexto;
    capa.innerHTML = capaTexto;   
    repetir();
});

repetir();
